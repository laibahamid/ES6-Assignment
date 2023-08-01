// document.write("====Greeting message using template strings. =====<br>")
// function greet(name, age) {
//     return `Hello, ${name}! You are ${age} years old.`;
//   }
//   const Name = "Laiba";
//   const Age = 20;
//   const greeting = greet(Name, Age);
// document.write(greeting);
  
// //==================================================================

// document.write("<br><br>===Function to calculate sum and avg =====<br>")

// function SumAndAvg(Nums){
//   let sum = 0;
//   for( let i = 0; i<Nums.length; i++ ){
//     sum += Nums[i]
//   }
//   const average = sum / Nums.length;
//   return `Sum: ${sum}, <br>Average: ${average.toFixed(2)}`;
// }
// const Nums = [5, 10, 15, 20];
// const result = SumAndAvg(Nums);
// document.write(result);

// //=======================================================

// document.write("<br><br>===Creating HTML tag =====")
// function HTMLelement(tagname, text){
//   return `<${tagname}>${text}</${tagname}>`;
// }
// const tagname = 'h3';
// const text = 'Hello World!';
// const element = HTMLelement(tagname, text)
// document.write(element);

// //======================================================

// document.write("===Object to display information =====")

// function productInformation(product){
//   return `<br>Product: ${product.name}, Price: $${product.price.toFixed(2)}, Quantity: ${product.quantity}`;
// }
// const product = {
//   name: 'Apple',
//   price: 0.99,
//   quantity: 10,
// };

// const productInfo = productInformation(product);
// document.write(productInfo);

// //==================================================================

// document.write("<br><br>===Display current date =====")
// function formatDate(date) {
//   const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
//   const month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
//   const year = date.getFullYear();

//   return `${day}/${month}/${year}`;
// }
// const date = new Date();
// const formattedDate = formatDate(date);
// document.write("<br>Today's Date: ",formattedDate);

