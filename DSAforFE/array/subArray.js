console.log("take an array and return sub arrays.eg [1, 1, 2, 2, 4, 4, 5, 5, 5] o/p-> [[1,1,2,2], [4,4,5,5,5]]")
const nums=[1, 1, 2, 2, 4, 4, 5, 5, 5]
let prevElement=-1;
let prevArr=[]
let finalArr=[]
for(let i=0;i<nums.length;i++){
    const currentElement=nums[i];
    if(currentElement === prevElement || currentElement=== prevElement +1){
        prevArr.push(nums[i])

    }else{
        const localArr=[]
        finalArr.push(localArr)
        localArr.push(nums[i])
        prevElement=nums[i]
        prevArr=localArr
    }
}

console.log(finalArr)