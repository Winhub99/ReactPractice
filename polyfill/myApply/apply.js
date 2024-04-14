let obj1={
    firstname:"Raam",
    lastname:"kumar"
}
let obj2={
    firstname:"lax",
    lastname:"rao"
}

const printname=function(pronoun,age){
    console.log(`${this.firstname} ${this.lastname} 's pronounes are ${pronoun} and is ${age} years old.`)
}

printname.apply(obj1,["he/him",23])

Function.prototype.myApply= function(obj,args){
    if(typeof this !== "function" ){
        throw new Error("not callable")
    }
    if(!Array.isArray(args)){
        throw new Error ("Uncaught TypeError: CreateListFromArrayLike called on non-object")
    }
    obj.fn=this
    obj.fn(...args)

}

printname.myApply(obj2,["she/her",34])