console.log("Most repeated alphabetic char");
const str= "abcddefda1122334432e3".replace(/[^a-z]/gi,'');
console.log(str)
const  charObj={}
let maxOccuringChar=str.charAt(0);


for(let i=0;i<str.length;i++){
    const currentElement=str.charAt(i);
    if(charObj[currentElement]){
        charObj[currentElement] = charObj[currentElement] + 1
    }else{
        charObj[currentElement] =1
    }
    maxOccuringChar = charObj[currentElement] > charObj[maxOccuringChar]?maxOccuringChar=currentElement:maxOccuringChar
}
console.log(`The max occuring character is ${maxOccuringChar} with ${charObj[maxOccuringChar]} times appearance.`)


console.log(charObj)