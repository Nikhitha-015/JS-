// // Action to handle events
// // Mouse events and keyboard events
// // Events are fired to notify code of "interesting changes" that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g., low battery or media events from the operating system), and other causes.
// let btn1=document.querySelector("#btn");
// btn1.onclick = (e) => {
//     console.log(e)
//     a=prompt("Enter first number");
//     b=prompt("Enter second number");
//     let sum=(a,b)=>Number(a)+Number(b);
//     console.log("Sum of two numbers is: "+sum(a,b));
// }

// // Event listeners
// let btn2=document.querySelector("#btn2");
// btn2.addEventListener("click", ( )=> {
//     console.log("btn2 clicked");
//     a=prompt("Enter first number");
//     b=prompt("Enter second number");
//     let sum=(a,b)=>Number(a)+Number(b);
//     console.log("Sum of two numbers is: "+sum(a,b));
// });
// const handler = ( )=> {
//     console.log("Hello World");
// }
// btn2.addEventListener("click", handler);
// btn2.removeEventListener("click", handler);
// btn2.addEventListener("click", ( )=> {
//     console.log("btn2 clicked");
//     a=prompt("Enter first number");
//     b=prompt("Enter second number");
//     let sum=(a,b)=>Number(a)*Number(b);
//     console.log("product of two numbers is: "+sum(a,b));
// });
let mode_change = document.querySelector("#btn");
let mode = "white";

mode_change.addEventListener("click", () => {
    if (mode === "white") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        mode = "dark";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mode = "white";
    }
});