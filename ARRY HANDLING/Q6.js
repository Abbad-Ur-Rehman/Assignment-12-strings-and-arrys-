// 6. Write a js program to count total number of even and odd elements in an array.

let array = [2,3,4,5,6,7,8];
let countEven =0;
let countOdd =0;

for (let index = 0; index < array.length; index++) {
    if(array[index] % 2 === 0  ){
        countEven++
    }else{
        countOdd++
    };
}

console.log(`Even numbers are: ${countEven} and Old numbers are: ${countOdd}`);
