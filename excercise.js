// async function fetchData(){
//     const api="https://jsonplaceholder.typicode.com/todos/1";
//     const response = await fetch(api);
//     const data = await response.json();
//     console.log(data);
// }

function downloadComplete(callback){
    setTimeout(()=> {
        console.log("Download complete");
        callback();
    }, 2000);
}

downloadComplete(() => {
    console.log("Callback executed after download");
});