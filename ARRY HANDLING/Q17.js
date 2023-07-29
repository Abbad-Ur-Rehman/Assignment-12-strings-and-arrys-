// 17. Write a js program to put even and odd elements of array in two separate array.

let array = [1,2,3,4,5,6,7,8,9,10];

let countEven = ['Evens are:'];
let countOdd = ['Odd are'];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element % 2 === 0){
        countEven.push(element)
    } else{
        countOdd.push(element)  
}
}
console.log(countEven)
console.log(countOdd)