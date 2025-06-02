// Promise in JavaScript
// Promise are kind of objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It is a solution to the callback hell problem.
// Take an example of Amazon delivery where you order a product and wait for it to be delivered.
// The order is the promise, and the delivery is the result of the promise.
// It can be delivered or not delivered.
// Resolved or rejected. are callbacks that are executed when the promise is fulfilled or rejected.

// let promise = new Promise((resolve, reject) => {
//     console.log("Order placed");
//     reject("Order not delivered");
// });

// The handlers are callbacks that are executed when the promise is fulfilled or rejected.

function getData(id, callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched for ID:", id);
            const data = { id, name: "John Doe" };
            resolve(data);
            // reject("Error fetching data");
            // Rejecting the promise simulates an error
            
        }, 5000);
    });
}

// How to use promises
// .then() method is used to handle the resolved value of the promise.
// .catch() method is used to handle the rejected value of the promise.
// .then() suppose we pass pending promise to .then() method, it will wait for the promise to be resolved or rejected. 


const getPromise = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise resolved");
            resolve("Data from promise");
        }, 2000);
    });
}
let promise = getPromise();
promise
    .then((data) => {
        console.log("Promise resolved with data:", data);
    })
    .catch((error) => {
        console.error("Promise rejected with error:", error);
    });

// Promise chaining
function async(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("Async operation completed");
            resolve("Async data");
        }, 3000);
    })
}
function async_2(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("Async operation completed=2");
            resolve("Async data=2");
        }, 3000);
    })
}
console.log("Starting promise chaining...");
async().then((data) => {
    console.log("Data fetched:", data);
    return getData(1); // Chaining another promise
})
.then((data) => {
    console.log("Data fetched from getData:", data);
})
.catch((error) => {
    console.error("Error occurred:", error);
});