console.log('a'.charCodeAt(0))
let str = "Turing"
str = str.toLowerCase()
console.log(str)

function convertTodigit(targetString) {
    let digitStr = ""
    for (let i = 0; i < str.length; i++) {
        const numericOrder = (str.charCodeAt(i) - 'a'.charCodeAt(0) + 1);
        digitStr += numericOrder

    }
    return digitStr;
}
const result = convertTodigit(str)

console.log(result)
console.log(typeof result);
function addDigits(num, maxIterations) {
    num=num.toString();
    while(maxIterations>1){
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            let current = parseInt(num.charAt(i))
            sum += current
        }
        return addDigits(sum,maxIterations-1);
    }
return num;
}
console.log(addDigits(result,2));