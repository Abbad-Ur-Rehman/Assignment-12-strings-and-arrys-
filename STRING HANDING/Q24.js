
// 24. Write a js program to remove all repeated characters from a given string.


let str = 'Hello, World';
let result = '';
let char = [];

for(let i = 0 ; i < str.length ; i++){
    let loc = str[i];
    if(!char[loc]){
        char[loc] = true;
        result += loc;
    }
    
}

console.log(result)