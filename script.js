// // This is my code
// /*
// Starting the Frontend
// */
// // Operators - +,-,*,/
// // Conditional Statements
// console.log(1+2)
// console.log(1-2)
// console.log(1*2)
// console.log(1/2)
// console.log(1%2)
// console.log(1**2)

let a=10
// a++
console.log(a++)

// Assignment Operators
let b=20
b+=10
console.log(b)
console.log(b>a)
// Comparison Operators
let x="4"
let y=4
console.log(x==y)
console.log(x===y)
// Logical Operators
let a1=true
let b1=false
console.log(a1 && b1)
console.log(a1 || b1)
console.log(!a1)
// Conditional Statements
let age=12
if (age>=18){
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}
let number=10
if (number%2==0){
    console.log("Even")
}
 else {
    console.log("Odd")
 }

 let marks=90
 if (marks>=90){
    console.log("A+")
 }
 else if (marks>=80){
    console.log("A")
 }
 else if (marks>=70){
    console.log("B")
 }
 else if (marks>=60){
    console.log("C")
 }
 else if (marks>=50){
    console.log("D")
 }
 else{
    console.log("F")
 }
 console.log(age>18?"Adult":"Child")

 switch (age){
    case 18:
        console.log("You are 18")
        break
    case 20:
        console.log("You are 20")
        break
    default:
        console.log("You are not 18 or 20")
        break
 }