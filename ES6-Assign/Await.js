function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function delayedGreeting(name) {
    await delay(2000); 
    console.log(`Hello, ${name}!`);
  }
  
  delayedGreeting('Laiba'); // Output: (After 2 seconds) Hello, LAiba!
  delayedGreeting('Ali'); // Output: (After 2 seconds) Hello, Ali!

  //==========================================================

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function fetchData() {
    await delay(3000); // Simulate a delay of 3 seconds
    const data = { key: "" }; // Replace this with your actual data from the API call
    return data;
  }
  
//===========================================================

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function fetchUsers() {
    try {
      await delay(4000); // Simulate a delay of 4 seconds
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      return users;
    } catch (error) {
      throw new Error('Failed to fetch users: ' + error.message);
    }
  }

  fetchUsers()
  .then(users => console.log(users))
  .catch(error => console.error(error.message));

//==========================================================

async function fetchData(id) {
    try {
      const response = await fetch(`https://randomuser.me/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch data for id ${id}: ${error.message}`);
    }
  }

//==========================================================

function fetchDataAfterDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { Data: "Hello I am Laiba! This is the fetched Data." };
      resolve(data);
    }, 5000);
  });
}

async function fetchAsyncData() {
  try {
    const fetchedData = await fetchDataAfterDelay();
    return fetchedData;
  } catch (error) {
    // Handle errors if necessary
    throw error;
  }
}

fetchAsyncData()
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

  //=========================================================

  let Counter = 0;

  function delayedPromise(arg) {
    return new Promise((resolve) => {
      setTimeout(() => {
        Counter++; // Increment the global counter every second
        resolve({ counterValue: Counter, argValue: arg });
      }, 1000);
    });
  }
  
  async function outputValues(arg) {
    try {
      const result = await delayedPromise(arg);
      console.log("Counter value:", result.counterValue);
      console.log("Function argument value:", result.argValue);
      return result;
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
  
  async function main() {
    for (let i = 0; i < 10; i++) {
      const resolvedValue = await outputValues(i);
      console.log("Resolved value:", resolvedValue);
    }
  }
  
  main();
  