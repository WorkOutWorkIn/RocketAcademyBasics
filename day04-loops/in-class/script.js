var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var line = "";
  for (var i = 1; i <= input; i++) {
    line += "*".repeat(i) + "<br>";
  }
  return line;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// var emojiNumberCharactersMain = function (input) {
//   // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
//   var myOutputValue = "";

//   for (var i = 0; i < input; i++) {
//     myOutputValue = myOutputValue + "🚀";
//   }
//   return myOutputValue;
// };

// var emojiSquareMain = function (input) {
//   // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
//   var myOutputValue = ``;
//   var outerCounter = 0;

//   while (outerCounter < input) {
//     var innerCounter = 0;

//     while (innerCounter < input) {
//       myOutputValue = myOutputValue + `🚀`;
//       innerCounter += 1;
//     }
//     myOutputValue = myOutputValue + `<br>`;
//     outerCounter += 1;
//   }
//   return myOutputValue;
// };

// var emojiTriangleMain = function (input) {
//   // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
//   var myOutputValue = ``;
//   for (var i = 0; i < input; i++) {
//     for (var j = 0; j <= i; j++) {
//       myOutputValue = myOutputValue + "🚀";
//     }
//     myOutputValue = myOutputValue + `<br>`;
//   }
//   return myOutputValue;
// };

// // var line = "";
// //   for (var i = 1; i <= length; i++) {
// //     line+="*".repeat(i)+"<br>";
// //   }
// //   return line;
// // }
// // console.log(makeLine(3));

// var emojiOutlineSquareMain = function (input) {
//   // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
//   var myOutputValue = ``;
//   for (var i = 0; i <= input; i++) {
//     for (var j = 0; j <= input; j++) {
//       if (i == 0) {
//         myOutputValue = myOutputValue + "🚀";
//       } else if (i == input) {
//         myOutputValue = myOutputValue + "🚀";
//       } else if (j == 0) {
//         myOutputValue = myOutputValue + "🚀";
//       } else if (j == input) {
//         myOutputValue = myOutputValue + "🚀";
//       } else {
//         myOutputValue = myOutputValue + "📝";
//       }
//     }
//     myOutputValue = myOutputValue + `<br>`;
//   }
//   return myOutputValue;
// };

// var emojiCenterSquareMain = function (input) {
//   // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
//   var myOutputValue = ``;
//   var oddNumberCheck = input % 2;
//   var medianNum = 0;
//   medianNum = Math.floor(input + 1) / 2;
//   console.log(input);
//   console.log(`input`);
//   console.log(medianNum);
//   if (oddNumberCheck == 1) {
//     for (var i = 0; i <= input; i++) {
//       for (var j = 0; j <=input; j++) {
//         //top row
//         if (i == 0) {
//           myOutputValue = myOutputValue + "🚀";
//         } else if (i == input - 1) {
//           myOutputValue = myOutputValue + "🚀";
//         }
//         // left column
//         else if (j == 0) {
//           myOutputValue = myOutputValue + "🚀";
//         } else if (j == input - 1) {
//           myOutputValue = myOutputValue + "🚀";
//         } else if (i == medianNum && j == medianNum) {
//           myOutputValue = myOutputValue + `😊`;
//         } else {
//           myOutputValue = myOutputValue + `📝`;
//         }
//       }
//       myOutputValue = myOutputValue + `<br>`;
//     }
//   } else {
//     myOutputValue = `Error, enter an odd number.`;
//   }
//   return myOutputValue;
// };

// var multiDiceBaseMain = function (input) {
//   // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var multiDiceMultiRoundMain = function (input) {
//   // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var multiDiceTwoPlayerMain = function (input) {
//   // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var multiDiceMultiPlayerMain = function (input) {
//   // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };
