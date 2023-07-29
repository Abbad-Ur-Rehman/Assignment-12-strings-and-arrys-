// 13. Write a js program to count total number of duplicate elements in an array.

let array = [1,2,3,54,45,54,2,1];
let count = 0;
let sortedArray = array.sort();

for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] === sortedArray[i + 1]){
        count++
    }
}
console.log(`Duplicates elements are: ${count}`)