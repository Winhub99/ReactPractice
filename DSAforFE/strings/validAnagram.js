console.log('Given Two strings check if they are anagrams or not?');

const str="anagram"
const target="nagaram"

function isAnagram(str1,str2){

    const set1 = new Set(str1);
    const set2 = new Set(str2);

    if(set1.size !==set2.size)
    return false;

    for(const item of set1){
        if(!set2.has(item)){
            return false;
        }
    }
return true
}

console.log(isAnagram(str,target))

