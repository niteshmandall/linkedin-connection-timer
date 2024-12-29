import { formatTime } from '../utils.js';

export default class StatusUpdater {
  static updateTimer(timeLeft = 0) {
    document.getElementById('timeLeft').textContent = formatTime(timeLeft);
  }

  static updateConnections(count = 100) {
    document.getElementById('connectionsLeft').textContent = count;
  }

  static updateButtons(isTimerRunning) {
    document.getElementById('startTimer').disabled = isTimerRunning;
    document.getElementById('stopTimer').disabled = !isTimerRunning;
  }
}