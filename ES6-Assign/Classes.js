class Perrson {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  }
  
  const friend1 = new Perrson("Laba", "Hamid");
  const friend2 = new Perrson("Ayesha", "Ahmed");
  
  console.log(`Hello, ${friend1.firstname} ${friend1.lastname}!`);
  console.log(`Hello, ${friend2.firstname} ${friend2.lastname}!`);

//=================================================================

class People{
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const people1 = new People('Laiba', 20);
  console.log(people1.introduce()); // Output: Hi, my name is Laiba and I am 20 years old.
  
  const people2 = new People('Farhan', 25);
  console.log(people2.introduce()); // Output: Hi, my name is Farhan and I am 25 years old.
  
//==================================================================

class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const rectangle1 = new Rectangle(5, 3);
  console.log("Area:", rectangle1.calculateArea()); // Output: Area: 15
  console.log("Perimeter:", rectangle1.calculatePerimeter()); // Output: Perimeter: 16
  
  const rectangle2 = new Rectangle(8, 4);
  console.log("Area:", rectangle2.calculateArea()); // Output: Area: 32
  console.log("Perimeter:", rectangle2.calculatePerimeter()); // Output: Perimeter: 24
  
//=====================================================================

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateDiameter() {
      return 2 * this.radius;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }

  const circle1 = new Circle(5);
  console.log("Diameter:", circle1.calculateDiameter()); // Output: Diameter: 10
  console.log("Circumference:", circle1.calculateCircumference()); // Output: Circumference: 31.41592653589793
  console.log("Area:", circle1.calculateArea()); // Output: Area: 78.53981633974483
  
  const circle2 = new Circle(7);
  console.log("Diameter:", circle2.calculateDiameter()); // Output: Diameter: 14
  console.log("Circumference:", circle2.calculateCircumference()); // Output: Circumference: 43.982297150257104
  console.log("Area:", circle2.calculateArea()); // Output: Area: 153.93804002589985
  
//=====================================================================
function createPerson(name, age) {
    return {
      name: name,
      age: age,
      introduce: function() {
        return 'Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.';
      }
    };
  }
  
  function createStudent(name, age, course) {
    const person = createPerson(name, age);
    person.course = course;
  
    // Store the original introduce function from createPerson
    const originalIntroduce = person.introduce;
  
    // Override the introduce method for students
    person.introduce = function() {
      return originalIntroduce.call(this) + ' I am studying ' + this.course + '.';
    };
  
    return person;
  }
  
  // Example usage:
  const student1 = createStudent('Laiba', 20, 'Computer Science');
  console.log(student1.introduce());
  // Output: Hi, my name is Laiba and I am 20 years old. I am studying Computer Science.
  
  const student2 = createStudent('Ali', 22, 'Mathematics');
  console.log(student2.introduce());
  // Output: Hi, my name is Ali and I am 22 years old. I am studying Mathematics.

  //=========================================================================

  class Rectanglee {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Square extends Rectanglee {
    constructor(side) {
      super(side, side); // Calling the parent class constructor with the side for both width and height
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side; // Override the method to use the side instead of width and height
    }
  
    calculatePerimeter() {
      return 4 * this.side; // Override the method to use the side instead of width and height
    }
  }
  
  const square1 = new Square(5);
  console.log("Area:", square1.calculateArea()); // Output: Area: 25
  console.log("Perimeter:", square1.calculatePerimeter()); // Output: Perimeter: 20
  
  const square2 = new Square(7);
  console.log("Area:", square2.calculateArea()); // Output: Area: 49
  console.log("Perimeter:", square2.calculatePerimeter()); // Output: Perimeter: 28
  
  



