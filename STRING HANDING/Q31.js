// . Write a js program to count occurrences of a word in a given string.

function countOccurrences(word, str) {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    const occurrences = str.match(regex);
    return occurrences ? occurrences.length : 0;
  }
  

  const inputString = "This is an example string.";
  const wordToCount = "example";
  const result = countOccurrences(wordToCount, inputString);
  
  console.log(result);
  