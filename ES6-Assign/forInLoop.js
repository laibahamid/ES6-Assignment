
// a. simple object with three items in it.
const myObject = {
    name: 'laiba',
    age: 20,
    city: 'Karachi'
  };
  
  // b. Using the for...in loop, getting the properties'

  for (const property in myObject) {
    const value = myObject[property];
    console.log(`${property}: ${value}`);
  }
  
  // c.  an array containing the same three items.
  const myarray = ['laiba', 20, 'Karachi'];
  
  // Using the for loop, output the values from the array into the console.
  for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
  }

  //================================================

  const person_= {
    name: 'laiba',
    age: 20,
    country: 'Pakistan'
  };
  
  for (const property in person_) {
    console.log(property);
  }

//=================================================

const numbers_ = [10, 20, 30, 40, 50];

for (const index in numbers_) {
  console.log(index);
}

//================================================

const message_ = "Hello, World!";

for (const index in message_) {
  const character = message_[index];
  console.log(character);
}

//==============================================

const scores = new Map([
    ['Ali', 85],
    ['Laiba', 92],
    ['Sara', 78]
  ]);
  
  scores.forEach((score, name) => {
    console.log(`${name}: ${score}`);
  });

  //==========================================

  const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
  };
  
  for (const property in car) {
    const value = car[property];
    console.log(value);
  }
  
  