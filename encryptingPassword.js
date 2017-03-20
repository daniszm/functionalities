// return masked string
function maskify(cc) {

    var lastLetters = cc.slice(-4);
    console.log("1: " + lastLetters);
    
    var replaced = cc.replace(/./g, "#").substring(0, cc.length - 4);
    console.log("2: " + replaced);
    
    var encryptedWord = replaced + lastLetters;
    console.log("3: " + encryptedWord);
    
    return encryptedWord;
}
