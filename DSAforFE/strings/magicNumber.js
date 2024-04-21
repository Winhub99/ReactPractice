console.log('find the magic number')

const inputs=[0,4,1,0,4,5]

for(let i=0;i<inputs.length;i++){
const tempArr=[]
for(let j=0;j<inputs.length;j++){
    if(inputs[j] > i){
        tempArr.push(inputs[j])
    }
}
if(tempArr.length=== i){
    console.log("The magic number is : ", i )
    break;
}
}