console.log("Multiply using recursion ")

let multiplier = 2;
function multiplyResursion(num){
    if(num > 1){
        return multiplier + multiplyResursion(num-1)
    }else if(num === 1){
        return multiplier 
    }
    return
}

console.log(multiplyResursion(2))