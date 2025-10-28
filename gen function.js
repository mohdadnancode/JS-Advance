// function* steps() {
//   console.log("Start");
//   yield 1;
//   yield 2;
//   yield 3;
//   console.log("End");
// }

// const gen = steps(); // returns a Generator object

// console.log(gen.next()); // Start → { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // End → { value: undefined, done: true }


// // Using Generators in a Loop

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// for (let num of numbers()) {
//   console.log(num);
// }
// // 1
// // 2
// // 3




// Passing Values into Generators

function* greet() {
  const name = yield "What is your name?";
  yield `Hello, ${name}!`;
}

const gen = greet();
console.log(gen.next().value);      // "What is your name?"
console.log(gen.next("Adnan").value); // "Hello, Adnan!"



// Infinite Sequence Example

function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3 ...

