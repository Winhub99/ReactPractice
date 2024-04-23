console.log('Standard fizzbuzz problem');
const num=15;
const result=[]
for(let i = 1;i<=num;i++){
    if(i%3==0){
        if(i%5===0){
            result.push("FizzBuzz")
        }else{
            result.push("Fizz")
        }
        
    }else if(i%5===0){
        result.push("Buzz")
    }else{
        result.push(String(i))
    }
}

console.log(result)