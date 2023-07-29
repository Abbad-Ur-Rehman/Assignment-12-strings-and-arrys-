
//7. Write a js program to toggle case of each character of a string.




function toggleCase(str) {
  var toggledStr = '';

  for (var i = 0; i < str.length; i++) {

    if (str[i] === str[i].toUpperCase()) {
      toggledStr += str[i].toLowerCase();
    } else {
      toggledStr += str[i].toUpperCase();
    }
  }
  return toggledStr;

}

var input = "What's Up?";
var toggledOutput = toggleCase(input);

console.log(toggledOutput);