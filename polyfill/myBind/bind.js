const name = {
    firstname:"Vinny",
    lastname:"Sin"
}

let printname=function(city,dist,state){
    console.log(`${this.firstname} ${this.lastname} ${city} ${dist} ${state}`)
}

const printMyname = printname.bind(name, "dharchula")
printMyname("pit","uk")

Function.prototype.myBind = function(...args){
    let func = this;
    let params = args.slice(1)
    return function(...vars){
        func.apply(args[0],[...params,...vars])
    }
}

const printUsingMyBind = printname.myBind(name,"wadi");
printUsingMyBind("pune","Maha")