// 7. Write a js program to count total number of negative elements in an array.

let array= [ 1,2,-3,5,-7,-8,];
let countNegative= 0;
for (let index = 0; index < array.length; index++) {
    if(array[index] < 0){
        countNegative++
    }   
}

console.log(`Total negative number are: ${countNegative}`);