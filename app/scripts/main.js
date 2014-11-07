function runClock() {

  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  // Hours
  var hourNode = document.createElement('p');
  var newHour = document.createTextNode(hour);
  hourNode.appendChild(newHour);
  var placeHour = document.getElementById('hours');
  placeHour.appendChild(hourNode);

  // Minutes
  var minutesNode = document.createElement('p');
  var newMinute = document.createTextNode(minutes);
  minutesNode.appendChild(newMinute);
  var placeMinute = document.getElementById('minutes');
  placeMinute.appendChild(minutesNode);

  // Seconds
  var secondsNode = document.createElement('p');
  var newSecond = document.createTextNode(seconds);
  secondsNode.appendChild(newSecond);
  var placeSeconds = document.getElementById('seconds');
  placeSeconds.appendChild(secondsNode);

  setTimeout(runClock, 1000);

}

runClock();
