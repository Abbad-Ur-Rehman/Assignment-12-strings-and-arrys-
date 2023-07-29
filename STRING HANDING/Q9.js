// 9. Write a js program to count total number of vowels and consonants in a string.

let str = 'hello how are you?'
let vol = ['a,e,i,o,u']
let vowles = 0;
let con = 0;

for(let i =0; i< str.length; i++){
    if(str[i] ==='a' || str[i] === 'i' ||str[i]=== 'o'  ||str[i]=== 'u' ||str[i]=== 'e'){
        vowles++
    }else{
        con++
    }
}

let result = `number of vowles : ${vowles}. numbers of consonants ${con}`
console.log(result)