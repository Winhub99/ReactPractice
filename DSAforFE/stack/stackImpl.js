class Stack{
    constructor(){
        this.items=[]
    }
    
    push(element){
        this.items.push(element)
    }
    peek(){
        if(this.items.length === 0){
            return "stack is empty"
        }
        return this.items[this.items.length-1]
    }
    pop(){
        if(this.items.length === 0){
            console.log("The stack is underflowing")
            return;
        }
        this.items.pop()
    }
    printStack(){
        let finalString='';
        for(const e in this.items){
            finalString +=this.items[e] +" ";
        }
        console.log(finalString)
    }
}

const stack = new Stack();
stack.push(10)
stack.push("push")
stack.push("ups")
stack.printStack()
stack.pop()
stack.printStack()
const lastItem = stack.peek()
console.log("The topmost element is :",lastItem)
stack.pop()
stack.pop()
stack.pop()
