console.log("Morse code");
let morseCode="...."
const arr=[]
function subArrays(str){
    for(let i=0;i<str.length;i++){
        
        if(str.charAt(i)==='.' && str.charAt(i+1)==="." && i< str.length-1){
            const modifiedStr= str.substring(0,i)+ "--"+ str.substring(i+2)
            arr.push(modifiedStr)
        }
    }
console.log(arr);
}

subArrays(morseCode);