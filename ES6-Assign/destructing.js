document.write("==========Destructing array<br>")
function getSum(nums) {

    const [a, b] = nums;
    const sum = a + b;

    return sum;
  }
  const nums = [3, 7];
  const result_ = getSum(nums);
document.write(result_); // Output: 10

//=====================================================

document.write("<br><br>==========Destructing Object for Person's Info<br>")
function getPersonInfo(persson) {
    // Destructuring the object
    const { name, age, occupation } = persson;
  
    // Creating the information string
    const info = `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
  
    // Returning the information string
    return info;
  }
  const persson = {
    name: "Laiba Hamid",
    age: 20,
    occupation: "Engineer"
  };
  const output = getPersonInfo(persson);
  document.write(output); // Output: Name: Laiba Hamid, Age: 20, Occupation: Engineer
  
//=====================================================

document.write("<br><br>==========Destructing Array of Object<br>")
function getHighestScorer(players) {
    // Destructuring the array
    const [highestScorer, ...rest] = players;
  
    // Finding the highest score
    let highestScore = highestScorer.score;
    let highestScorerName = highestScorer.name;
  
    rest.forEach(player => {
      if (player.score > highestScore) {
        highestScore = player.score;
        highestScorerName = player.name;
      }
    });
  
    // Returning the name of the highest scorer
    return highestScorerName;
  }

  const players = [
    { name: "Ahmed", score: 80 },
    { name: "Laiba", score: 95 },
    { name: "Ali", score: 87 },
    { name: "Sarah", score: 91 }
  ];
  const highestScorer = getHighestScorer(players);
  document.write("Highest scorer: ",highestScorer); // Output: Alice
  
//=====================================================

document.write("<br><br>==========Destructing Object With Default Values<br>")
function getInitials({ firstName = '', lastName = '', middleName = '' }) {
    const initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
    return initials.toUpperCase();
  }
  
  const personn = {
    firstName: "Laiba",
    lastName: "Hamid",
    middleName: "Khan"
  };
  const initials = getInitials(personn);
  document.write(initials); // Output: LKH
  
//=====================================================

document.write("<br><br>==========Destructing Array and Shorthand Property<br>")
function getFirstAndLast(array) {
    const [first, ...rest] = array;
    const last = rest.pop();
    return { first, last };
  }
  
  const strings = ['apple', 'banana', 'cherry', 'date'];
  const Output = getFirstAndLast(strings);
  console.log(Output); // Output: { first: 'apple', last: 'date' }
 document.write("Result in output") 

  