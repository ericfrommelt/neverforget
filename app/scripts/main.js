function runClock() {

  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

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

  var generateBars = function() {
    for (var i=0; i<seconds; i++) {
      var newSecondBar = document.createElement('div');
      var placeSecondBar = document.getElementById('seconds-bar');
      placeSecondBar.appendChild(newSecondBar);
    }
  }

  setTimeout(generateBars, 1000);

  var secondsPlacement = document.getElementById('seconds-wrapper');
  var secondsBars = secondsPlacement.innerHTML;
  secondsBars.innerHTML = generateBars();


  setTimeout(runClock, 1000);

}

runClock();
