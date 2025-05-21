// Repeating a block of code again and again -loops
// for (let i=0; i<100000; i++){
//     console.log("Hello")
// }
// let sum=0
// for (let i=1;i<=5;i++){
//     sum+=i
    
// }
// console.log(sum)
// let sum=0
// i=20
// while (sum<=10){
//     sum+=i
//     i++
// }
// console.log(sum)

// do while loop
// let sum=0
// i=20
// do {
//     sum+=i
//     i++
// } while (i<=10)
// console.log(sum)

// For-of loop 

// let str="India"
// let size=0
// for(let char of str){ 
//     console.log(char) 
//     size++
//     console.log(size)
// }

// let person={
//     "name":"John",
//     "age":30,
//     "city":"New York"
// }
// for (let key in person){
//     console.log("All values", key, "value", person[key])
// }
// Print all the even numbers from 0 to 100

// for ( let i=0;i<=100;i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }
correct_value=25
user_input=prompt("Please enter any number between 0 to 100")
// if (user_input==correct_value){
//     console.log("Correct")
// }
// else {
//     console.log("Incorrect")
//     if (user_input<correct_value){
//         console.log("Too low")
//     }
//     else {
//         console.log("Too high")
//     }
// }
while (user_input!=correct_value){
    if (user_input<correct_value){
        console.log("Too low")
    }
    else if (user_input>correct_value){
        console.log("Too high")
    }
    alert("Incorrect")
    user_input=prompt("Please enter any number between 0 to 100")
}
console.log("Correct")