var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "";

  // Initialise the outer counter, rowCounter
  var rowCounter = 0;

  while (rowCounter < input) {
    // Inside the outer loop, initialise the inner counter, columnCounter
    var columnCounter = 0;

    // Every time the outer loop runs, the inner loop runs repeatedly until
    // the inner loop condition is met.
    while (columnCounter < input) {
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "x";
      columnCounter = columnCounter + 1;
    }

    // At the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    rowCounter = rowCounter + 1;
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = ``;
  var counter = 0;

  while (counter <= 6) {
    myOutputValue = myOutputValue + `hello`;
    counter = counter + 1;
  }

  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = ``;
  var outerCounter = 0;

  while (outerCounter < input) {
    var innerCounter = 0;

    while (innerCounter < input) {
      myOutputValue = myOutputValue + `hello`;
      innerCounter += 2;
    }
    myOutputValue = myOutputValue + `<br>`;
    outerCounter += 1;
  }
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
};
