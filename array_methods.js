// Map method
// Similar to forEach
// It helps to iterate over an array and perform some operation on each element
// It returns a new array with the results of calling a provided function on every element in the calling array
const numbers = [1, 2, 3, 4, 5];
// We can use array, index and value as arguments in Map method
let new_array=numbers.map((value) => {
    return value **2;

   
});

console.log(new_array);