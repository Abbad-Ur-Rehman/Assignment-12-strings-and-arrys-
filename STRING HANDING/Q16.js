// Write a js program to search all occurrences of a character in given string.

let text = "Hello world, welcome to the universe.";
let char= 'r';
let result = [];

for (let index = 0; index < text.length; index++) {
    if(text[index] === char){
        result.push(index);
    }
}

console.log(result)