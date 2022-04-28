var main = function (input) {
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = `Hello, ${input}! Wow, ${input} is a great name. Reminds me of this movie star...`;
  return myOutputValue;
};

var convertKmToMiles = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
};

// var convertMinsToHrs = function (mins) {
//   return mins / 60;
// };

// var calcTrainTwoSpeed = function (delayInMins) {
//   var trainSpeed = 200;
//   var timeToTokyo = 2;
//   var distanceToTokyo = trainSpeed * timeToTokyo;

//   var remainingTimeForTravel = timeToTokyo - convertMinsToHrs(delayInMins);

//   var trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;
//   return trainTwoNewSpeed.toFixed(2);
// };

// console.log(calcTrainTwoSpeed(30));

// var trainSpeedMain = function (input) {
//   var trainTwoNewSpeed = calcTrainTwoSpeed(input);
//   var myOutputValue = `Given a ${input} min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1.`;
//   return myOutputValue;
// };

// console.log(trainSpeedMain(30));

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// var clockMain = function (input) {
//   // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.

//   // get number of hours and minutes from input
//   var minsPerHour = 60;
//   var numHours = 1 + input / minsPerHour;
//   var numMins = input % minsPerHour;

//   // angle of hour hand (from 12)
//   var numberOfHours = 12;
//   var oneRoundAngle = 360;
//   var anglePerHour = oneRoundAngle / numberOfHours;
//   var hourAngle = anglePerHour * numHours;

//   // angle of minute hand (from 12)
//   var minutesPerHour = 60;
//   var anglePerMinute = oneRoundAngle / minutesPerHour;
//   var minuteAngle = anglePerMinute * numMins;

//   var angleHourAndMin = Math.abs(hourAngle - minuteAngle);
//   return angleHourAndMin;
// };
