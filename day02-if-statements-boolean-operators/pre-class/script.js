var orangeJuiceMain = function (NumberOfGuest, glassOfOJperGuest) {
  var glassofOrangeJuice = 4;
  var perGuest = glassofOrangeJuice * 2;

  var numberofOrangeReq =
    "The required amount of oranges need is " +
    NumberOfGuest * glassOfOJperGuest * perGuest;
  // return the number of oranges required
  return numberofOrangeReq;
};

console.log(orangeJuiceMain(4, 2));

var paintMain = function (dollar, noOfRooms, noOfCoats) {
  var perimeterOfRoom = 3 * 3;
  // var allRooms = perimeterOfRoom * 6
  var amountNeeded = `The required payment is ${
    dollar * noOfRooms * noOfCoats * perimeterOfRoom
  }`;
  //price of painting interior
  return amountNeeded;
};

console.log(paintMain(1, 6, 2));

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = `The generated diceroll of ${randomDiceNumber} does not match your number ${input}`;

  // If input matches randomDiceNumber, update output.
  if (input == randomDiceNumber) {
    myOutputValue = "you win";
  }

  // Return output.
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Set a default value for myOutputValue
  var myOutputValue = "the door shall not open.";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += " but you are nearly there.";
  } else {
    myOutputValue += " nope, this is far from the right phrase.";
  }

  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = `The generated diceroll of ${randomDiceNumber} does not match your number ${input}`;

  // If input matches randomDiceNumber, update output.
  if (input == randomDiceNumber) {
    myOutputValue = "you win";
  }

  // Return output.
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDiceNumber = rollDice();

  // Default output value is 'you lose'.
  var myOutputValue = `You Lose`;

  // If input matches randomDiceNumber, update output.
  if (randomDiceNumber == 2 * input) {
    myOutputValue = `The diceroll of ${randomDiceNumber} is twice your input ${input}`;
  } else {
    return `Your ${input} is not twice the value of ${randomDiceNumber}`;
  }

  // Return output.
  return myOutputValue;
};
