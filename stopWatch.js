class StopWatch {
  time = document.querySelector(".display .time");
  toggleBtn = document.querySelector(".buttons .toggle");
  resetBtn = document.querySelector(".buttons .reset");
  constructor() {
    this.time.textContent = "00:00:00";
    this.toggleBtn.textContent = "Start";
    this.resetBtn.textContent = "Reset";
    this.toggleBtn.addEventListener("click", this.toggleTimer);
    this.resetBtn.addEventListener("click", this.resetTimer);
    this.timer = null;
  }

  toggleTimer = () => {
    if (this.toggleBtn.textContent === "Start") {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  };

  startTimer = () => {
    this.toggleBtn.textContent = "Stop";
    this.timer = setInterval(this.incrementTimer, 100);
  };

  stopTimer = () => {
    this.toggleBtn.textContent = "Start";
    clearInterval(this.timer);
  };

  incrementTimer = () => {
    const timeParts = this.time.textContent.split(":");
    let miliSeconds = parseInt(timeParts[2]);
    let seconds = parseInt(timeParts[1]);
    let minutes = parseInt(timeParts[0]);
    miliSeconds++;
    if (miliSeconds > 10) {
      miliSeconds = 0;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          this.stopTimer();
          return;
        }
      }
    }
    this.time.textContent = `${this.formatTime(minutes)}:${this.formatTime(
      seconds
    )}:${this.formatTime(miliSeconds)}`;
  };

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  resetTimer = () => {
    this.stopTimer();
    this.time.textContent = "00:00:00";
  };
}

const stopWatch = new StopWatch();
