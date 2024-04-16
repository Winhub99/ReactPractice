console.log("Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array ");
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    occupation: "Engineer",
    hobby: "Reading",
    favoriteColor: "Blue"
  };

//  const arr=[]
//   for(let key in obj){
//         arr.push([key,obj[key]])
//   }
//console.log(arr)

//using entries
const arrOfentries= Object.entries(obj);
console.log(arrOfentries) 
