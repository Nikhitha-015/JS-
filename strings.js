// let str="Hello World"
// console.log(str)
// len=0
// console.log(str.length)
// for (let i of str){
//     console.log(i)
//     len++
// }
// console.log("Length of the string is", len)
// console.log(str[0])
// Template literals -It is a form where we can combine variable and string
// let Person={
//     "name":"John",
//     "age":30,
//     "city":"New York"
// }
// console.log(`My name is ${Person.name} and I am ${Person.age} years old`)

// let sentence= `This is a template literal string`
// console.log(sentence)
// console.log("Apna \n College")
// console.log("Apna\tCollege".length)

// console.log("Apna\tCollege".trim())
// let a="     Nikhitha Acharya"
// console.log(a.length)
// console.log(a.trim())
// console.log(a.charAt(0))
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log(a)
// console.log(a.slice(1,9))

// console.log(a.replace("Nikhitha","Nikhil"))

// Practice question: Generate a username from the given name
let name=prompt("Please enter your name")
console.log(`@${name}${name.length}`)