// Reduce method is basically used to reduce the array to a single value

let arr=[2,3,4,6,8,33,12,15]
// value is the current value of the array
// total is the accumulator that accumulates the value returned from the callback function
// The first time the callback is called, the accumulator and current value can be one of two values
// This will be perfomed on each element of the array
let sum=arr.reduce((value, total)=> {
   
    return value+total;
})
console.log(sum);
