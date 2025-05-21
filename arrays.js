// Arrays: is a collection of items
let marks=[10,20,30,40,50]
// Generally this is used to store similar data types
// for (i in marks){
//     console.log("Student[" + i + "] = " + marks[i])
// }

// Array is a type of object
// Index value pairs but key here is index
// Indices are in linearly increasing order
// Arrays are mutable whereas strings are immutable
// Loop through the array
// let i=0
// while (i<marks.length){
//     console.log("Student[" + i + "] = " + marks[i])
//     i++
// }
for (let i=0;i<marks.length;i++){
    console.log("Student[" + i + "] = " + marks[i])
}


// Practice question:
arr=[85,97,44,37,76,60]
avg=0
for (let i=0; i<arr.length;i++){
    avg+=arr[i]

}
console.log("Average = " + avg/arr.length)
console.log(`Average = ${avg/arr.length}`)

// Practice question 2:
array_given=[250,645,300,900,50]
discount=0.1
for (let i=0;i<array_given.length;i++){
    array_given[i]=array_given[i]-array_given[i]*discount
    console.log(`Discounted price of item ${i} = ${array_given[i]}`)
    
}

console.log(array_given)

// Arrays methods in Js
// push() - adds an element to the end of the array
// pop() - removes the last element of the array
// shift() - removes the first element of the array - just like pop
// unshift() - adds an element to the beginning of the array - just like push
// splice() - adds/removes elements from the array
// toString() - converts the array to a string
// Concat() - joins two or more arrays
// slice() - returns selected elements in an array, as a new array - original array is not modified
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place , original array is modified
console.log(array_given.push(1000)) 
console.log(array_given)// adds 1000 to the end of the array
console.log(array_given.pop()) // removes the last element of the array

console.log(array_given.toString()) // converts the array to a string

// Practice question 3:
company=['Google','Microsoft','Amazon','uber','Apple','Facebook']
console.log(company.shift())
console.log(company.splice(2,1,"ola"))
console.log(company.splice(2,0, "Tesla"))
console.log(company.push("Adobe"))