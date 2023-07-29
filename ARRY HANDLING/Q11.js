// 11. Write a js program to count frequency of each element in an array.

let randomArray = [1,1,2,23,4,4,5,6,6,7];
let object = {};
let locationWord = randomArray[0]
for (let index = 0; index < randomArray.length; index++) {
    let count = randomArray[index]
    // object[count] = object[count]? object[count] + 1 : 1;
    if(object[count]){
        object[count] += 1
    }else{
        object[count] = 1
    }
}

console.log(object)


