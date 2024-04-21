console.log("Get max occurring char in a string");
const str= "abcddefda1122334432e3";
let maxOccuringChar=null;
let maxCount=0;
for(let i =0;i<str.length;i++){
    const currentElement = str.charAt(i);
    if(parseInt(currentElement) < 'a' || currentElement > 'Z'){
        let occurances=0;
        for(let j=i;j<str.length;j++){
            if(currentElement===str[j]){
                occurances++;    
            }
            if(occurances>maxCount){
                maxOccuringChar=currentElement;
                maxCount=occurances;
            }
        }
    }
}

console.log(`the ${maxOccuringChar} happeared most ${maxCount} times in the string.`);