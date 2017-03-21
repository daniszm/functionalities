// TASK DESCRIPTION:
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)


function alphabetPosition(text) {

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [];
var finalResult = [];

var textToLowerCase = text.toLowerCase();

function fillNumbersArray () {
for (var i=1; i<27; i++) {
  numbers.push(i);
  }
}
fillNumbersArray();

for (var i=0; i < textToLowerCase.length; i++){
    var letter = textToLowerCase[i];
    var indexOfAlphabet = alphabet.indexOf(letter);
    var indexOfNumbers = numbers[indexOfAlphabet];
    finalResult.push(indexOfNumbers);
    finalResult = finalResult.filter(function(n){ return n != undefined });
}

var finalResultToString = finalResult.toString();
var replaced = finalResultToString.split(',').join(' ');
return replaced;
  
}
