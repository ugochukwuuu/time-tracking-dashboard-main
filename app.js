window.onload = () => {
  weeklyButton.classList.add("selected");
};
var myJson = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const studyCurrent = document.querySelector(".study__current");
const selfCareCurrent = document.querySelector(".self-care__current");

const dailyButton = document.querySelector(".daily-button");
const weeklyButton = document.querySelector(".weekly-button");
const monthlyButton = document.querySelector(".monthly-button");

const currentTime = document.querySelectorAll(".current__time");
const previousTime = document.querySelectorAll(".previous__hr");
const previousDate = document.querySelectorAll(".previous__date");

const toggleButtons = document.querySelectorAll(".buttton");

toggleButtons.forEach((buttton) => {
  buttton.addEventListener("click", (e) => {
    toggleButtons.forEach((buttton) => buttton.classList.remove("selected"));
    e.target.classList.add("selected");
  });
});

dailyButton.addEventListener("click", () => {
  for (let i = 0; i <= currentTime.length; i++) {
    currentTime[i].textContent = `${myJson[i].timeframes.daily.current}hrs`;
    previousTime[i].textContent = `${myJson[i].timeframes.daily.previous}hrs`;
    previousDate[i].textContent = "Yesterday";
  }
});
weeklyButton.addEventListener("click", () => {
  for (let i = 0; i <= currentTime.length; i++) {
    currentTime[i].textContent = `${myJson[i].timeframes.weekly.current}hrs`;
    previousTime[i].textContent = `${myJson[i].timeframes.weekly.previous}hrs`;
    previousDate[i].textContent = "Last Week";
  }
});
monthlyButton.addEventListener("click", () => {
  for (let i = 0; i <= currentTime.length; i++) {
    currentTime[i].textContent = `${myJson[i].timeframes.monthly.current}hrs`;
    previousTime[i].textContent = `${myJson[i].timeframes.monthly.previous}hrs`;
    previousDate[i].textContent = "Last Month";
  }
});
