console.log("implement recursion function to print every character of string , after that its should print 'its vowel' for every vowel from string.");
/*
const str='vibgyor'
let current=0;
function isVowel(char){
    return /[aeiou]/i.test(char)?true:false;
}

while(current<str.length){
   const result= isVowel(str.charAt(current))
   if(result){
    console.log(str.charAt(current)," its vowel");
   }else{
    console.log(str.charAt(current));
   }
   current++;
}
*/

//recursive solution
const str="Hello world"
printCharAndVowels(str);
function printCharAndVowels(s){

    if(s.length===0){
        return;
    }
    const firstChar = s.charAt(0)
    console.log(firstChar)
    if('aeiouAEIOU'.includes(firstChar)){
        console.log("its vowel");
    }

    s=s.slice(1)
    printCharAndVowels(s)
}
