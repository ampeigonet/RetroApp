$(document).ready(function() {
  // Get HTML elements
  let startNewRetroButton = $("#start-new-button");
  let timeText = $("#time");
  let discussionSection = $("#discuss");
  let mentionSection = $("#mention");

  let timeNow;

  // Timer values

  const postTimer = 1000 * 60 * 60;

  function checkTimeLeft() {
    if (timeNow === postTimer) {
      return false;
    } else if (timeNow >= 1000 * 60 * 50) {
      timeText.style.color = "#FF0000";
      return true;
    }
  }

  function getTimerValue() {
    timeNow = timeNow + 1000;

    let continueTimer = checkTimeLeft();

    if (!continueTimer) {
      clearInterval();
    }

    const minutes = Math.floor(timeNow / (1000 * 60));
    const seconds = Math.floor(timeNow / 1000) % 60;

    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    let secondsString = seconds < 10 ? "0" + seconds : seconds;

    return minutesString + ":" + secondsString;
  }

  function startTimer() {
    let timeLeft = postTimer;
    setInterval(function() {
      timeLeft = timeLeft - 1000;
      if (timeLeft >= 0) {
        let newValue = getTimerValue();
        timeText.text(newValue);
      }
      if (timeLeft === 0) {
        clearInterval(timeLeft);
      }
    }, 1000);
  }

  startNewRetroButton.on("click", function() {
    startNewRetroButton.hide({
      duration: 100
    });
    timeNow = 0;
    timeText.text("00:00");
    timeText.show({
      duration: 400,
      complete: startTimer()
    });
    discussionSection.show({
      duration: 400
    });
    mentionSection.show({
      duration: 400
    });
  });
});
