// 14. Write a js program to delete all duplicate elements from an array.

let array = [1,2,3,54,45,54,2,1];

const set = new Set(array);
const dlt = Array.from(set)

console.log(dlt)