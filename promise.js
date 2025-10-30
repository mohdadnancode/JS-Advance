// let pr = new Promise((resolve,reject) => {
//     console.log("Executor function...");
//     // resolve("Success")
//     reject("Failed");
// });

// pr
// .then((result) => {
//     console.log(result);
    
// })
// .catch((result) => {
//     console.log(result);
    
// });

let pr = new Promise((resolve,reject) => {
     console.log("Executor function...");
     setTimeout(() => {
        console.log("Finished"); resolve();
    }, 3000)
});

pr
.then(() => {
    console.log("Fulfilled");
    
})
.catch(() => {
    console.log("Failed");
    
})

