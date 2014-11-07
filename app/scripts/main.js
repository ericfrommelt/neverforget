var getCurrentTime = new Date();
var getCurrentSecond = getCurrentTime.getSeconds();
var setInitialSeconds = document.getElementById('seconds-wrapper');
var setInitialSecondBars = setInitialSeconds.innerHTML;
for (var j=1; j<=getCurrentSecond; j++) {
  var newInitialSecondBar = document.createElement('div');
  setInitialSeconds.appendChild(newInitialSecondBar);
}

function runClock() {

  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  seconds = seconds + 1;

  // Hours
  var hoursNode = document.getElementById('hours');
  var theHour = hoursNode.innerHTML;
  hoursNode.innerHTML = hour;

  // Minutes
  var minutesNode = document.getElementById('minutes');
  var theMinute = minutesNode.innerHTML;
  minutesNode.innerHTML = minutes;

  // Seconds
  var secondsNode = document.getElementById('seconds');
  var theSeconds = secondsNode.innerHTML;
  secondsNode.innerHTML = seconds;

  // Generate bars for seconds

  var placeSecondBar = document.getElementById('seconds-wrapper');
  var secondBars = placeSecondBar.innerHTML;
  var newSecondBar = document.createElement('div');

  // If seconds equal 0 clear all bars

  if (seconds == 1) {
    placeSecondBar.innerHTML = '<div></div>';
  } else {
    for (var i=1; i<=seconds; i++) {
      placeSecondBar.appendChild(newSecondBar);
    }
  }


  setTimeout(runClock, 1000);

}

runClock();
