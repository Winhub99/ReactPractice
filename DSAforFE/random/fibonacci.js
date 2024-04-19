console.log('Print the fibonacci number of this number');
//simple implmentation
/*function fibo(num){
    let fiboSeries=[0,1]
    for(let i=2;i<=num;i++){

        fiboSeries.push(fiboSeries[i-2]+ fiboSeries[i-1])
    }
   // console.log(fiboSeries)
    return fiboSeries[num]
}

console.log(fibo(5))
*/

//recursive solution

function fiboRecursion(num){
if(num <=1){
    return num;
}
return fiboRecursion(num-1) + fiboRecursion(num-2);
}
console.log(fiboRecursion(5));