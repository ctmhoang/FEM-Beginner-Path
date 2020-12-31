// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

function makeChangeGreedy(coins) {
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

const makeChangeBruteForce = (coins) => {
  if (!Array.isArray(coins)) return;
  return function bruteforce(amount) {
    let minTot;
    if (amount <= 0) return 0;
    coins.forEach((val) => {
      if (val <= amount) {
        let currCoin = 1 + bruteforce(amount - val);
        if (minTot === undefined || currCoin < minTot) minTot = currCoin;
      }
    });
    return minTot ? minTot : Infinity;
  };
};

// coin values: 5, 10, 25

const coins = [5, 10, 20];
const greedy = makeChangeGreedy(coins);
const brute = makeChangeBruteForce(coins);

// input amount: 40 , output # of coins: 3 (25, 10, 5)

console.log(greedy(40));
console.log(brute(40));

// input amount: 35, output # of coins: 2 (25, 10)

console.log(greedy(35));
console.log(brute(35));

// coins value: 1, 6, 10
const coins2 = [1, 6, 10];
const greedy2 = makeChangeGreedy(coins2);
const brute2 = makeChangeBruteForce(coins2);

// input amount 12, output # of coins: 2 (6, 6)
console.log(greedy2(12));
console.log(brute2(12));
