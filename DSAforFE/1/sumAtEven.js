//Implementation Using js methods
/*
const num = 123456;
const numArr =num.toString().split('').map(Number)
const evenArr=numArr.filter((index) =>{ console.log("The current index is: ",index)
     return index%2 !== 0 }).reduce((currentElement,sum)=> currentElement + sum)
console.log(evenArr)
*/
let num = 1234567
let isEven = num.toString().length%2?false:true;
let sum=0;

while(num >0){
    const digit = num%10;
    num = Math.floor(num/10);

    if(isEven){
        sum += digit;
        isEven = false;
    }else{
        isEven= true;
    }
}
console.log('the final sum is: ', sum)