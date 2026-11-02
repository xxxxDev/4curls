// Names used only for tracking, whatever the site.
const TRACKING = new Set([
  'utm_source', 'utm_medium', 'utm_term', 'utm_campaign', 'utm_content',
  'fbclid', 'gclid', 'igshid', 'chdtv', 'clickid', 'deep_and_deferred',
  'af_click_lookback', 'af_reengagement_window', 'af_installpostback', 'af_siteid', 'af_sub2', 'af_sub3', 'is_retargeting',
]);

// Ordinary words on most sites, where they can pick a product or a page. Removed on these sites only.
const BY_SITE = [
  [/(^|\.)facebook\.com$/, ['comment_id', 'reply_comment_id', 'notif_id', 'notif_t', 'eid', 'multi_permalinks', 'sk', 'fref', '__tn__', 'dti', 'hc_location', 'scid', 'pr', 'from']],
  [/(^|\.)youtube\.com$/, ['si', 'pp', 'feature']],
];

function withoutTracking(location) {
  const siteNames = BY_SITE.find(([host]) => host.test(location.hostname))?.[1] ?? [];
  const pairs = location.search.slice(1).split('&').filter(Boolean);
  const names = pairs.map((pair) => pair.split('=')[0]);
  // pid is AppsFlyer's only when it comes with their other parameters; alone it's usually a product id.
  const appsFlyer = names.some((name) => name.startsWith('af_'));
  const kept = pairs.filter((_, i) => !TRACKING.has(names[i]) && !siteNames.includes(names[i]) && !(appsFlyer && names[i] === 'pid'));
  // Kept pairs are joined as they were: rebuilding them would change the encoding of the rest.
  return location.pathname + (kept.length ? `?${kept.join('&')}` : '') + location.hash;
}

function canonicalPath() {
  // Mobile01's topic pages carry their real address in og:url.
  if (!/(^|\.)mobile01\.com$/.test(location.hostname) || !/^\/(topicdetail|promotion)\.php$/.test(location.pathname)) return null;
  const tag = document.querySelector("meta[property~='og:url'][content]");
  if (!tag) return null;
  const target = new URL(tag.content, location.href);
  return target.origin === location.origin ? target.pathname + target.search + target.hash : null;
}

function cleanAddressBar() {
  const clean = canonicalPath() ?? withoutTracking(location);
  if (clean !== location.pathname + location.search + location.hash) history.replaceState(history.state, '', clean);
}

function urlToCopy() {
  if (/(^|\.)youtube\.com$/.test(location.hostname) && location.pathname === '/watch') {
    const video = new URLSearchParams(location.search).get('v');
    if (video) return `https://youtu.be/${video}`;
  }
  return location.href;
}

cleanAddressBar();

chrome.runtime.onMessage.addListener((request) => {
  if (request.message !== 'copyUrl') return;
  // Single-page sites change address without a reload, so clean again before copying.
  cleanAddressBar();
  copyUrl(urlToCopy());
});
