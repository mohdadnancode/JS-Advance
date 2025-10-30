class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const user = new Person("Adnan", 21);
user.greet();

// Output: Hi, I'm Adnan and I'm 21 years old.


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // calls parent class constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

const s1 = new Student("Ali", 20, "A");
s1.greet();  // Inherited from Person
s1.study();  // Own method
