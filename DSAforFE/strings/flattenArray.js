console.log("Flatten an array without using inbuilt js methods.")
const nestedArray = [1, [2, [3, 4], 5], [6, 7],[8,[9,10,[11,12],[]]]];

function flatArr(arr){
    let flat=[]
arr.forEach(element=> {
    if(Array.isArray(element)){
        if(element.length===0)
        flat=flat.concat(" ")
        flat= flat.concat(flatArr(element))
    }else{
        flat.push(element)
    }
})
return flat;
}

const flattendArr= flatArr(nestedArray)
console.log(flattendArr)
