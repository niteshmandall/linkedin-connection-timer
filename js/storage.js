// Handles all storage related operations with error handling
const Storage = {
  async get(keys) {
    try {
      return await chrome.storage.local.get(keys);
    } catch (error) {
      console.error('Storage get error:', error);
      return {};
    }
  },

  async set(items) {
    try {
      await chrome.storage.local.set(items);
    } catch (error) {
      console.error('Storage set error:', error);
    }
  },

  async initialize() {
    try {
      await this.set({
        isTimerRunning: false,
        connectionsLeft: 100,
        timeLeft: 0
      });
    } catch (error) {
      console.error('Storage initialization error:', error);
    }
  }
};

export default Storage;