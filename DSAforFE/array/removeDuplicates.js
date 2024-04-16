console.log("Remove duplicates from an array.")
let strings = ["apple", "banana", "cherry", "banana", "date", "apple", "banana", "date"];

// const uniqueString = new Set(strings)
// const newArr=[]

// for(let str of uniqueString){
//     newArr.push(str)
// }
// console.log(newArr)

/*
even simpler
const unique = [...new Set(strings)]
console.log(unique)


*/

const unqiueArr=[]
strings.forEach(str => {
    if(!unqiueArr.includes(str)){
        unqiueArr.push(str)
    }
})

console.log(unqiueArr)