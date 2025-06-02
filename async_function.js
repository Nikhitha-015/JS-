// 

function getDataById(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched for ID:", id);
            const data = { id, name: "John Doe" };
            resolve(data);
            // Uncomment the next line to simulate an error
            // reject("Error fetching data");
        }, 5000);
    });
}
(async function fetchData() {    
    await getDataById(1)
    await getDataById(2)
    await getDataById(3)
    console.log("All data fetched successfully");
})();
// IIFE