$(document).ready(() => {
  // Get HTML elements
  let startNewRetroButton = $("#start-new-button");
  let timeText = $("#time");
  let discussionSection = $("#discuss");
  let mentionSection = $("#mention");

  var posts = 0;

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
    mentionSection.show({
      duration: 400
    });
  });

  $("#txt" + posts).on('keyup', autosize);

  function autosize() {
    $(this).css({
      "height": this.scrollHeight + 'px'
    });
  }

  $("#txt" + posts).on('keypress', onEnter);

  function RefreshSomeEventListener() {
    $("#txt" + (posts - 1)).off();
    $("#txt" + posts).on('keyup', autosize);
    $("#txt" + posts).on('keypress', onEnter);
  }

  function resizeBox() {
    const lineHeight = parseInt($("#txt" + posts).css('line-height'), 10);
    const width50 = $("#txt" + posts).width();
    const cant = $("#txt" + posts).height() / lineHeight;
    $("#txt" + (posts)).css({
      "width": "90%",
    });
    const width90 = $("#txt" + posts).width();
    const k = Math.ceil(width90 / width50);
    $("#txt" + (posts)).css({
      "height": Math.ceil((cant / k)) * lineHeight + 'px',
    });
  }

  function appendTextArea() {
    $("#txt" + posts).prop("readonly", true);
    resizeBox();
    $("#txt" + (posts)).css({
      "margin": "0 0 5px 0",
      "border": "1px solid #02a397",
      "border-radius": "3px",
      "padding": "2px",
    });
    $("#txt" + (posts)).blur();
    posts++;
    mentionSection.append("<textarea class=\"txtarea\" id=\"txt" + posts + "\" placeholder=\"To mention..\" rows='1'></textarea>");
    $("#txt" + (posts)).css({
      "margin-top": "10px",
    });
    RefreshSomeEventListener();
  }

  function onEnter() {
    if (event.which == 13 && ($("#txt" + posts).val() != "\n\n") && ($("#txt" + posts).val() != "")) {
      appendTextArea();
    }
  }

  $("html").on("click", (event) => {
    if ($("#txt" + posts).val() != "" && $("#txt" + posts)[0] != event.target) {
      appendTextArea();
    }
  });
});
