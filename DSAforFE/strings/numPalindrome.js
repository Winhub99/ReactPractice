console.log("Check if the number is a palimdrome or not.")
const num = 9573759;
const str = num.toString()
let isPlaindrome=false;
// const strArr =str.split("")
// console.log(strArr)

// const mid = Math.floor(strArr.length/2)
// for(let i=0;i<=mid;i++){
//     const firstNum =  parseInt(strArr[i])
//     const lastNum = parseInt(strArr[strArr.length -1 - i])
//     if(firstNum===lastNum){
//         if(i==mid){
//             isPlaindrome= true;
//         }
//     }else{
//         break;
//     }

// }


//the simpler approach
const revStr = str.split("").reverse().join("")
console.log(revStr)
if(str===revStr){
    isPlaindrome= true;
}

console.log("the number  is palindrome ",isPlaindrome)