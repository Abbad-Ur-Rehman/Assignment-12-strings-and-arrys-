const str = 'Hello How are you?';
let rev = '';

for(let i = str.length - 1; i >= 0 ;i--){
    rev += str[i];
}

console.log(rev)