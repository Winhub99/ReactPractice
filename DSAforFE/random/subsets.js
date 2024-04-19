console.log("get all possible subsets of array")

function getSubsets(nums){
let branchArr=[];
let allArr=[]

function recursiveSubsets(arr,i){
    if(i === arr.length){
        return allArr.push([...branchArr])
    }

    branchArr.push(arr[i]);
    recursiveSubsets(nums,i+1);
    branchArr.pop()
    recursiveSubsets(nums,i+1)
}

recursiveSubsets(nums,0)
return allArr;
}
console.log(getSubsets([1,2,3]))