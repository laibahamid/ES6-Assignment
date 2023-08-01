function counter_() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const incrementCounter = counter_();
  
  incrementCounter(); // Output: 1
  incrementCounter(); // Output: 2
  incrementCounter(); // Output: 3

  //======================================================

  function createMultiplier(number) {
    return function(multiplier) {
      return number * multiplier;
    };
  }
  
  const multiplyByTwo = createMultiplier(2);
  console.log(multiplyByTwo(5)); // Output: 10 (2 * 5)
  
  const multiplyByThree = createMultiplier(3);
  console.log(multiplyByThree(4)); // Output: 12 (3 * 4)

  //==================================================

  function secretMessage(message) {
    return function() {
      console.log(`The secret message is: ${message}`);
    };
  }
  
  const showSecret = secretMessage("Hello, World!");
  showSecret(); // Output: The secret message is: Hello, World!
  
  const anotherSecret = secretMessage("I am Laiba!");
  anotherSecret(); // Output: The secret message is: I am Laiba!


//=================================================

function calculate(num1, num2) {
    return {
      add: function() {
        return num1 + num2;
      },
  
      multiply: function() {
        return num1 * num2;
      }
    };
  }
  
  const calculator1 = calculate(5, 3);
  console.log(calculator1.add()); // Output: 8 (5 + 3)
  console.log(calculator1.multiply()); // Output: 15 (5 * 3)
  
  const calculator2 = calculate(10, 2);
  console.log(calculator2.add()); // Output: 12 (10 + 2)
  console.log(calculator2.multiply()); // Output: 20 (10 * 2)
  