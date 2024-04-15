console.log("Find the maximum Occurring string from an array.")
const arr=['apple', 'banana', 'orange', 'apple', 'banana', 'orange','banana'];
function convertStringArrToObject(strArr){
    const fruitMap={}
    for(let i=0;i<strArr.length;i++){
        const item = strArr[i]
        fruitMap[item] = fruitMap[item]? fruitMap[item]+1: 1;
    }
    console.log(fruitMap)
    return fruitMap;
}

function findMaxOccuringString(map){
    let maxCount={element:"",count:-999};

for(const key in map){
    if(map.hasOwnProperty(key)){
        const value = map[key]
        if(value>maxCount.count){
            maxCount.element=key;
            maxCount.count=value
        }
    }
}
return maxCount.element
 }
const myMap=convertStringArrToObject(arr);
 const maxEl= findMaxOccuringString(myMap)
 console.log("The highrst occuring String is: ", maxEl)
 