// function squareAfterDelay(number) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (typeof number !== 'number') {
//           reject(new Error('Invalid input. Please provide a number.'));
//         } else {
//           const square = number * number;
//           resolve(square);
//         }
//       }, 1000);
//     });
//   }
  
//   const inputNumber = 5;
//   squareAfterDelay(inputNumber)
//     .then(square => console.log(square)) // Output: 25
//     .catch(error => console.error(error));

// //=================================================================

// function resolvePromises(promises) {
//   return Promise.all(promises);
// }

// const promise1 = Promise.resolve('Result 1');
// const promise2 = Promise.resolve('Result 2');
// const promise3 = Promise.resolve('Result 3');

// const promisesArray = [promise1, promise2, promise3];

// resolvePromises(promisesArray)
//   .then(resolvedValues => console.log(resolvedValues))
//   .catch(error => console.error(error));

// //==================================================================

// function fetchDataAndParseAsJSON(url) {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       // Handle any fetch or parsing errors
//       throw new Error('Error fetching data:', error);
//     });
// }

// const url = 'http://127.0.0.1:5500/index.html'; 

// fetchDataAndParseAsJSON(url)
//   .then(data => {
//     // Data is the parsed JSON response
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// //===================================================================

// function promiseWithTimeout(promise, timeout) {
//   let timeoutId;

//   const timeoutPromise = new Promise((resolve, reject) => {
//     timeoutId = setTimeout(() => {
//       reject(new Error('Promise timed out'));
//     }, timeout);
//   });

//   return Promise.race([promise, timeoutPromise])
//     .then(result => {
//       clearTimeout(timeoutId);
//       return result;
//     })
//     .catch(error => {
//       clearTimeout(timeoutId);
//       throw error;
//     });
// }
// const delayPromise = new Promise(resolve => setTimeout(() => resolve('Success!'), 2000));

// promiseWithTimeout(delayPromise, 1500)
//   .then(result => {
//     console.log(result); // Output: Success!
//   })
//   .catch(error => {
//     console.error('Error:', error); // Will not be executed in this example
//   });
