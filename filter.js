let arr=[2,3,4,6,8,33,12,15]
let new_array= arr.filter((value)=> {
    return value>0;
})
// This will return a new array with only even numbers that means in general
// it will return a new array with True condition
console.log(new_array);