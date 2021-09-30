import refs from "./refs.js";
const { fieldDays, fieldHours, fieldMins, fieldSecs } = refs;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.intervalID = null;
    this.time = 0;
  }
  start() {
    this.intervalID = setInterval(() => {
      let currentDate = Date.now();
      this.time = this.targetDate - currentDate;

      const days = String(Math.floor(this.time / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const mins = String(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const secs = String(Math.floor((this.time % (1000 * 60)) / 1000)).padStart(2, "0");

      this.insertData(fieldDays, days);
      this.insertData(fieldHours, days);
      this.insertData(fieldMins, mins);
      this.insertData(fieldSecs, secs);
    }, 1000);
  }

  insertData(place, value) {
    place.textContent = value;
  }
}

const myTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 06, 2021"),
});

myTimer.start();
