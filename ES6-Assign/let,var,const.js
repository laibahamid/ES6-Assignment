// const pi = 3.142;
// pi = 3.14;
// console.log(pi)
//========================================================================

document.write("Sum of the squares in the array========<br>")

function sumOfSquares(numbers) {
    let sum = 0; 
  
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] ** 2; 
      sum += square;
    } 
    if (sum > 100) {
        var message = "The sum is greater than 100."; 
        console.log(message);
      }
    return sum;
}
const numbers = [1, 2, 3, 4, 5]; //[1 + 4 + 9 + 16 + 25] 
const result = sumOfSquares(numbers);
document.write( "The sum of the squares in the array is ",result); // Output: 55

//====================================================================

document.write("<br><br>First letter in the array========")
const string = [ "apple", "banana", "cherry", "date"]

for( let i = 0; i<string.length ; i++){
    let firstletter = string[i][0];
    document.write( "<br>",firstletter)
}

//=============================================================

document.write("<br><br>Printing sterisk========")
function AsteriskString(n) {
    const asterisk = '*'; // Constant string declared with const
  
    return asterisk.repeat(n);
  }
  
const numberOfAsterisks = 5;
const asteriskString = AsteriskString(numberOfAsterisks);
document.write("<br>",asteriskString); // Output: *****

//================================================================

document.write("<br>Greeting person========")
function greetPerson(person) {
    var message = "Hello, " + person.name + "! You are " + person.age + " years old."; // Variable declared with var in the function scope
    return message;
  }
  var person = {
    name: "Laiba",
    age: 20
  };
  
  var greeting = greetPerson(person);
 document.write("<br>",greeting); // Output: Hello, John! You are 25 years old.
  
 //============================================================

 document.write("<br><br>Max value========")
 function MaxValue(num) {
    let max; // Variable declared with let
  
    if (num.length > 0) {
      max = Math.max(...num); // Spread operator (...) used to pass array elements as arguments
    }
  
    return max;
  }
  const num = [10, 5, 8, 12, 3];
  const maxValue = MaxValue(num);
  document.write("<br>The max value in the array: ",maxValue); // Output: 12
  
