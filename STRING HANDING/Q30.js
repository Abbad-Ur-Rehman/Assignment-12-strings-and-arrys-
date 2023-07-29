


function findAllOccurrences(word, str) {
    const reg = new RegExp('\\b' + word + '\\b', 'gi');
    const occurrences = str.match(reg);
    return occurrences ? occurrences : [];
  }
  
  // Example usage:
  const inputString = "This is an example string .";
  const wordToFind = "example";
  const result = findAllOccurrences(wordToFind, inputString);
  
  console.log(result); 
  