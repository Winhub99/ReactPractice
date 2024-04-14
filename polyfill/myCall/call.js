let obj1={
    firstname:"kaam",
    lastname:"pacchis"
}
let obj2={
    firstname:"abTak",
    lastname:"chhappan"
}

const printname=function(pronoun,age){
    console.log(`${this.firstname} ${this.lastname} 's pronounes are ${pronoun} and is ${age} years old.`)
}

printname.call(obj2,"he/him",26)


Function.prototype.myCall=function(obj,...args){

    if(typeof this !== "function"){
        throw new Error("not callable")
    }
console.log(obj)
console.log(args)
obj.fn=this
obj.fn(...args)

}

printname.myCall(obj1,"she/her",21)