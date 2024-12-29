import Storage from './storage.js';

const Timer = {
  async start() {
    chrome.runtime.sendMessage({ action: 'startTimer' });
  },

  async stop() {
    chrome.runtime.sendMessage({ action: 'stopTimer' });
  }
};

export default Timer;