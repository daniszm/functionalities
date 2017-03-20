// return masked string
function maskify(cc) {
    var lastLetters = cc.slice(-4);
    var replaced = cc.replace(/./g, "#").substring(0, cc.length - 4);
    var encryptedWord = replaced + lastLetters;
    
    return encryptedWord;
}
