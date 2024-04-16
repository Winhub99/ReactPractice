console.log("Third largest")
const inputArr =[11, 12, 3, 1, 9, 6, 7,5,13,4,2];
function getThirdLargest(arr){
const sortedArr=arr.sort((a,b)=>a-b);
return sortedArr[sortedArr.length - 1 - 2]
}

const result= getThirdLargest(inputArr);
console.log('The third largest element of array is : ',result)
