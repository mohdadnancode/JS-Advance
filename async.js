function functionA() {
  console.log("Entering functionA");
  functionB();
  console.log("Exiting functionA");
}

function functionB() {
  console.log("Entering functionB");
  try {
    functionC(); // Call functionC inside try block
  } catch (error) {
    console.log("Error caught in functionB:", error.message);
  }
  console.log("Exiting functionB");
}

function functionC() {
  console.log("Entering functionC");
  // Simulate an error
  throw new Error("Something went wrong in functionC!");
  console.log("Exiting functionC"); // This line never runs
}

functionA(); // Start the chain
