// 2. Write a js program to copy one string to another string.


function joinSting(str1,str2){
    return str1.concat(" "+str2)
}
let str1 = "This is one";
let str2 = "This is two";

let joined = joinSting(str1,str2);
console.log(joined)

//OUTPUT=  This is one This is two