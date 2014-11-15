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
  var getEvent;
  $.getJSON('scripts/data.json', function(data){

    // var theEvent = [];
    // for(var i = 0; i < 5; i++) {
    //   theEvent[i] = theEvent + i;
    // }

    // getEvent is currently pulling 1 event at a time before passing it on to
    // storeEvents which gets accessed by the checkClock() function to pull and
    // display it. Need to figure out a way to loop through all the events in
    // the json file, create a variable for each and pass along to storeEvents
    
    getEvent = data.theEvents[1].eventDetails;
    if (typeof callback == 'function') {
      callback(getEvent);
    }

    console.log('json loaded');
  });
}

// Push json data to an array
var storeEvents = [];
loadJson(function(getEvent){
  storeEvents.push(getEvent);
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

  if (seconds == 1) {
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

    if (hour == 3 && minutes == 30) {
      contentBox.innerHTML = storeEvents[0];
    } else if (hour == 16 && minutes == 41) {
      contentBox.innerHTML = storeEvents[1];
    }
  }
  checkClock();
  console.log(hour);
  console.log(minutes);

  setTimeout(runClock, 1000);
}

runClock();
