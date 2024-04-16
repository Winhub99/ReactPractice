console.log("Capitalize first letter of each word -> 'abhay is cool' => 'Abhay Is Cool'")
const capitalizeMe = "abhay is cool";
const arr= capitalizeMe.split(" ");
console.log(arr)
const capArr= arr.map(word=> (word.charAt(0).toUpperCase()+ word.slice(1)))

console.log(capArr.join(' '))