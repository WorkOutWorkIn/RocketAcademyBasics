var rollDice = function (rigged = false) {
  //rig the dice in debug mode
  if (rigged) return 6;

  // produces a float between 0 and 7
  var randomFloat = Math.random() * 10;
  // take off the decimal
  var resultInteger = Math.floor(randomFloat);
  return resultInteger;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var randomDiceNumber1 = rollDice(true);
  var randomDiceNumber2 = rollDice(true);
  // The default output value is "you lose".
  var myOutputValue = "you lose";
  // If the input matches both random dice numbers, output value is "you win".
  if (randomDiceNumber1 == input || randomDiceNumber2 == input) {
    myOutputValue = `RandomDice1 = ${randomDiceNumber1} or RandomDice2 = ${randomDiceNumber2} and Input is ${input}`;
  } else if (randomDiceNumber1 + randomDiceNumber2 == 11) {
    return (myOutputValue = `RandomDice1 and RandomDice2 output ${
      randomDiceNumber1 + randomDiceNumber2
    }.`);
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (hawkerFood) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  // rice = chicken rice, nasi lemak
  // noodle = hokkien mee, laksa
  // other = bak kut teh, roti prata
  var foodType = `Please input your food choice`;
  if (hawkerFood == `chicken rice` || hawkerFood == `nasi lemak`) {
    return (foodType = `Choice of food is rice.`);
  } else if (hawkerFood == `hokkien mee` || hawkerFood == `laksa`) {
    return (foodType = `Choice of food is noodles`);
  } else if (hawkerFood == `bak kut teh` || hawkerFood == `roti prata`) {
    return (foodType = `Choice of food is others`);
  }
  return foodType;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  // four generated numbers needed. condition is for ONE numbe to match to strike
  var winCondition = `You Lose`;
  var totoNumberOne = rollDice(true);
  var totoNumberTwo = rollDice(true);
  var totoNumberThree = rollDice(true);
  var totoNumberFour = rollDice(true);

  if (
    totoNumberOne == input ||
    totoNumberTwo == input ||
    totoNumberThree == input ||
    totoNumberFour == input
  ) {
    return (winCondition = `Your guess (${input}) matches the winning 4D numbers (${
      (totoNumberOne, totoNumberTwo, totoNumberThree, totoNumberFour)
    }) Congrats!`);
  } else return `You lose, better luck next time!`;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
