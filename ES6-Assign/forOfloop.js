//  fruits array with some fruit names
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

for (const fruit of fruits) {
  console.log(fruit);
}

//====================================================

// message string with some text
const message = "Hello, World!";

for (const character of message) {
  console.log(character);
}

//=================================================

const Person_ = {
    name: 'Laiba',
    age: 20,
    country: 'Pakistan'
  };
  
  for (const property in Person_) {
    const value = Person_[property];
    console.log(`${property}: ${value}`);
  }

//=================================================

// Set "colors" with some color names
const colors = new Set(['Red', 'Green', 'Blue', 'Yellow']);

for (const color of colors) {
  console.log(color);
}

//===============================================

// a. an empty array
const myArray = [];

// b. Running a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
  myArray.push(i);
}

// c. array into the console
console.log(myArray);

// d. for loop to iterate through the array
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// e. for of loop to output the value into the console from the array
for (const value of myArray) {
  console.log(value);
}












