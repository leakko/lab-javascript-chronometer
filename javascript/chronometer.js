let currentTime = 0;
let currentMinute = 0;

class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;

    // ... your code goes here
  }

  startClick(callback) {
    // ... your code goes here
    
    const intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    if (currentTime === 60) {
      this.currentTime = 0;
      currentMinute += 1;
    }
  }
  getMinutes() {
    return currentMinute;
    // ... your code goes here
  }
  getSeconds() {
    // ... your code goes here
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}

const chrono = new Chronometer()