// 4. Write a js program to find maximum and minimum element in an array.

let array = [2,4,5,7,89,9,4,57,45,6,4];
let max = array[0];
let min = array[0]
for (let index = 0; index < array.length; index++) {
    if(array[index] > max){
        max = array[index]
    }else if(array[index] < min){
        min = array[index]
    }
}

console.log(max);
console.log(min);