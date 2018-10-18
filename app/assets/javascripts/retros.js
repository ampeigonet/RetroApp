document.addEventListener("DOMContentLoaded", function (event) {

  // DOM elements

  let startNewRetroButton = document.getElementById("start-new-button");
  let timeText = document.getElementById("time");

  // Set timer values

  const postingTime = 1000 * 60 * 60;
  const postingTimeWarning = 1000 * 60 * 50;

  // Aux functions

  function checkTimeLeft(time, timeMax) {
    if (time >= timeMax) {
      timeText.style.color = "#FF0000";
    }
  }

  function getTimerValue(timeNow, warningTime) {
    checkTimeLeft(timeNow, warningTime);

    const minutes = Math.floor(timeNow / (1000 * 60));
    const seconds = Math.floor(timeNow / 1000) % 60;

    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    let secondsString = seconds < 10 ? "0" + seconds : seconds;

    return minutesString + ":" + secondsString;
  }

  function timer(maxValue, maxValueWarning) {
    let timeNow = 0;
    let timeLeft = maxValue;
    const interval = setInterval(function () {
      timeNow = timeNow + 1000;
      timeLeft = timeLeft - 1000;
      if (timeLeft >= 0) {
        const newTimeValue = getTimerValue(timeNow, maxValueWarning);
        document.getElementById("time").innerText = newTimeValue;
      }
      if (timeLeft === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  startNewRetroButton.addEventListener("click", function () {
    startNewRetroButton.style.display = "none";
    document.getElementById("time").innerText = "00:00";
    timeText.style.display = "inline";
    timer(postingTime, postingTimeWarning);
  });
});
