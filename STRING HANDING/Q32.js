


function removeFirstOccurrence(word, str) {
    const reg = new RegExp('\\b' + word + '\\b', 'i');
    return str.replace(reg, '');
  }
  
  const inputString = "This is an example string. This is another example string.";
  const wordToRemove = "example";
  const result = removeFirstOccurrence(wordToRemove, inputString);
  
  console.log(result);
  