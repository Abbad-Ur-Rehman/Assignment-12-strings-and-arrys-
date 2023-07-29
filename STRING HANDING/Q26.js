// 26. Write a js program to replace last occurrence of a character with another in a string.

let str = 'Hello World';
let lastIndex = str.lastIndexOf('l')
const replaced =
  str.slice(0, lastIndex) + 'P' + str.slice(lastIndex + 1);

console.log(replaced);