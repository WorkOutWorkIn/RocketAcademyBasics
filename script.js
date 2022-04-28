// var button = document.querySelector("#submit-button");
// button.innerText;
// button.innerText = "Click Meeeeee!";

// var coolParagraph = document.createElement("p");
// coolParagraph.innerText = "hey, cool!!!1!";

// document.body.appendChild(coolParagraph);

// var newButton = document.createElement("button");
// newButton.innerText = "Hello";
// newButton.addEventListener("click", function () {
//   console.log("hello, world!");
// });
// document.body.appendChild(newButton);

// var rollDice = function () {
//   // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 6;

//   // Remove the decimal with the floor operation.
//   // This will be an integer from 0 to 5 inclusive.
//   var randomInteger = Math.floor(randomDecimal);

//   // Add 1 to get valid dice rolls of 1 through 6 inclusive.
//   var diceNumber = randomInteger + 1;

//   var dice = diceNumber;
//   return dice;
// };
// console.log(rollDice());

// var main = function (input) {
//   var counter = 0;
//   while (counter < 2) {
//     playerRolls.push(rollDice());
//     counter = counter + 1;
//     return playerRolls;
//     // return `Welcome <br> You rolled: <br> Dice 1: ${playerRolls[0]} | Dice 2: ${playerRolls[1]} <br><br> Now enter either '1' or '2' to choose the order of the dice.`;
//   }
// };
// var input = "hello";
// var result = Number(input);
// console.log(Number.isNaN(result));

// var playerRolls = [];

// var main = function () {
//   var counter = 0;
//   while (counter < 2) {
//     playerRolls.push(rollDice());
//     counter += 1;
//   }
//   console.log(`player's dice rolls: `, playerRolls);
//   return `Welcome Player <br> You rolled: <br> Dice 1: ${playerRolls[0]} | Dice 2: ${playerRolls[1]} <br><br> Now enter either '1' or '2' to choose the order of the dice.`;
// };
// console.log(main());

// var printEmojis = 0;
// var printWords = 1;

// var main = function (input) {
//   // Global Variables
//   // Clicking on the submit button toggles between printing words and emojis.
//   // Global variables control the flow of the program and are updated within code blocks within the function main

//   // Line 10 takes a global variable declared outside of any function as a condition to check, and runs lines 12-17 if TRUE
//   if (printWords == 1) {
//     // Lines 12 & 13 updates the global variable once the code reaches it's intended block
//     printWords = 0;
//     printEmojis = 1;
//     var words = "Hello Basics 14-2!";
//     console.log(
//       "Console log of words variable - variable is within block scope see -->",
//       words
//     );
//     return words;
//   }
//   if (printEmojis === 1) {
//     printEmojis = 0;
//     printWords = 1;
//     var emojis = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃";
//     console.log(
//       "Console log of words variable  - variable is outside of block scope see -->",
//       words
//     );
//     return emojis;
//   }
// };
// var rollDice = function () {
//   // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 6;

//   // Remove the decimal with the floor operation.
//   // This will be an integer from 0 to 5 inclusive.
//   var randomInteger = Math.floor(randomDecimal);

//   // Add 1 to get valid dice rolls of 1 through 6 inclusive.
//   var diceNumber = randomInteger + 1;

//   return diceNumber;
// };

// var main = function (input) {
//   var myOutputValue = "";
//   var counter = 0;
//   while (counter < input) {
//     // Roll dice inside the loop, generating a random dice roll each iteration
//     var diceRoll = rollDice();
//     // Add each dice roll to output
//     myOutputValue = myOutputValue + " " + diceRoll + " ";
//     // Increment counter at end of each iteration
//     counter = counter + 1;
//   }
//   return myOutputValue;
// };

// //

// // Index starts at 0, representing the 0th index of the array
// var index = 0;

// // We will iterate over the letters array
// var letters = ["a", "b", "c"];

// // Run the loop while index is less than the length of the array
// for (var index = 0; index < letters.length; index += 1) {
//   // letters[index] represents a different element for each loop iteration
//   var currentLoopLetter = letters[index];

//   // Log the current element in each iteration
//   console.log(currentLoopLetter);
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// full functioning dicegame with "the username input","the game function"

// var currentGameMode = 'waiting for user name';
// var bankRoll = 10;
// var userName = '';

// var rollDice = function () {
//   var randomDecimal = Math.random() * 6;
//   var randomInteger = Math.floor(randomDecimal);
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// var playDiceGame = function (userName, userGuess) {
//   var message = '';

//   // dice game logic
//   var randomDiceRoll = rollDice();
//   message =
//     userName +
//     ' you lost! you guessed: ' +
//     userGuess +
//     'you rolled: ' +
//     randomDiceRoll +
//     ' current bank roll: ' +
//     bankRoll;

//   if (userGuess == randomDiceRoll) {
//     bankRoll = bankRoll + 1;
//     message =
//       userName +
//       ' you won! you guessed: ' +
//       userGuess +
//       'you rolled: ' +
//       randomDiceRoll +
//       ' your current bank roll: ' +
//       bankRoll;
//   }

//   return message;
// };

// var main = function (input) {
//   var myOutputValue = '';

//   if (currentGameMode == 'waiting for user name') {
//     // set the name
//     userName = input;

//     // now that we have the name, switch the mode
//     currentGameMode = 'dice game';

//     myOutputValue = 'Hello ' + userName;
//   } else if (currentGameMode == 'dice game') {

//     // refactored function that can be reused anywhere
//     myOutputValue = playDiceGame(userName, input);
//   }

//   return myOutputValue;
// };
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// // Set the initial game states!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var currentGameMode = "waiting for user name";
// var bankRoll = 10;
// var userName = "";

// // Get a randomised dice roll
// var rollDice = function () {
//   var randomDecimal = Math.random() * 6;
//   var randomInteger = Math.floor(randomDecimal);
//   var diceNumber = randomInteger + 1;
//   return 6;
// };

// /**
//   For a program with only one input field, the program must be 'smart'
//   enough to understand the context of the inputs based on the prevailing
//   game states.
// **/

// var main = function (input) {
//   var myOutputValue = "";

//   if (currentGameMode == "waiting for user name") {
//     // set the name
//     userName = input;

//     // now that we have the name, switch the mode
//     currentGameMode = "dice game";

//     myOutputValue = "Hello " + userName;
//   } else if (currentGameMode == "dice game") {
//     // dice game logic
//     var randomDiceRoll = rollDice();
//     myOutputValue =
//       userName +
//       " you lost! you guessed: " +
//       input +
//       "you rolled: " +
//       randomDiceRoll +
//       " current bank roll: " +
//       bankRoll;
//     var userGuess = input;
//     if (userGuess == randomDiceRoll) {
//       bankRoll = bankRoll + 1;
//       myOutputValue =
//         userName +
//         " you won! you guessed: " +
//         input +
//         "you rolled: " +
//         randomDiceRoll +
//         " your current bank roll: " +
//         bankRoll;
//     }
//   }

//   return myOutputValue;
// };
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// SWITCHING THE GAME MODE FOR REVERSE SPS??????????????????????????????????????????????
// // we set the initial state of mode
// var mode = "green";

// // depending on the input, we will toggle mode states between green/blue
// var main = function (input) {
//   if (input == "greenmode") {
//     mode = "green";
//   } else if (input == "bluemode") {
//     mode = "blue";
//   }

//   var myOutputValue =
//     "A fool sees not the same tree that a wise man sees. -William Blake";

//   // reassign the value of myOutputValue is mode is at state 'blue'
//   if (mode == "blue") {
//     myOutputValue =
//       "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
//   }

//   return myOutputValue;
// };
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// var fahrenheitToCelsiusMain = function (input) {
//   // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
//   var farenheit = input;
//   var celcius = ((farenheit - 32) * 5) / 9;
//   return celcius;
// };

// var convertKmToMiles = function (distanceInKm) {
//   var distanceInMiles = distanceInKm * 0.62;
//   return distanceInMiles;
// };

// var calculateTotalFuelCost = function (distanceInMiles) {
//   // Some code that calculates total fuel cost
//   var oneMile = 2.2 / 9;
//   var fuelCost = distanceInMiles * oneMile;
//   return fuelCost;
// };

// var roadTripCostBaseMain = function (input) {
//   // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
//   var miles = convertKmToMiles(input);
//   var myOutputValue = calculateTotalFuelCost(miles);
//   return myOutputValue;
// };

// var roadTripCostComfortableMain = function (input) {
//   // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
//   var myOutputValue = savings(input);

//   return Math.abs(myOutputValue);
// };

// var TotalFuelCostTrain = function (distanceInMiles) {
//   // Some code that calculates total fuel cost
//   var oneMile = 2 / 9;
//   var fuelCost = distanceInMiles * oneMile;
//   return fuelCost;
// };

// var savings = function (input) {
//   var miles = convertKmToMiles(input);
//   var costOfTrain = TotalFuelCostTrain(miles);
//   var costOfFerrari = calculateTotalFuelCost(miles);

//   var myOutputValue = costOfTrain - costOfFerrari;
//   return myOutputValue;
// };

// // 1 ice machine = 5 lbs per hour
// // 1 ice machine = 1 lb per 12 mins
// // 1 g = 0.002205 lb
// // guest = 12g of ice
// // 12 g = 0.026455 lb
// // 1 guest = 0.026455 lb

// var iceMachineMain = function (input) {
//   // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
//   // 1 cube = 1.5g
//   var iceCube = 1.5;
//   // 1 drinks = 4 ice cubes
//   var drink = 4 * iceCube;
//   // guest = 2 drinks
//   var iceOfOneGuest = 2 * drink;
//   var convertToPounds = iceOfOneGuest * 0.002205;

//   var hourToMin = 1 * 60;
//   var timeOfOnePoundIce = hourToMin / 5;

//   var numOfGuests = input;
//   var poundsOfIce = numOfGuests * convertToPounds;
//   var timeOfIceMachine = poundsOfIce * timeOfOnePoundIce;

//   var myOutputValue = timeOfIceMachine.toFixed(2) + " mins";
//   return myOutputValue;
// };

// var beerOrderMain = function (input) {
//   // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
//   var
//   return myOutputValue;

// document.querySelector("#hit-button").disabled = true;
// document.querySelector("#stand-button").disabled = true;
// document.querySelector("#reveal-button").disabled = true;

// // HELPER FUNCTIONS
// // make deck
// var makeDeck = function () {
//   var cardDeck = [];
//   var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
//   var names = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
//   var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

//   for (var suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
//     var cardSuit = suits[suitIndex];
//     for (var i = 0; i < names.length; i += 1) {
//       var cardName = names[i];
//       var cardValue = values[i];
//       var card = makeCard(cardName, cardSuit, cardValue);
//       cardDeck.push(card);
//     }
//   }
//   return cardDeck;
// };
// // make a card object
// var makeCard = function (cardName, cardSuit, cardValue) {
//   var cardObj = {
//     name: cardName,
//     suit: cardSuit,
//     value: cardValue
//   };
//   return cardObj;
// };

// // shuffle deck
// // get a random index ranging from 0 (inclusive) to max (exclusive)
// var getRandomIndex = function (max) {
//   return Math.floor(Math.random() * max);
// };
// // shuffle elements in the cardDeck array. Return the shuffled deck.
// var shuffleCards = function (cardDeck) {
//   var shuffledDeck = [];
//   for (var i = 0; i < 52; i += 1) {
//     var randomIndex = getRandomIndex(cardDeck.length);
//     randomCardArray = cardDeck.splice(randomIndex, 1);
//     shuffledDeck.push(randomCardArray[0]);
//   }
//   // return shuffledDeck array with cardObjects
//   return shuffledDeck;
// };

// // start game: deal 2 cards to player and dealer
// var startGame = function () {
//   playerCards.push(shuffledDeck.pop());
//   dealerCards.push(shuffledDeck.pop());
//   playerCards.push(shuffledDeck.pop());
//   dealerCards.push(shuffledDeck.pop());
//   document.querySelector("#submit-button").disabled = true;
//   document.querySelector("#hit-button").disabled = false;
//   document.querySelector("#stand-button").disabled = false;
// };

// // check if there's an ace in cards
// var checkAce = function (cardsArray) {
//   var aceInHand = cardsArray.some((card) => card.name == "Ace");
//   return aceInHand; // true
// };

// // calculate total value of cards
// var calcTotalValue = function (cardsArray) {
//   var totalValue = cardsArray.reduce((a, b) => a + b.value, 0);
//   // if there is an ace and the total value does not exceed 21, count it as 11
//   if (checkAce(cardsArray)) {
//     totalValue += 10;
//   }
//   if (checkAce(cardsArray) && totalValue > 21) {
//     totalValue -= 10;
//   }
//   return totalValue;
// };

// // check if blackjack
// var checkBJ = function (cardsArray) {
//   if (calcTotalValue(cardsArray) == 21) {
//     return true;
//   }
//   return false;
// };

// // reset gane state
// var resetGameState = function () {
//   playerCards = [];
//   dealerCards = [];
//   gameState = "waiting to deal";
//   shuffledDeck = shuffleCards(makeDeck());
//   document.querySelector("#submit-button").disabled = false;
//   document.querySelector("#hit-button").disabled = true;
//   document.querySelector("#stand-button").disabled = true;
//   document.querySelector("#reveal-button").disabled = true;
// };

// // player clicks on "hit"
// var playerHit = function (playerCards) {
//   gameState = "player hit";
//   // deal player another card
//   playerCards.push(shuffledDeck.pop());
// };

// // player clicks on "stand"
// var playerStand = function () {
//   gameState = "player stand";
//   document.querySelector("#hit-button").disabled = true;
//   document.querySelector("#stand-button").disabled = true;
//   document.querySelector("#reveal-button").disabled = false;
// };

// // player clicks on "reveal"
// var revealDealerHand = function () {
//   gameState = "reveal dealer hand";
// };

// // generate player output msg
// var generatePlayerOutputMsg = function () {
//   var playerTotalValue = calcTotalValue(playerCards);
//   var PLAYER_OUTPUT_MSG = `<u>YOUR HAND</u><br>`;
//   for (var i = 0; i < playerCards.length; i += 1) {
//     PLAYER_OUTPUT_MSG += `${playerCards[i].name} of ${playerCards[i].suit}<br>`;
//   }
//   PLAYER_OUTPUT_MSG += `<b>Your hand totals to ${playerTotalValue}.</b><br><br>`;
//   return PLAYER_OUTPUT_MSG;
// };

// // generate dealer output msg
// var generateDealerOutputMsg = function () {
//   var dealerTotalValue = calcTotalValue(dealerCards);
//   var DEALER_OUTPUT_MSG = `<u>DEALER'S HAND</u><br>`;
//   for (var i = 0; i < dealerCards.length; i += 1) {
//     DEALER_OUTPUT_MSG += `${dealerCards[i].name} of ${dealerCards[i].suit}<br>`;
//   }
//   DEALER_OUTPUT_MSG += `<b> Dealer's hand totals to ${dealerTotalValue}.</b><br><br>`;
//   return DEALER_OUTPUT_MSG;
// };

// // GLOBAL VARIABLES
// var playerCards = [];
// var dealerCards = [];
// var gameState = "waiting to deal";
// var shuffledDeck = shuffleCards(makeDeck());

// // MAIN FUNCTION
// var main = function () {
//   // deals cards to both players and dealers
//   if (gameState == "waiting to deal") {
//     // deal 2 cards to both player and dealer
//     startGame();

//     // check if player or dealer has blackjack
//     if (checkBJ(playerCards) && checkBJ(dealerCards)) {
//       var myImage =
//         '<img src="https://c.tenor.com/Jft_4K8MU2IAAAAC/soso-notbad.gif"/ class = "center">';
//       var myOutputValue =
//         generatePlayerOutputMsg() +
//         generateDealerOutputMsg() +
//         `<hr><br><b>Wow, you guys both got Black Jack! ♠️</b><br><br>` +
//         myImage;
//       resetGameState();
//       return myOutputValue;
//     }
//     if (checkBJ(playerCards) && !checkBJ(dealerCards)) {
//       myImage =
//         '<img src="https://c.tenor.com/1DVVF2Ew9scAAAAC/boss-gatsby.gif"/ class = "center">';
//       myOutputValue =
//         generatePlayerOutputMsg() +
//         generateDealerOutputMsg() +
//         `<hr><br><b> You win, you've got Black Jack! ♠️</b><br><br>` +
//         myImage;
//       resetGameState();
//       return myOutputValue;
//     }
//     if (!checkBJ(playerCards) && checkBJ(dealerCards)) {
//       myImage =
//         '<img src="https://c.tenor.com/SLT0MF-wqRgAAAAC/laughing-leonardo-dicaprio.gif"/ class = "center">';
//       myOutputValue =
//         generatePlayerOutputMsg() +
//         generateDealerOutputMsg() +
//         `<hr><br><b> You lose, Dealer has Black Jack. ♠️</b><br><br>` +
//         myImage;
//       resetGameState();
//       return myOutputValue;
//     }

//     gameState = "player move";
//     myImage =
//       '<img src="https://c.tenor.com/in7Ivne8JhsAAAAC/oh-yeah-baby-agreed.gif"/ class = "center">';
//     myOutputValue =
//       generatePlayerOutputMsg() +
//       `Click "hit" to deal another card or "stand" to pass.<br><br>` +
//       myImage;
//     return myOutputValue;
//   }

//   // player decides to "hit" or "stand"
//   if (gameState == "player hit") {
//     myImage =
//       '<img src="https://c.tenor.com/in7Ivne8JhsAAAAC/oh-yeah-baby-agreed.gif"/ class = "center">';
//     myOutputValue =
//       generatePlayerOutputMsg() +
//       `Click "hit" to deal another card or "stand" to pass.<br><br>` +
//       myImage;

//     // check if player goes bust
//     if (calcTotalValue(playerCards) > 21) {
//       myImage =
//         '<img src="https://c.tenor.com/DhEQMPO1IzsAAAAC/leo-dicaprio-wolf-of-wallstreet.gif"/ class = "center">';
//       myOutputValue =
//         generatePlayerOutputMsg() +
//         `<hr><br><b> You lose! Play again?</b><br><br>` +
//         myImage;
//       resetGameState();
//     }
//     return myOutputValue;
//   }

//   if (gameState == "player stand") {
//     myImage =
//       '<img src="https://c.tenor.com/Jft_4K8MU2IAAAAC/soso-notbad.gif"/ class = "center">';
//     myOutputValue =
//       generatePlayerOutputMsg() +
//       `It's the Dealer's turn. <br>
//       Click "reveal" to view dealer's hand.<br><br>` +
//       myImage;

//     gameState = "dealer move";
//     while (calcTotalValue(dealerCards) < 17) {
//       dealerCards.push(shuffledDeck.pop());
//     }
//     return myOutputValue;
//   }

//   if (gameState == "reveal dealer hand") {
//     myOutputValue = generatePlayerOutputMsg() + generateDealerOutputMsg();
//     var dealerTotalValue = calcTotalValue(dealerCards);
//     var playerTotalValue = calcTotalValue(playerCards);
//     // check if dealer goes bust
//     if (dealerTotalValue > 21 || dealerTotalValue < playerTotalValue) {
//       myImage =
//         '<img src="https://c.tenor.com/029LgfMnsisAAAAC/applause-leonardo-dicaprio.gif"/ class = "center">';

//       myOutputValue += `<hr><br><b>You win! Play again?</b><br><br>` + myImage;
//     } else if (dealerTotalValue == playerTotalValue) {
//       myImage =
//         '<img src="https://c.tenor.com/oFvfCORxVFcAAAAd/leonardo-dicaprio.gif"/ class = "center">';
//       myOutputValue +=
//         `<hr><br><b>It's a tie. Play Again?</b><br><br>` + myImage;
//     } else if (dealerTotalValue > playerTotalValue) {
//       myImage =
//         '<img src="https://c.tenor.com/mSl-6FcyX5IAAAAC/leonardo-leonardo-dicaprio.gif"/ class = "center">';
//       myOutputValue += `<hr><br><b>You lose. Play Again?</b><br><br>` + myImage;
//     }
//     resetGameState();
//     return myOutputValue;
//   }
// };

document.querySelector("#hit-button").disabled = true;
document.querySelector("#stand-button").disabled = true;

// // Two players - a player and a dealer (computer).
var playersHand = [];
var dealersHand = [];

// // gamemode at different stages of the game
var gameStart = `game start`;
var gameCardDrawn = `cards are drawn`;
var gameResultsShown = `results are shown`;
var gameHitOrStand = `hit or stand`;
var currentGameMode = gameStart;

// A deck of cards.
var deck = [];

var makeDeck = function () {
  // deck array
  var deck = [];
  // for 'while loop' to create suits for cards
  var suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
  var indexSuits = 0;
  while (indexSuits < suits.length) {
    var currSuit = suits[indexSuits];
    // 13 ranks... ace to king - rank to define "card positions"
    var indexRanks = 1;
    while (indexRanks <= 13) {
      var cardName = indexRanks;
      // define card value - differentiate from rank: 'ace' = 1 / 11, 'jack' & 'queen' & 'king' = 10
      if (cardName == 1) {
        cardName = "ace";
        // define ace value as 11 all the way. if handValue > 10, -11 to total value
        // vs. coding a function to redefine the value for ace
      }
      if (cardName == 11) {
        cardName = "jack";
      }
      if (cardName == 12) {
        cardName = "queen";
      }
      if (cardName == 13) {
        cardName = "king";
      }
      var card = {
        name: cardName,
        suit: currSuit,
        rank: indexRanks
      };
      deck.push(card);
      indexRanks = indexRanks + 1;
    }
    indexSuits = indexSuits + 1;
  }
  return deck;
};

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cards) {
  var index = 0;
  while (index < cards.length) {
    var randomIndex = getRandomIndex(cards.length);
    var currentItem = cards[index];
    var randomItem = cards[randomIndex];
    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
    index = index + 1;
  }
  return cards;
};

var shuffledDeck = function () {
  var newDeck = makeDeck();
  var shuffledDeck = shuffleCards(newDeck);
  return shuffledDeck;
};

// GAME FUNCTIONNNNN
var checkForBlackJack = function (handArray) {
  var playerCardOne = handArray[0];
  var playerCardTwo = handArray[1];
  var isBlackJack = false;

  // change ace to 11
  if (
    (playerCardOne.name == `ace` && playerCardTwo.rank >= 10) ||
    (playerCardTwo.name == `ace` && playerCardOne.rank >= 10) ||
    (playerCardOne.name == `ace` && playerCardTwo.name == `ace`)
  ) {
    isBlackJack = true;
  }
  return isBlackJack;
};

// function to calculate the total hand value (factoring in ace)
var calculateTotalHandValue = function (handArray) {
  var totalHandValue = 0;

  var aceCounter = 0;

  var index = 0;
  while (index < handArray.length) {
    var currCard = handArray[index];

    if (
      currCard.name == `king` ||
      currCard.name == `queen` ||
      currCard.name == `jack`
    ) {
      totalHandValue += 10;
    } else if (currCard.name == `ace`) {
      totalHandValue += 11;
      aceCounter = aceCounter + 1;
    } else {
      totalHandValue = totalHandValue + currCard.rank;
    }
    index += 1;
  }

  index = 0;

  // altering the value of ACE
  while (index < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    index += 1;
  }
  return totalHandValue;
};

// not displaying message N/A
var displayPlayerAndDealerHands = function (playersHand, dealersHands) {
  var playerTotalValue = calculateTotalHandValue(playersHand);
  var playerMessage = `Player Hand <br>`;
  for (var i = 0; i < playersHand.length; i += 1) {
    playerMessage += `${playersHand[i].name} of ${playersHand[i].suit}<br>`;
  }
  playerMessage += `Your hand totals to ${playerTotalValue}.<br><br>`;

  var dealerTotalValue = calculateTotalHandValue(dealersHand);
  var dealerMessage = `Dealer Hand <br>`;
  for (var i = 0; i < dealersHand.length; i += 1) {
    dealerMessage += `${dealersHand[i].name} of ${dealersHand[i].suit}<br>`;
  }
  dealerMessage += `Dealer's hand totals to ${dealerTotalValue}.<br><br>`;

  return playerMessage + dealerMessage;
};

var displayHandTotalValues = function (playerHandValue, dealerHandValue) {
  var totalHandValueMessage =
    `<br>Player total hand value: ` +
    playerHandValue +
    `<br>Dealer total hand value: ` +
    dealerHandValue;
  return totalHandValueMessage;
};

// // player clicks on "hit"
var playerHit = function (playersHand) {
  currentGameMode = "playerHit";
  // deal player another card
  playersHand.push(deck.pop());
};

// player clicks on "stand"
var playerStand = function () {
  currentGameMode = "playerStand";
  document.querySelector("#hit-button").disabled = true;
  document.querySelector("#stand-button").disabled = true;
};

// main gameeee
var main = function (input) {
  var output = ``;
  // DEAL CARDS TO PLAYER AND DEALER
  if (currentGameMode == gameStart) {
    // create a new shuffled deck
    deck = shuffledDeck();
    // dealing cards to player and dealer
    playersHand.push(deck.pop());
    playersHand.push(deck.pop());
    dealersHand.push(deck.pop());
    dealersHand.push(deck.pop());
    console.log(playersHand);
    console.log(dealersHand);

    currentGameMode = gameCardDrawn;
    console.log(currentGameMode);

    output = `Cards have been dealt. Click again to calculate card value`;

    return output;
  }

  // CHECKING FOR BLACKJACK
  if (currentGameMode == gameCardDrawn) {
    var playerHasBlackJack = checkForBlackJack(playersHand);
    var dealerHasBlackJack = checkForBlackJack(dealersHand);
    console.log(playerHasBlackJack);
    console.log(dealerHasBlackJack);

    if (playerHasBlackJack == true || dealerHasBlackJack == true) {
      if (playerHasBlackJack == true && dealerHasBlackJack == true) {
        // insert img/gif here!
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br>Its a BlackJack tie!`;
      } else if (playerHasBlackJack == true && dealerHasBlackJack == false) {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br>Player wins with BlackJack!`;
      } else {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br>Dealer wins with BlackJack!`;
      }
    } else {
      document.querySelector("#submit-button").disabled = true;
      document.querySelector("#hit-button").disabled = false;
      document.querySelector("#stand-button").disabled = false;

      output =
        displayPlayerAndDealerHands(playersHand, dealersHand) +
        `<br><br> Would you like to "hit" or "stand"?`;
    }
    return output;
  }

  if (currentGameMode == "playerHit") {
    var showHands = displayPlayerAndDealerHands();
    output = showHands + `Click "hit" to deal another card or "stand" to pass.`;

    // check if player goes bust
    if (calculateTotalHandValue(playersHand) > 21) {
      output = displayPlayerAndDealerHands() + `<br> You lose!`;
    }
  }

  if (currentGameMode == "playerStand") {
    // output = displayPlayerAndDealerHands() + `It's the Dealer's turn`;
    var playerTotalHandValue = calculateTotalHandValue(playersHand);
    var dealerTotalHandValue = calculateTotalHandValue(dealersHand);

    while (dealerTotalHandValue < 17) {
      dealersHand.push(deck.pop());
      console.log(dealersHand);
      dealerTotalHandValue = calculateTotalHandValue(dealersHand);
    }
    //Conditions for the game
    if (
      playerTotalHandValue == dealerTotalHandValue ||
      (playerTotalHandValue > 21 && dealerTotalHandValue > 21)
    ) {
      output =
        displayPlayerAndDealerHands(playersHand, dealersHand) + `<br>Its a tie`;
    } else if (
      (playerTotalHandValue > dealerTotalHandValue &&
        playerTotalHandValue <= 21) ||
      (playerTotalHandValue <= 21 && dealerTotalHandValue > 21)
    ) {
      output =
        displayPlayerAndDealerHands(playersHand, dealersHand) +
        `<br> Player win` +
        `<br>` +
        displayHandTotalValues(playerTotalHandValue, dealerTotalHandValue);
    } else {
      output =
        displayPlayerAndDealerHands(playersHand, dealersHand) +
        `<br> Dealer win` +
        `<br>` +
        displayHandTotalValues(playerTotalHandValue, dealerTotalHandValue);
    }
  }
  return output;
};
