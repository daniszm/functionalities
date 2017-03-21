// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has 4 letters in it, you can be sure that it has to be a friend of yours!
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


function friend(friends){
  var outputArray = [];

  for (var i=0; i<friends.length; i++) {
  var numChars = friends[i].match(/./g).length;
  if (numChars == 4) {
    outputArray.push(friends[i]);
    }
  }
  
  return outputArray;
}

