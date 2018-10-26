$(document).ready(() => {
  // Get HTML elements
  let startNewRetroButton = $("#start-new-button");
  let timeText = $("#time");
  let discussionSection = $("#discuss");

  // Timer values

  const postingTime = 1000 * 60 * 60;
  const postingTimeWarning = 1000 * 60 * 50;

  // Aux functions

  function checkTimeLeft(time, timeMax) {
    if (time >= timeMax) {
      timeText.css({ "color": "#FF0000" });
    }
  }

  function getTimerValue(timeNow, warningTime) {
    checkTimeLeft(timeNow, warningTime);

    const minutes = Math.floor(timeNow / (1000 * 60));
    const seconds = Math.floor(timeNow / 1000) % 60;
    const minutesString = minutes < 10 ? "0" + minutes : minutes;
    const secondsString = seconds < 10 ? "0" + seconds : seconds;

    return minutesString + ":" + secondsString;
  }

  function timer(maxValue, maxValueWarning) {
    let timeNow = 0;
    let timeLeft = maxValue;
    const interval = setInterval(() => {
      timeNow = timeNow + 1000;
      timeLeft = timeLeft - 1000;
      if (timeLeft >= 0) {
        const newTimeValue = getTimerValue(timeNow, maxValueWarning);
        timeText.text(newTimeValue);
      }
      if (timeLeft === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  startNewRetroButton.on("click", () => {
    startNewRetroButton.hide({
      duration: 100
    });
    timeText.text("00:00");
    timeText.show({
      duration: 400,
      complete: timer(postingTime, postingTimeWarning)
    });
    discussionSection.show({
      duration: 400
    });
  });
});
