document.write("<br><br>=========== Default Parameters<br>")
function getSum(a = 0, b = 0) {
    return a + b;
  }
  

  const result1 = getSum(5, 7);
  document.write("Sum of a & b: ",result1); // Output: 12
  
  const result2 = getSum();
  document.write(result2); // Output: 0

  //====================================================

  document.write("<br><br>=======Rest parameters in an Array")
  function getArguments(...args) {
    return args;
  }
  
  const output1 = getArguments(1, 2, 3, 4, 5);
  document.write("<br>Output1: " , output1); // Output: [1, 2, 3, 4, 5]
  
  const output2 = getArguments('apple', 'banana', 'cherry');
  document.write("<br>Output2: " , output2); // Output: ['apple', 'banana', 'cherry']
  
  //====================================================

  document.write("<br><br>=======Spread to combine the Array")
  function concatArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const result4 = concatArrays(array1, array2);
  document.write("<br>Output: " , result4); // Output: [1, 2, 3, 4, 5, 6]
  
  //=======================================================

//   document.write("<br><br>Spread Operator to Create New Object.")
//   function addIdToObject(person1) {
  
//     const id = generateId();
  
//     return {
//       ...person1,
//       id
//     };
//   }
  
//   const Person = {
//     name: "Laiba Hamid",
//     age: 20,
//     occupation: "Engineer"
//   };
//   const output5 = addIdToObject(Person);
//  document.write(output5);

  