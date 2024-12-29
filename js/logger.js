const Logger = {
  async log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      type,
      message
    };

    // Store in chrome.storage for persistence
    const { logs = [] } = await chrome.storage.local.get('logs');
    logs.push(logEntry);
    
    // Keep only last 100 logs
    if (logs.length > 100) {
      logs.shift();
    }
    
    await chrome.storage.local.set({ logs });
    
    // Also log to console for development
    console.log(`[${type.toUpperCase()}] ${message}`);
  },

  async getLogs() {
    const { logs = [] } = await chrome.storage.local.get('logs');
    return logs;
  },

  async clearLogs() {
    await chrome.storage.local.set({ logs: [] });
  }
};

export default Logger;