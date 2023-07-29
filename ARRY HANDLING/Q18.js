// 18. Write a js program to search an element in an array.

const array = [1, 2, 3, 4, 5];
const elementToSearch = 9;
let foundIndex = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] === elementToSearch) {
    foundIndex = true;
    break;
  }
}

if (foundIndex) {
  console.log(`Element ${elementToSearch} found in the array`);
} else {
  console.log(`Element ${elementToSearch} not found in the array`);
}