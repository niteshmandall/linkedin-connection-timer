// This file can be used to add any LinkedIn-specific functionality
// Currently, it's included but not actively used as the core functionality
// is handled through the popup and background script

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (message.action === 'updateTimer') {
    console.log('Timer updated');
    // Handle the timer update here
    sendResponse({ status: 'success' });
  }
});