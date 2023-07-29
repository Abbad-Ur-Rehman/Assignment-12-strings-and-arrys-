// 5. Write a js program to find second largest element in an array.

let array = [1,2,4,63,7,81];
let large = array[0];
let secondLarge ;
for (let index = 0; index < array.length; index++) {
    if(array[index] > large){
        secondLarge = large;
        large = array[index]
    }   else if(array[index] < large){
        secondLarge = array[index];
    }
}

console.log(secondLarge)