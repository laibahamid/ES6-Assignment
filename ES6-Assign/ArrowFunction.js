document.write("<br><br>==========Arrow Function to return Length of a String")
const getStringLength = (str) => str.length;

const inputString = "Hello Everyone! I am learning JavaScript. ";
const stringLength = getStringLength(inputString);
document.write("<br>Length of a string: " , stringLength); // Output: 

//=============================================================

document.write("<br><br>=========Product using an Arrow Function")

const multiplyNumbers = (num1, num2) => num1 * num2;

const number1 = 5;
const number2 = 7;
const product = multiplyNumbers(number1, number2);
document.write("<br>Product 5 * 7 = " , product); // Output: 35

//==========================================================

document.write("<br><br>========Arrow Function to Calculate Average")
const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
      return 0;
    }
  
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
  };

  const numberArray = [1, 2, 3, 4, 5];
  const average = calculateAverage(numberArray);
  document.write("<br>Average: " , average); // Output: 3

//==========================================================

document.write("<br><br>========Arrow Function to get Random Number")
const getRandomNumber = () => Math.random();

const randomNumber = getRandomNumber();
document.write("<br>Random Number between 0 and 1: " , randomNumber);



  