console.log("find the valid parenthesis, if yes return true else false.")
const parenthesis="{}()[({})]";
// const pArr= parenthesis.split("")
//console.log(pArr)
const stack=[];

const isValid= checkParenthesis(parenthesis);
console.log("the parenthesis are valid ",isValid)

function checkParenthesis(str){
    for(let i=0;i<str.length;i++){
        const current= str.charAt(i);
        if(current==="{"|| current==="(" || current==="["){
            stack.push(current)
        }else{
            if(stack.length===0){
                return false;
            }
            const top=stack[stack.length-1]
            if(top === "{"&& current ==="}"|| top === "(" && current === ")" || top === "[" && current ==="]"){
                stack.pop()
            }
        }        
    }
    return stack.length === 0;
}