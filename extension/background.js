chrome.action.onClicked.addListener((tab) => {
  // A page the extension can't run on has no listener; there is nothing to copy there.
  chrome.tabs.sendMessage(tab.id, { message: 'copyUrl' }).catch(() => {});
});
