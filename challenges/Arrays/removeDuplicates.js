// Remove duplicates in place from sorted Array

function removeDuplicates (nums=[]) {
    if(nums.length === 0) return 0

    let k = 0

    for(let i = 1 ; i < nums?.length ; i++) {
        if(nums[k] !== nums[i]) {
            k++
            nums[k] = nums[i];
        }
    }
    console.log(nums)
    return k + 1
}
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}