// 12. Write a js program to print all unique elements in the array.

let array = [1,1,2,3,3,3,4,5,5,6,7,8,8,];
const set = new Set(array);
const uniqueArr = [...set]
console.log(uniqueArr)