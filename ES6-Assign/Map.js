//=======Map to Square===========================
function mapToSquares(numbers) {
    const squareMap = new Map();
    
    numbers.forEach((number) => {
      squareMap.set(number, number * number);
    });
    
    return squareMap;
  }
  
  const nums_ = [1, 2, 3, 4, 5];
  const squareMap = mapToSquares(nums_);
  console.log(squareMap);
  
//=============================================

function mapNamesToAges(people) {
    const nameToAgeMap = new Map();
    
    people.forEach((person) => {
      nameToAgeMap.set(person.name, person.age);
    });
    
    return nameToAgeMap;
  }

  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  
  const nameToAgeMap = mapNamesToAges(people);
  console.log(nameToAgeMap);

//=============================================

function doesMapContainKey(map, key) {
    return map.has(key);
  }
  const mymap = new Map();
  mymap.set('apple', 10);
  mymap.set('orange', 15);
  mymap.set('banana', 8);
  
  console.log(doesMapContainKey(mymap, 'apple')); // Output: true
  console.log(doesMapContainKey(mymap, 'grape')); // Output: false

  //============================================

  function filterMapByCallback(originalMap, callback) {
    const filteredMap = new Map();
  
    originalMap.forEach((value, key) => {
      if (callback(key, value)) {
        filteredMap.set(key, value);
      }
    });
  
    return filteredMap;
  }
  // Callback function: Keep key-value pairs where the value is greater than 10
function greaterThanTenCallback(key, value) {
  return value > 10;
}

const originalMap = new Map([
  ['a', 5],
  ['b', 15],
  ['c', 8],
  ['d', 20]
]);

const filteredMap = filterMapByCallback(originalMap, greaterThanTenCallback);
console.log(filteredMap);

//========================================================

function mergeMaps(map1, map2) {
  const mergedMap = new Map();

  // Step 1: Iterate through the first map and add its key-value pairs to the merged map
  map1.forEach((value, key) => {
    mergedMap.set(key, value);
  });

  // Step 2: Iterate through the second map and add its key-value pairs to the merged map
  map2.forEach((value, key) => {
    mergedMap.set(key, value);
  });

  // Step 3: Return the merged map
  return mergedMap;
}
const map1 = new Map([
  ['a', 5],
  ['b', 10],
  ['c', 15]
]);

const map2 = new Map([
  ['b', 20],
  ['d', 25],
  ['e', 30]
]);

const mergedMap = mergeMaps(map1, map2);
console.log(mergedMap);


