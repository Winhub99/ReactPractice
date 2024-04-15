const inputArr =[11, 12, 3, 1, 9, 6, 7,5,13,4,2]

for(let i=0;i<inputArr.length-1;i++){
    for(let j=0;j<inputArr.length -1 - i;j++){
    if(inputArr[j]>inputArr[j+1]){
        let temp =inputArr[j];
        inputArr[j]=inputArr[j+1];
        inputArr[j+1]= temp 
    }
}
}
console.log(inputArr)