// Write a JavaScript function to count the number of digits in a given positive integer without converting it to a string.

// Do not use .toString() or string conversion

// Handle non-negative integers

// Assume input is a valid integer (not a float or negative)

function countDigits(num) {
    // your code here
    if (num === 0) return 1
    let count = 0;
    while(num>0) {
        count++
        num = Math.floor(num/10)
    }
    return count
}

countDigits(123456)
