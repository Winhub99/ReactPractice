console.log("Print reverse of string using recursion. For ex:= for 'hello'->'olleh'")

function reverseString(str){
//let reversed="";
    if(str.length === 0){
        //return reversed
        return ""
    }
   // const lastChar=str[str.length-1]
   // const slicedStr= str.slice(0, str.length-1)
  // const subStr= str.substring(0,str.length-1)
    //return reversed + lastChar+ reverseString(subStr)

    return reverseString(str.substring(1))+ str.charAt(0)
}

console.log(reverseString("hello"))
