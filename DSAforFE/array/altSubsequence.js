console.log('find longest sequence of alterante 0 and 1 ');
const input =[0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1]
let longestSequence =0;
let tempS=0
for(let i=1;i<=input.length;i++){
    if(input[i-1] !== input[i]){
        tempS++;
        if(tempS>longestSequence)
        longestSequence=tempS
    }else{
        tempS=0;
    }
}

console.log("The longest subsequence is ",longestSequence);