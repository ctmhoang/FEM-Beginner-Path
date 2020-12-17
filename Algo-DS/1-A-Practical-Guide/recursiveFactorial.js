// Task 1: Without peeking, write your own recursive factorial method

function factorial(n){
    if(n === 1) return 1;
    return n * factorial(n-1);
}

// Task 2: Use your memo function from the previous exercise to memoize your factorial method

function factorialEffecient(){
    const cache = [];
    return function factorial(n){
        if(n === 1) return 1;
        if(!cache[n]){ 
            console.log("CAL " + n)
            cache[n] = n * factorial(n-1)};
        return cache[n];
    }
}

console.log(factorial(5))
const fac = factorialEffecient();
console.log(fac(5))
console.log(fac(4))