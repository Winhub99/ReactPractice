console.log('Reverse only letters.let other characters be there.')
const str= 'a-bC-dEf=ghlj!!'
// revstr should be dc-ba
//step 1 detect not alphabetic Char 
//2. break string at that point 
//3.rev the string upto this point 
//4.concat the non alpa char
//5.repeat step 1 from remaing string
function isChar (charcter){
    return /[a-z]/gi.test(charcter) 
}

for(let i=0;i<str.length;i++){
    const current= str.charAt(i);
    let LastChar=""
    let firstChar=-1
    const last = str.charAt(str.length-1 - i)
    let lastIndex=-1;
    if(isChar(current)){
         firstChar=current;
    }
    for(let j=str.length-1-i;i<j;j--){
        if(isChar(str.charAt(j))){
            LastChar=str.charAt(j)
            lastIndex = j;
            break;
        }
    }
    console.log("The current chacter to be replaced  is:", str[i])

    str[i]= LastChar 
    str[lastIndex] = firstChar;
}
console.log(str)