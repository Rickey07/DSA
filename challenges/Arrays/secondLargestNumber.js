// Write a JavaScript function to find the second largest number in a given array of integers.
// You must not sort the array, and the solution should work in O(n) time.

function findSecondLargest(arr) {
    // your code here
    // if(arr?.length === 1) return null
    // let largest = arr[0];
    // let secondLargest = arr[0]

    // for(let i = 1 ; i<arr?.length ; i++) {
    //     const currentNum = arr[i];
    //     if(currentNum > largest) {
    //         largest = currentNum
    //     } 
    // }
    
    // for(let i = 1 ; i<arr?.length ; i++) {
    //     const currentNum = arr[i];
    //     if(currentNum<largest && currentNum > secondLargest) {
    //         secondLargest = currentNum
    //     }
    // }
    // console.log(secondLargest,'secondLargest')
    // return secondLargest;

    // Solved using two loops;

    if(arr?.length < 2) return null;

    let first = -Infinity;
    let second = -Infinity;

    for(let num of arr) {
        if(num>first) {
            second = first // Store the previous value in second
            first = num // update the current Value
        } else if(num > second && num!==first) {
            second = num
        }
    }
    return second === -Infinity ? null : second
    // Solved Using single loop.
}

findSecondLargest([4, 4, 4, 4, 3])

