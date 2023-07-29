




function findFirstOccurrence(word, str) {
    const index = str.indexOf(word);
    return index !== -1 ? index : null;
  }
  
  const inputString = "This is an example.";
  const wordToFind = "example";
  const result = findFirstOccurrence(wordToFind, inputString);
  
  console.log(result);
  