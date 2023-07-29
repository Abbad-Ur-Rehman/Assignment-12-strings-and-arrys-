// Write a js program to count occurrences of a character in given string.

let text = "Hello world, welcome to the universe.";
let char= 'h';
let result = 0;

for (let index = 0; index < text.length; index++) {
    if(text[index] === char){
        result++;
    }
}

console.log(result);