console.log("find rotational String")
const str1= "ABCD"
const str2="CDAB"
const str3="ACBD"
const testString = str1.concat(str1)
function isRotational(str){

    const stringFound= testString.indexOf(str)
    return stringFound>=0?true:false
}

console.log(isRotational(str3))
