console.log("Count the number of each character occured in string madam");
//Array implementation
// const str="madam";
// const strArr= str.split('')
// console.log(strArr)
// const obj={}
// for(let i=0;i<strArr.length;i++){
//     let item=strArr[i]
//     obj[item] = obj[item]?obj[item]+1:1;
// }
// console.log(obj)

//for of impl

const str= "madam"
const charCount={}
for(const char of str){
if(charCount[char]){
 charCount[char]++;
}else{
charCount[char]=1
}
}

console.log(charCount)