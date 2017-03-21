// TASK DESCRIPTION:
// Hide all password and show only last 4 signs.

// Example:
// input - 1234567890,
// output - ######7890

function maskify(cc) {
    var lastLetters = cc.slice(-4);
    var replaced = cc.replace(/./g, "#").substring(0, cc.length - 4);
    var encryptedWord = replaced + lastLetters;
    
    return encryptedWord;
}
