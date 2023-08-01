function printVarValue() {
    var myVar = "Hello, I'm a variable!";
    console.log(myVar);
  }
  
  printVarValue();

  //=======================================

  let myVar = "Hello, I'm a variable!";

  function printLetValue() {
    console.log(myVar);
  }
  
  printLetValue();

  //=====================================

  function printConstValue() {
    const myVar = "Hello, I'm a constant!";
    console.log(myVar);
  }
  
  printConstValue();

//=======================================

sayHello(); // This will work as the function declaration is hoisted

function sayHello() {
  console.log("Hello, world!");
}
