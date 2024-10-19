// Problem:- Given an integer 'n' , find the factorial of that integer.

// In Math factorial of a number , is the product of all integers positive integers less than or equal to 'n'


function getFactorial(n) {
    let num = 1;
    for(let i = 1; i<=n ; i++) {
        num*=i
        
    }
    return num
}

console.log(getFactorial(5))