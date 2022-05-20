console.log('background');
//bounty coins-- id-bounty
//remaining time---id-tRem
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });