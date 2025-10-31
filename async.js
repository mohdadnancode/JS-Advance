// function functionA() {
//   console.log("Entering functionA");
//   functionB();
//   console.log("Exiting functionA");
// }

// function functionB() {
//   console.log("Entering functionB");
//   try {
//     functionC(); // Call functionC inside try block
//   } catch (error) {
//     console.log("Error caught in functionB:", error.message);
//   }
//   console.log("Exiting functionB");
// }

// function functionC() {
//   console.log("Entering functionC");
//   // Simulate an error
//   throw new Error("Something went wrong in functionC!");
//   console.log("Exiting functionC"); // This line never runs
// }

// functionA(); // Start the chain


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 5000)
})

// function getData() {
// // JS Engine will not wait for promise to be resolved
//   p.then((res) => console.log(res))

// console.log("Hello World");
// }

// getData()

async function handler() {
  console.log("Hehe")
  // JS Engine was waiting for promise to resolve
  const val1 = await p1;
  console.log("Hello World")
  console.log(val1);  

  const val2 = await p2;
  console.log("Hello World")
  console.log(val2);  
}

handler()