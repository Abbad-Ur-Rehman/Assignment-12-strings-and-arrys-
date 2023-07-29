// Write a js program to find highest frequency character in a string.

let str = 'Hello World';
let object = {};
let max = 0;
let loc = str[0]

str.split('').forEach(element => {
  object[element] = object[element]? object[element] + 1 : 1;
});

for( let i in object){
  if(object[i] > max){
    max = object[i];
    loc = i
  }
  
}
console.log(loc)