// 8. Write a js program to find total number of alphabets, digits or special character in a string.



let str = "Morning, It's 7PM."


let alphabets = 0;
let digits = 0;
let specialCharacters = 0;

for (let index = 0; index < str.length; index++) {
    if(str[index] >= 'a' && str[index] <= 'z' || str[index] >= 'A' && str[index] <= 'Z'){
        alphabets++
    } else if(str[index] > '0' && str[index] <= 50 ){
        digits++
    } else{
        specialCharacters++
    }
}

let output = `numbers of Alphabets are : ${alphabets}. Digits are : ${digits}. special Characters are : ${specialCharacters} `;
console.log(output)