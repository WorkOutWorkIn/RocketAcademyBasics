//bot that random generates "Scissors,Paper or Stone"(sps)
var bottype = function () {
  var sps = [`Scissors`, `Paper`, `Stone`];

  var random = Math.floor(Math.random() * sps.length);

  var bot = sps[random];
  return `Stone`;
};

var currentGameMode = `Please enter your name`;
var playerName = ``;
var reverseInput = ``;
var playerScore = 0;
var botScore = 0;
var numberOfDraws = 0;

//sps game logic
var spsGameMode = function (playerName, playerInput) {
  var comChoice = bottype();
  var output = ``;
  // validating players input with only SPS
  if (
    playerInput != `Stone` &&
    playerInput != `Paper` &&
    playerInput != `Scissors` &&
    playerInput != `Reverse` &&
    playerInput != `MainGame`
  ) {
    output = `Please enter only the follow three options: Stone, Paper or Scissors. Thank You.`;
  }
  // Conditions to win
  else if (playerInput == `Paper` && comChoice == `Stone`) {
    playerScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You win! Congratulations. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else if (playerInput == `Stone` && comChoice == `Scissors`) {
    playerScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You win! Congratulations. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else if (playerInput == `Scissors` && comChoice == `Paper`) {
    playerScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You win! Congratulations. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else if (playerInput == comChoice) {
    numberOfDraws += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> Draw! <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else {
    botScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You lose! Bummer. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  }
  return output;
};

//spsREVERSE game logic
var spsReverseGameMode = function (playerName, playerInput) {
  var comChoice = bottype();
  var output = ``;
  if (
    playerInput != `Stone` &&
    playerInput != `Paper` &&
    playerInput != `Scissors` &&
    playerInput != `Reverse` &&
    playerInput != `MainGame`
  ) {
    output = `Please enter only the follow three options: Stone, Paper or Scissors. Thank You.`;
  } else if (playerInput == `Scissors` && comChoice == `Stone`) {
    playerScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You win! Congratulations. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else if (playerInput == `Paper` && comChoice == `Scissors`) {
    playerScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You win! Congratulations. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else if (playerInput == `Stone` && comChoice == `Paper`) {
    playerScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You win! Congratulations. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else if (playerInput == comChoice) {
    numberOfDraws += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> Draw! <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  } else {
    botScore += 1;
    output = `The computer chose ${comChoice}. <br> ${playerName}, you chose ${playerInput}. <br> <br> You lose! Bummer. <br> <br> Now you can type "Scissors", "Paper" or "Stone" to play another round!<br> <br> Current Score: <br> Player: ${playerScore} <br> Computer: ${botScore} <br> Number of Draws: ${numberOfDraws}`;
  }
  return output;
};

var main = function (playerInput) {
  var output = "";

  if (currentGameMode == `Please enter your name`) {
    // Input Name
    playerName = playerInput;

    // Start Game
    currentGameMode = `GameInput`;
    // Pick which mode of game to play
    // toggle between by submitting "Reverse" or "MainGame" in the input
    output = `Hello ${playerName}! <br><br> Welcome to Scissor Paper Stone Game! <br><br> Choose one of the following: <br> Reverse or MainGame`;
  } else if (currentGameMode == `GameInput`) {
    reverseInput = playerInput;

    currentGameMode = `gameStart`;
    output = `Choose one of the following: <br> Scissors | Paper | Stone`;
  } else if (playerInput == `MainGame`) {
    reverseInput = `MainGame`;
    output = `Choose one of the following: <br> Scissors | Paper | Stone`;
  } else if (playerInput == `Reverse`) {
    reverseInput = `Reverse`;
    output = `Choose one of the following: <br> Scissors | Paper | Stone`;
  } else if (reverseInput == `Reverse`) {
    output = spsReverseGameMode(playerName, playerInput);
  } else if (reverseInput == `MainGame`) {
    output = spsGameMode(playerName, playerInput);
  }
  return output;
};

// else if (currentGameMode == `gameStart`) {
//   output = spsGameMode(playerName, playerInput);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// First Version: Compare Initial Hands to Determine Winner
// Aim for a playable game. The essence of blackjack requires:

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
          `<br>Its a BlackJack tie!`;
      } else if (playerHasBlackJack == true && dealerHasBlackJack == false) {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br>Player wins with BlackJack`;
      } else {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br>Dealer wins with BlackJack`;
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
    // CREATE A HELPER FUNCTION TO ACCESS DOM
    if (input == `hit`) {
      playersHand.push(deck.pop());
      output =
        displayPlayerAndDealerHands(playersHand, dealersHand) +
        '<br> You drew another card. <br>Please input "hit" or "stand".';
      console.log(playersHand);
      // CREATE FUNCTION TO ACCESS DOM
    } else if (input == `stand`) {
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
          `<br>Its a tie!`;
      } else if (
        (playerTotalHandValue > dealerTotalHandValue &&
          playerTotalHandValue <= 21) ||
        (playerTotalHandValue <= 21 && dealerTotalHandValue > 21)
      ) {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br> Player wins!` +
          `<br>` +
          displayHandTotalValues(playerTotalHandValue, dealerTotalHandValue);
      } else {
        output =
          displayPlayerAndDealerHands(playersHand, dealersHand) +
          `<br> Dealer wins!` +
          `<br>` +
          displayHandTotalValues(playerTotalHandValue, dealerTotalHandValue);
      }
      // for future game functionality
      currentGameMode = gameResultsShown;
    } else {
      //working
      output =
        `wrong input. Please enter only "hit" or "stand"` +
        displayPlayerAndDealerHands(playersHand, dealersHand);
    }
    return output;
  }
};
