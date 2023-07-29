// 8. Write a js program to copy all elements from an array to another array.

let array = [1,2,3,4,5,5,6,8];
let emptyArray = [];

for (let index = 0; index < array.length; index++) {
    emptyArray.push(array[index])  
}

console.log(emptyArray)