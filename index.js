function isPalindrome(word) {
  // Write your algorithm here
  function reverseWord(word) {
    return word.toString().split("").reverse().join("");
  }

  const reversedWord = reverseWord(word)
  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  
  function that takes in a word
    compares that word with the word written backwards
    if the word is the same backwards
      return true
    else
      return false

*/

/*
  Add written explanation of your solution here
  Two functions are used to check if the word is a palindrome
  One function converts the word into a string in which each letter is split into an array, that array is reversed then converted back to a string
  The second function takes the inputted word, compares it with the same word reversed by the other function and outputs true or false depending on whether the word is a palindrome or not
  The function also accounts for whether the first letter is capitalized so as not to return false when a palindrome is entered in that way
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
