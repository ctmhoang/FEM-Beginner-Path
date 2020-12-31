// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

function makeChange(coins) {
  if (!Array.isArray(coins)) return;
  coins.sort((a, b) => b - a);

  function getMaxCoin(amount) {
    const val = coins.find((val) => val <= amount);
    return val ? val : coins[coins.length - 1];
  }

  return (amount) => {
    let tot = 0;
    while (amount > 0) {
      tot++;
      amount -= getMaxCoin(amount);
    }
    return tot;
  };
}

// coin values: 5, 10, 25

const greedy = makeChange([5, 10, 25]);

// input amount: 40 , output # of coins: 3 (25, 10, 5)

console.log(greedy(40));

// input amount: 35, output # of coins: 2 (25, 10)

console.log(greedy(35));
