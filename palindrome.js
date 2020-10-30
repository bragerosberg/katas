/*
A word that is reversed and that reads the same is called a palindrome.
Take a string and check, if its a palindrome, returns true else false
*/

const palindromeSentence = (str) => {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
