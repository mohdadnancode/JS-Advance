try {
  // Code that might throw an error
  let result = 10 / 0;
  console.log(result);
  console.log(x); // ❌ x is not defined
} catch (error) {
  // Code that runs if error occurs
  console.log("An error occurred:", error.message);
}