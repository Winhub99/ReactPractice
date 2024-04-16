const str = 'AmanaplanacanalPanama'.toLowerCase()
const revStr =str.split('').reverse().join("") 
console.log(revStr)
const middle= Math.floor(str.length/2)
console.log("middle ",middle)
let isPlaindrome= false;
for(let i=0;i<= middle;i++){
if(str.charAt(i) === revStr.charAt(i)){
    if(i==middle){
        isPlaindrome=true;
    }
}else{
    break;
}
}

console.log("the string is plaindrome: ",isPlaindrome)