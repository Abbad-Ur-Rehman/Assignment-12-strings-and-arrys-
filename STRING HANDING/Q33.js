//  Write a js program to remove last occurrence of a word in given string.


function removeLastOccurrence(word, str) {
    const lastIndex = str.lastIndexOf(word);
    if (lastIndex !== -1) {
      const beforeWord = str.substring(0, lastIndex);
      const afterWord = str.substring(lastIndex + word.length);
      return beforeWord + afterWord;
    }
    return str;
  }
  
  // Example usage:
  const inputString = "This is an example string. This is another example string.";
  const wordToRemove = "example";
  const result = removeLastOccurrence(wordToRemove, inputString);
  
  console.log(result);
  