let startRef = document.querySelector(".start");
let stopRef = document.querySelector(".stop");
let resetRef = document.querySelector(".reset");
let minRef = document.querySelector(".minutes");
let secRef = document.querySelector(".seconds");
let timer;
let minTimer;

startRef.addEventListener("click", () => {
  startSecTiming();
  startMinTiming();
});

stopRef.addEventListener("click", () => {
  stopTimer();
});

resetRef.addEventListener("click", () => {
  reset();
});

const startSecTiming = () => {
  timer = setInterval(() => {
    let currentSec = Number(secRef.innerText);
    if (currentSec < 59) {
      let newSeconds = currentSec + 1;
      secRef.innerText = newSeconds.toString().padStart(2, "0");
    } else {
      clearInterval(timer);
      secRef.innerText = "00";
      startSecTiming();
    }
  }, 1000);
};

const startMinTiming = () => {
  minTimer = setInterval(() => {
    let currentMin = Number(minRef.innerText);
    if (currentMin < 59) {
      let newMin = currentMin + 1;
      minRef.innerText = newMin.toString().padStart(2, "0");
    } else {
      clearInterval(minTimer);
      startMinTiming();
    }
  }, 60000);
};

const stopTimer = () => {
  clearInterval(timer);
  clearInterval(minTimer);
};

const reset = () => {
  secRef.innerText = "00";
  minRef.innerText = "00";
  clearInterval(timer);
  clearInterval(minTimer);
};
