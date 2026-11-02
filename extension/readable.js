// Turns percent-encoded text into characters people can read, and leaves alone anything
// whose encoding carries meaning: %26 must not become a real & or the pasted URL changes.
const MUST_STAY_ENCODED = /[\s\x00-\x7f\u{200b}-\u{200f}\u{2028}-\u{202f}\u{2060}-\u{206f}\u{feff}]/gu;

function encodeChar(char) {
  return encodeURIComponent(char).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

function readableUrl(url) {
  return url.replace(/(?:%[0-9a-f]{2})+/gi, (encoded) => {
    try {
      return decodeURIComponent(encoded).replace(MUST_STAY_ENCODED, encodeChar);
    } catch {
      // Not UTF-8, such as an older Big5 link: decoding would garble it, so keep it as it is.
      return encoded;
    }
  });
}

async function copyUrl(url) {
  const text = readableUrl(url);
  try {
    await navigator.clipboard.writeText(text);
    alert(`${chrome.i18n.getMessage('copied')}\n${text}`);
  } catch {
    alert(chrome.i18n.getMessage('copyFailed'));
  }
}
