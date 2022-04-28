// First Version: Compare Initial Hands to Determine Winner

//players and dealers cards
var playersHand = [];
var dealersHand = [];

// images for end game
var tieImg = `<img src=https://c.tenor.com/ff84j7lEurAAAAAM/chow-yun-fat-laugh.gif>`;
var blackJackImg = `<img src =https://tenor.com/view/chow-yun-fat-clap-god-of-gamblers-gif-12120999.gif>`;
var winImg = `<img src =https://tenor.com/view/chow-yun-fat-clap-god-of-gamblers-gif-12120999.gif>`;
var loseImg = `<img src =https://c.tenor.com/1B3KuSRuHRsAAAAd/embarrassing-fail.gif>`;

// gamemode at different stages of the game
var gameStart = `game start`;
var gameCardDrawn = `cards are drawn`;
var gameHitOrStand = `hit or stand`;
var currentGameMode = gameStart;

// deck of 52 cards.
var deck = [];

var makeDeck = function () {
  var suits = ["♦", "♣", "❤", "♠"];
  var indexSuits = 0;
  while (indexSuits < suits.length) {
    var currSuit = suits[indexSuits];
    var indexRanks = 1;
    while (indexRanks <= 13) {
      var cardName = indexRanks;
      if (cardName == 1) {
        cardName = "ace";
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

// Get a random index ranging from 0 to max.
var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

// Shuffle the Deck array
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

// Creating the shuffled deck
var shuffledDeck = function () {
  var newDeck = makeDeck();
  var shuffledDeck = shuffleCards(newDeck);
  return shuffledDeck;
};

// GAME FUNCTIONS

// BlackJack logic
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
    }
    // assign ace as 11 first
    else if (currCard.name == `ace`) {
      totalHandValue += 11;
      aceCounter = aceCounter + 1;
    } else {
      totalHandValue = totalHandValue + currCard.rank;
    }
    index += 1;
  }

  index = 0;

  // altering the value of ace (-10) once over 21
  while (index < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    index += 1;
  }
  return totalHandValue;
};

// provide visual numbers for players/dealers cards
var displayPlayerAndDealerHands = function (playerHandArray, dealerHandArray) {
  var playerMessage = `Player hand:<br>`;
  var index = 0;
  while (index < playerHandArray.length) {
    playerMessage =
      playerMessage +
      `-` +
      playerHandArray[index].name +
      ` of ` +
      playerHandArray[index].suit +
      `<br>`;
    index += 1;
  }
  //reset index for dealer's hand
  index = 0;
  var dealerMessage = `Dealer hand:<br>`;
  while (index < dealerHandArray.length) {
    dealerMessage =
      dealerMessage +
      "- " +
      dealerHandArray[index].name +
      " of " +
      dealerHandArray[index].suit +
      "<br>";
    index = index + 1;
  }
  return playerMessage + `<br>` + dealerMessage;
};

// calculate the total value of player/dealer's card
var displayHandTotalValues = function (playerHandValue, dealerHandValue) {
  var totalHandValueMessage =
    `<br>Player total hand value: ` +
    playerHandValue +
    `<br>Dealer total hand value: ` +
    dealerHandValue;
  return totalHandValueMessage;
};

var resetGame = function () {
  deck = [];
  playersHand = [];
  dealersHand = [];
  currentGameMode = gameStart;
};

// main gamee
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
          `<br>Its a BlackJack tie! <br>${tieImg} <br><br> Refresh to play again!`;
      } else if (playerHasBlackJack == true && dealerHasBlackJack == false) {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br>Player wins with BlackJack <br> ${blackJackImg} <br><br> Refresh to play again!`;
      } else {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br>Dealer wins with BlackJack <br>${loseImg} <br><br> Refresh to play again!`;
      }
    } else {
      output =
        displayPlayerAndDealerHands(playersHand, dealersHand) +
        '<br> There are no Black Jacks. <br>Please input "hit" or "stand".';
      currentGameMode = gameHitOrStand;
      console.log(currentGameMode);
    }
    return output;
  }

  // HIT OR STAND
  if (currentGameMode == gameHitOrStand) {
    resetGame();
    return output;
  }
};

// hit function for the player
var hit = function () {
  // drawing of a addtional card
  playersHand.push(deck.pop());
  var output =
    displayPlayerAndDealerHands(playersHand, dealersHand) +
    '<br> You drew another card. <br>Please input "hit" or "stand".';
  console.log(playersHand);
  return output;
};

// player stand
// dealer draws required cards
// runs conparsion logic
var stand = function () {
  var output = displayPlayerAndDealerHands(playersHand, dealersHand);
  var playerTotalHandValue = calculateTotalHandValue(playersHand);
  var dealerTotalHandValue = calculateTotalHandValue(dealersHand);

  //Dealer rules for minimum card value
  while (dealerTotalHandValue < 17) {
    console.log(dealersHand);
    dealersHand.push(deck.pop());
    dealerTotalHandValue = calculateTotalHandValue(dealersHand);
  }

  //Conditions for the game
  if (
    playerTotalHandValue == dealerTotalHandValue ||
    (playerTotalHandValue > 21 && dealerTotalHandValue > 21)
  ) {
    output =
      displayPlayerAndDealerHands(playersHand, dealersHand) +
      `<br>Its a tie! <br>${tieImg} <br><br> Hit Submit to play again!`;
  } else if (
    (playerTotalHandValue > dealerTotalHandValue &&
      playerTotalHandValue <= 21) ||
    (playerTotalHandValue <= 21 && dealerTotalHandValue > 21)
  ) {
    output =
      displayPlayerAndDealerHands(playersHand, dealersHand) +
      `<br> Player wins! <br>${winImg}` +
      `<br>` +
      displayHandTotalValues(playerTotalHandValue, dealerTotalHandValue) +
      `<br><br> Hit Submit to play again!`;
  } else {
    output =
      displayPlayerAndDealerHands(playersHand, dealersHand) +
      `<br> Dealer wins! <br>${loseImg}` +
      `<br>` +
      displayHandTotalValues(playerTotalHandValue, dealerTotalHandValue) +
      `<br><br> Hit Submit to play again!`;
  }
  return output;
};
