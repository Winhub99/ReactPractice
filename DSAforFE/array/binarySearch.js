const inputArr =[11, 12, 3, 1, 9, 6, 7,5,13,4,2]

const target = 14;

const sortedArr = inputArr.sort((a,b)=> a-b)
console.log(sortedArr)
function binSearch(arr,search){
    console.log(target)
let left =0;
let right =arr.length -1

while(left<=right){
    let mid = Math.floor((left + right)/2)
if(arr[mid] === search){
    return mid;
}
if(arr[mid]>search){
right= mid - 1;
}else{
    left = mid + 1;
}
}
return -1
}

const elementFoundAt= binSearch(sortedArr,target)
console.log("the element was found at index : ",elementFoundAt)