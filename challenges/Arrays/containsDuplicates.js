// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
    // Solving using hashmap

    const map = {};
    for(let i = 0 ; i<nums?.length ; i++) {
        const num = nums[i];
        if(num in map) {
            return true
        }
        map[nums[i]] = num
    }
    return false

}

console.log(containsDuplicate([1,2,4,5,10,2]))