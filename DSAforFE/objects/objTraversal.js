console.log("Try all ways to traverse through an object .")

const obj1={a:1,b:2,c:3}

for(let key in obj1){
    console.log(`The value for key  ${key} is ${obj1[key]}`);
}

//Or even better replace for in with forEach
Object.keys(obj1).forEach(key=>console.log(`The value for key  ${key} is ${obj1[key]}`))

//using entries
Object.entries(obj1).forEach(([key,value])=>console.log(`The value for key ${key} is value ${value}`))

const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
//using recursion
traverse(obj)
function traverse(targetObj){
    for(let key in targetObj){
        if(typeof targetObj[key] === "object" && targetObj[key] !== null){
            console.log(`${key} is an object`)
            traverse(targetObj[key])
        }else{
            console.log(`The key is ${key} and the value for this key is ${targetObj[key]}`)
        }
    }
}