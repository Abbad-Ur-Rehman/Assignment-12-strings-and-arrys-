// 13. Write a js program to reverse order of words in a given string.

// function reverseWords(str) {
//   // Split the string into an array of words
//   const words = str.split(' ');

//   // Reverse the order of the words in the array
//   const reversedWords = words.reverse();

//   // Join the reversed words back into a string
//   const reversedString = reversedWords.join(' ');

//   return reversedString;
// }

// // Example usage
// const inputString = 'Hello, World! How are you?';
// const reversedString = reverseWords(inputString);
// console.log(reversedString);


const inputString = 'Hello, World! How are you?';
const words = inputString.split(' ');
const rev = words.reverse();
const join = rev.join()
console.log(join)