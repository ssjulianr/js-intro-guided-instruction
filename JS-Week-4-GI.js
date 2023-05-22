// Easy 

const arr = [3, 6, 9]; // Given Array


const numAvg = (arr) => { // Establish the function to perform the mean calculation 
  let sum = 0; // Declaring our variable that will store our array's contents so that we can do math on them 
  for (let i = 0; i < arr.length; i++) { // This for loop is going through our array until we reach the array's length
    sum += arr[i]; // The plus equals operator takes the value on the right and inserts it into the variable on the left.
  } // Therefore, as the for loop iterates through the array, each index is added to the sum variable. This allows us to use as many numbers in the array as we want
  const avg = sum / arr.length; // Creating a new variable which takes the sum of the numbers in the array and divides it by the array length to calculate the average 
  return avg;
}

console.log(numAvg(arr)); // Output: 6


//Medium 

const arr2 = [4, 3, 6, 2, 7, 9];

const indexFinder = () => {
    let index = 0
    for (let a = 0; a < arr2.length; a++){
        index = arr2.indexOf(9, -1);
    }
    return index;
}

console.log(indexFinder());

// Very Hard 

function coinChange(coins, balance) {
  // Create an empty array to store the minimum number of coins required for each amount
  const minCoins = [];
  
  // Initialize the array with balance + 1 for all elements
  for (let i = 0; i <= balance; i++) {
    minCoins[i] = balance + 1;
  }
  
  // Sets the standard for coins as 0 coins are needed to make $0
  minCoins[0] = 0;
  
  // Iterate through all amounts from 1 to the target balance
  for (let i = 1; i <= balance; i++) {
    // Try each type of coin
    for (let coin of coins) {
      // Check if the current coin can be used to form the balance i
      if (coin <= i) {
        // Update the minimum number of coins required for the balance i
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
      }
    }
  }
  
  // If the final value of minCoins[balance] is still balance + 1, it means the balance cannot be formed by any combination of coins
  return minCoins[balance] === balance + 1 ? -1 : minCoins[balance];
}