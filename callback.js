// synchronous programming
// Executes the code in the order it is written , each 
// line waits for the previous one to finish before executing



// aynchronous programming
// Executes the code in the order it is written , but does not wait for the previous one to finish before executing
// this means that the code can be executed in parallel
// this is useful for tasks that take a long time to complete, such as network requests or file I/O


console.log("Start")
setTimeout(() => {
    console.log("Timeout");
}, 4000);
console.log("End");
// Callback functions are functions that are passed as arguments to other functions and are executed after the completion of a task.


function sum(){
    let a=10;
    let b=20;
    return a+b;
}
function display(callback){
    console.log("The sum is: ", callback());
}
display(sum);

// Callback Hell
function fetchData(data, nextdata){
    setTimeout(() => {
        console.log("Data fetched", data);
        if (nextdata) {
            nextdata();
        }
    }, 2000);
}
// Nested callbacks 
// This is a bad practice and should be avoided
// It makes the code hard to read and maintain
fetchData(1, ()=> {
    fetchData(2, () => {
        fetchData(3, () => {
            console.log("All data fetched");
        });
    });
})
