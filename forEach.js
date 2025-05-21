// ForEach is a method that executes a provided function once for each array element.
// Callback function is passed as an argument to another function using forEach method.

// Using ForEach method we can iterate over each element of an array and print the value of each element, index 
// and the array itself.
// ForEach method works only on arrays and not on objects or strings.
// Highorder function is a function that takes another function as an argument or returns a function as its result.
// ForEach method is a highorder function.
let arr=[1,2,3,4,5,6,7,8,9,10];
let cities=["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
cities.forEach((element, idx, cities) => {
    console.log(element, idx, cities);
});

let numbers=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(element => {
    console.log(`Square of ${element} is ${element*element}`);
})