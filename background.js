import Storage from './js/storage.js';
import { NOTIFICATION_SETTINGS } from './js/config/constants.js';

chrome.runtime.onInstalled.addListener(() => {
  Storage.initialize();
});

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === 'startTimer') {
    const { timeLeft } = await Storage.get(['timeLeft']);
    if (!timeLeft) {
      const newInterval = Math.floor(Math.random() * 60) + 60;
      await Storage.set({ 
        timeLeft: newInterval,
        isTimerRunning: true 
      });
    }
    chrome.alarms.create('connectionTimer', { periodInMinutes: 1/60 }); // Run every second
  } else if (message.action === 'stopTimer') {
    chrome.alarms.clear('connectionTimer');
    await Storage.set({ 
      isTimerRunning: false,
      timeLeft: 0 
    });
  }
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'connectionTimer') {
    const { timeLeft } = await Storage.get(['timeLeft']);
    let newTimeLeft = timeLeft || 0;

    if (newTimeLeft <= 0) {
      const newInterval = Math.floor(Math.random() * 60) + 60;
      newTimeLeft = newInterval;
      chrome.notifications.create(NOTIFICATION_SETTINGS);
    }

    newTimeLeft--;
    await Storage.set({ timeLeft: newTimeLeft });
    chrome.runtime.sendMessage({ action: 'updateTimer' });
  }
});