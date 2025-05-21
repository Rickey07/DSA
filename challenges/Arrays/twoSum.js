// Find two numbers adding to the target element.

function twoSum(elements=[],target) {
    // Using O2N
    // for(let i = 0; i<elements.length ; i++) {
    //     for(let j = 0 ; j < elements.length ; j++) {
    //         if(elements[i] + elements[j] === target) {
    //             return [i,j]
    //         }
    //     }
    // }

    // Using Hashmap
    const map = new Map();

    for(let i = 0 ; i < elements?.length ; i++) {
        let complement = target - elements[i]; // Find the complement

        if(map.has(complement)) {
            return [map.get(complement),i]
        }

        map.set(elements[i],i);
    }
    return []
}

console.log(twoSum([2,4,3,9,1],10))