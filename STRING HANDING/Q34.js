// Write a js program to remove all occurrence of a word in given string.

function removeAllOccurrences(word, str) {
  const regex = new RegExp('\\b' + word + '\\b', 'ig');
  return str.replace(regex, '');
}

// Example usage:
const inputString = "This is an example string. This is another example string.";
const wordToRemove = "example";
const result = removeAllOccurrences(wordToRemove, inputString);

console.log(result);
