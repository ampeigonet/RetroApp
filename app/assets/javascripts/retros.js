// Get/initialize elements

document.addEventListener("DOMContentLoaded", function(event) {
  let startNewRetroButton = document.getElementById("start-new-button");
  let timeText = document.getElementById("time");

  let timeNow;

  // Set timer values

  const postTimer = 1000 * 60 * 60;

  // Aux functions

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
        document.getElementById("time").innerText = newValue;
      }
      if (timeLeft === 0) {
        clearInterval(timeLeft);
      }
    }, 1000);
  }

  startNewRetroButton.addEventListener("click", function() {
    startNewRetroButton.style.display = "none";
    timeNow = 0;
    document.getElementById("time").innerText = "00:00";
    timeText.style.display = "inline";
    startTimer();
  });
});
