const person__ = {
    name: 'Laiba',
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  person__.greet();

  //======================================

  function Car(brand) {
    this.brand = brand;
    this.speed = 0;
  
    this.accelerate = function(value) {
      this.speed += value;
    };
  
    this.printSpeed = function() {
      console.log(`Current speed of the ${this.brand} car: ${this.speed} km/h`);
    };
  }
  
  // Creating a car object
  const myCar = new Car('Toyota');
  
  // Using the methods to update and print the speed
  myCar.accelerate(30);
  myCar.printSpeed();
  
  myCar.accelerate(20);
  myCar.printSpeed();

//================================================

const calculator = {
    value: 0,
  
    add: function(num) {
      this.value += num;
    },
  
    subtract: function(num) {
      this.value -= num;
    },
  
    multiply: function(num) {
      this.value *= num;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  calculator.add(5);
  calculator.printValue(); // Output: Current value: 5
  
  calculator.subtract(2);
  calculator.printValue(); // Output: Current value: 3
  
  calculator.multiply(4);
  calculator.printValue(); // Output: Current value: 12
  
//=======================================================

const book = {
    title: 'Mrs. Dippy and her Amazing Inventions',
    author: 'Tonny Mitton',
    pages: 218,
    printInfo: function() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Pages: ${this.pages}`);
    }
  };
  
  book.printInfo();

//======================================================


function Person___(name, age) {
    this.name = name;
    this.age = age;
  
    this.introduce = function() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  const person1 = new Person___('Laiba', 20);
  person1.introduce(); // Output: Hi, my name is John and I am 30 years old.
  
  const person2 = new Person___('Sara', 21);
  person2.introduce(); // Output: Hi, my name is Alice and I am 25 years old.

//==========================================================

const counter = {
    count: 0,
  
    increment: function() {
      this.count += 1;
    },
  
    reset: function() {
      this.count = 0;
    }
  };
  
  console.log(counter.count); // Output: 0
  
  counter.increment();
  console.log(counter.count); // Output: 1
  
  counter.increment();
  console.log(counter.count); // Output: 2
  
  counter.reset();
  console.log(counter.count); // Output: 0

//=======================================================

const product_ = {
    name: 'Hand Bag ',
    price: 100,
    discount: 20,
  
    calculateDiscountedPrice: function() {
      const discountedPrice = this.price - (this.price * (this.discount / 100));
      return discountedPrice;
    }
  };
  
  const discountedPrice = product_.calculateDiscountedPrice();
  console.log(discountedPrice); // Output: 80
  
//===========================================

const game = {
    play: function() {
      console.log("Playing the game!");
    }
  };
  
  // Calling the play function using the this keyword
  game.play();
  