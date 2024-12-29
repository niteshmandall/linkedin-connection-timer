import Storage from './js/storage.js';
import Timer from './js/timer.js';
import Counter from './js/counter.js';
import StatusUpdater from './js/ui/statusUpdater.js';

async function updateUI() {
  const { isTimerRunning, connectionsLeft, timeLeft } = await Storage.get([
    'isTimerRunning',
    'connectionsLeft',
    'timeLeft'
  ]);

  StatusUpdater.updateTimer(timeLeft);
  StatusUpdater.updateConnections(connectionsLeft);
  StatusUpdater.updateButtons(isTimerRunning);
}

document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  
  document.getElementById('startTimer').addEventListener('click', () => {
    Timer.start();
    updateUI();
  });

  document.getElementById('stopTimer').addEventListener('click', () => {
    Timer.stop();
    updateUI();
  });

  document.getElementById('decrementCounter').addEventListener('click', async () => {
    await Counter.decrement();
    updateUI();
  });

  document.getElementById('resetCounter').addEventListener('click', async () => {
    await Counter.reset();
    updateUI();
  });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'updateTimer') {
    updateUI();
  }
});