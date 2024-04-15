console.log("Factorial Program")

//Simple Implementation
/*const num =5;
let fact =1;
for( let i=num;i>0;i--){
    fact *=i;
}
console.log(fact)
*/
//recursive implementation
function factorial(num){
    if(num>0)
    return num * factorial(num-1)
    else return 1
}

console.log(factorial(target))

