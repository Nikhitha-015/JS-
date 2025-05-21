// marks=[34,5,6,89,90,98,100,23,45,67,78,90]
// const above_90 = marks.filter((mark)=> {
//     if (mark>90) {
//         return mark;
//     }
// })
let n = Number(prompt("Enter a number"));
let arr = [];
for (let i = 1; i < n; i++) {
    arr[i] = i;
}
arr.push(n); // Add the entered number to the array

const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(arr);
console.log("Sum of all elements:", sum(arr));

// Fix: Use parentheses or add return statement in reduce
let factorial = arr.reduce((acc, curr) => acc * curr, 1);
console.log("Factorial of all elements:", factorial);