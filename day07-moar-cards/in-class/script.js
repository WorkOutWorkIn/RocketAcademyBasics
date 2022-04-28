var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//Global Variable
var cards = [];

var randomCard = function () {
  var randomIndex = Math.floor(Math.random() * cards.length);
  console.log(cards.length);
  console.log(randomIndex);
  return randomIndex;
};

var makeDeck = function () {
  var suits = ["spades", "hearts", "clubs", "diamonds"];
  for (let i = 0; i < suits.length; i += 1) {
    for (let cardCounter = 1; cardCounter <= 13; cardCounter += 1) {
      let cardName = cardCounter;

      if (cardCounter == 1) {
        cardName = "ace";
      } else if (cardCounter == 11) {
        cardName = "jack";
      } else if (cardCounter == 12) {
        cardName = "queen";
      } else if (cardCounter == 13) {
        cardName = "king";
      }

      let card = {
        cardName: cardName,
        cardSuit: suits[i],
        cardRank: cardCounter
      };
      cards.push(card);
    }
  }
  console.log(cards);
};

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  makeDeck();
  var randomPlayer1Index = randomCard();
  var player1CardRank = cards[randomPlayer1Index].cardRank;
  var randomPlayer2Index = randomCard();
  var player2CardRank = cards[randomPlayer2Index].cardRank;

  if (player1CardRank == 12) {
    return `Player 1 drew a queen. Player 1 wins`;
  } else if (player2CardRank == 12) {
    return `Player 2 drew a queen. Player 2 wins`;
  } else {
    if (player1CardRank > player2CardRank) {
      return `Player 2 wins, Player 1 - ${player1CardRank}, Player 2 - ${player2CardRank} `;
    } else {
      return `Player 1 wins Player 1 - ${player1CardRank}, Player 2 - ${player2CardRank}`;
    }
  }
};
