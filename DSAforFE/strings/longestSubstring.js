console.log("without repeating find longest substring");
const str= 'pwwkew'
let uniqueStr = []

for(let i=0;i<str.length;i++){
    const current=str.charAt(i)
    if(!uniqueStr.includes(current)){
        uniqueStr.push(current)
    }
}

uniqueStr=uniqueStr.join("")
console.log(uniqueStr)

