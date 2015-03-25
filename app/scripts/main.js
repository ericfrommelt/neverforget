// Get Initial Time
var getCurrentTime = new Date();

// Set initial seconds
var getCurrentSecond = getCurrentTime.getSeconds();
var setInitialSeconds = document.getElementById('seconds-wrapper');
var setInitialSecondBars = setInitialSeconds.innerHTML;
for (var i=1; i<=getCurrentSecond; i++) {
  var newInitialSecondBar = document.createElement('div');
  setInitialSeconds.appendChild(newInitialSecondBar);
}

// Set initial minutes
var getCurrentMinute = getCurrentTime.getMinutes();
getCurrentMinute = getCurrentMinute + 1;
var setInitialMinutes = document.getElementById('minutes-wrapper');
var setInitialMinuteBars = setInitialMinutes.innerHTML;
for (var i=1; i<getCurrentMinute; i++) {
  var newInitialMinuteBar = document.createElement('div');
  setInitialMinutes.appendChild(newInitialMinuteBar);
}

// Set initial hours
var getCurrentHour = getCurrentTime.getHours();
getCurrentHour = getCurrentHour +1;
var setInitialHours = document.getElementById('hours-wrapper');
var setInitialHourBars = setInitialHours.innerHTML;
for (var i=1; i<getCurrentHour; i++) {
  var newInitialHourBar = document.createElement('div');
  setInitialHours.appendChild(newInitialHourBar);
}

// Load JSON
function loadJson(callback) {
  var getTimestamp = [];
  var getEvent = [];
  $.getJSON('data/data.json', function(data){

    // Loop through the events and create callbacks for each
    for (var i=0; i<=132; i++) {
      getTimestamp.push(data.theEvents[i].timestamp);
      getEvent.push(data.theEvents[i].eventDetails);
      // Check if what we're calling is indeed a callback (due to asynch loading)
    }
    if (typeof callback == 'function') {
      callback(getTimestamp);
      callback(getEvent);
    }
    //console.log('json loaded');
    // console.log('timestamp0: ' + timestamp[0]);
    // console.log('getEvent0: ' + getEvent[0]);
  });
}

// Push json data to an array
var storeEvents = [];
var storeTimestamps = [];

loadJson(function(getTimestamp) {
  storeTimestamps.push(getTimestamp);
  console.log('storeTimestamps: ' + storeTimestamps[0]);
})

loadJson(function(getEvent) {
  storeEvents.push(getEvent);
  console.log('storeEvents: ' + storeEvents[1]);
});

// Add zero to numbers less than 10
function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function runClock() {

  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  seconds = seconds + 1;

  // Set current time to a string
  var currentTimeString = hour.toString() + minutes.toString() + seconds.toString();
  //console.log('currentTime: ' + currentTimeString);

  // Add a zero if time is less than 10
  seconds = addZero(seconds);
  minutes = addZero(minutes);

  // Hours
  var hoursNode = document.getElementById('hours');
  var theHour = hoursNode.innerHTML;
  hoursNode.innerHTML = hour + ':';

  // Minutes
  var minutesNode = document.getElementById('minutes');
  var theMinute = minutesNode.innerHTML;
  minutesNode.innerHTML = minutes + ':';

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

  // Generate bars for minutes
  var placeMinuteBar = document.getElementById('minutes-wrapper');
  var minuteBars = placeMinuteBar.innerHTML;
  var newMinuteBar = document.createElement('div');

  // If minutes equal 0, clear all bars
  if (minutes == 0) {
    placeMinuteBar.innerHTML = '<span></span>';
  }
  // If seconds equql 1 add a new minute bar
  if (seconds == 1) {
    placeMinuteBar.innerHTML = '';
    placeMinuteBar.appendChild(newMinuteBar);
  }

  // Generate bars for hours
  var placeHourBar = document.getElementById('hours-wrapper');
  var hourBars = placeHourBar.innerHTML;
  var newHourBar = document.createElement('div');

  if (minutes == 0 && seconds == 1) {
    placeHourBar.appendChild(newHourBar);
  }

  function checkClock() {
    var contentBox = document.getElementById('content');
    var arrLength;

    if (typeof storeTimestamps[0] === 'undefined') {

    } else {
      arrLength = storeTimestamps[0].length;
    }

    for (var i=0; i<arrLength; i++) {
      if (currentTimeString == storeTimestamps[0][i]) {
        contentBox.innerHTML = storeEvents[1][i];
      }
      //console.log('i: ' + i);
    }

  }
  checkClock();

  setTimeout(runClock, 1000);
}

runClock();
