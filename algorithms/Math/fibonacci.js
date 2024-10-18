// Problem:- Given a number 'n', find the first 'n' elements of the fibonacci sequence.

// In Math,The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.


function getFiboSequence(n=2) {
    const fib = [0,1];
    for(let i = 2 ; i< n ; i++) {
        const firstNum = fib[i-1]
        const secondNum = fib[i-2]
        fib[i] = firstNum + secondNum
    }
    return fib;
}

console.log(getFiboSequence(3))