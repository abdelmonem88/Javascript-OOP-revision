class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.#printFullName();
  }

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  // Private method
  #printFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

const personOne = new Person("John", "Doe");
console.log(personOne);
console.log(personOne.fullName);

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName);
    this.age = age;
    this.grade = grade;
  }

  get grade() {
    return this._grade;
  }

  set grade(value) {
    if (value < 0 || value > 100) {
      throw new Error("Grade must be between 0 and 100");
    }
    this._grade = value;
  }

  static compare(studentOne, studentTwo) {
    const diff = studentOne.grade - studentTwo.grade;
    if (diff > 0) {
      return `${studentOne.fullName} is better than ${studentTwo.fullName} by ${diff} points`;
    } else if (diff < 0) {
      return `${studentOne.fullName} is worse than ${studentTwo.fullName} by ${diff} points`;
    }
    return `${studentOne.fullName} and ${studentTwo.fullName} have the same grade`;
  }
}

const studentOne = new Student("John", "Doe", 18, 90);
const studentTwo = new Student("Anne", "Doe", 18, 80);

console.log(Student.compare(studentOne, studentTwo));

class Pizza {
  crust = "original";
  #souce = "tomato";

  constructor(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }

  get souce() {
    return this.#souce;
  }

  set souce(value) {
    this.#souce = value;
  }
}

// set souce
const pizzaOne = new Pizza("large", ["cheese", "pepperoni"]);
console.log(pizzaOne);
console.log(pizzaOne.souce);
pizzaOne.souce = "bbq";
console.log(pizzaOne.souce);
console.log(pizzaOne);
