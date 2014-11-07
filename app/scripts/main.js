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

  setTimeout(runClock, 1000);

}

runClock();
