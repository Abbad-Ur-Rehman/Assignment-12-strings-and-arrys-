// 2. Write a js program to print all negative elements in an array.

let array = [1,2,4,-1,-5,-3,-56];

for (let index = 0; index < array.length; index++) {
    if(array[index] < 0){
        console.log(array[index])
    }    
}