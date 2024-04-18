const ops=['5','2','C','D','+']

function calculateResult(arr){
let numArr=[]
for(let i=0;i<arr.length;i++){
    const currentChar= arr[i];
    if(currentChar ==='C' || currentChar ==='D' || currentChar==='+'){
        console.log('aplphabet detected ', currentChar)
        if(currentChar ==="C"){
            numArr.pop()
        }else if(currentChar ==="D"){
            numArr.push(2 * numArr[numArr.length-1])
        }else{
            numArr.push(numArr[numArr.length-1] + numArr[numArr.length-2])
        }

    }else{
        numArr.push(parseInt(currentChar))
    }
}
console.log(numArr)
return numArr.reduce((num,sum)=>(num+sum),0)
}

const finalResult= calculateResult(ops);
console.log(finalResult)