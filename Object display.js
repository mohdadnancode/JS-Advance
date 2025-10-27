const person = {
  name: "John",
  age: 30,
  city: "New York"
};

//// Display Object

// let text = person;

// let text = person.name + ", " + person.age + ", " + person.city;

// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
// };

//// Create an Array from the Properties
// const myArray = Object.values(person);

//// Stringify the Array
// let text = myArray.toString();

let text = "";
for (let [key, value] of Object.entries(person)) {
  text += key + ": " + value + "\n";
}

console.log(text)