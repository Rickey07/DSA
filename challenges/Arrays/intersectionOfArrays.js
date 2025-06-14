/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersectionArray = [];
    const isNum1Longest = nums1?.length > nums2?.length
    const longestArray = isNum1Longest ? nums1 : nums2;
    for(let i = 0 ; i<longestArray?.length ; i++) {
        const currentNum = longestArray[i];
        const arrayToCheckIn = isNum1Longest ? nums2 : nums1
        if(intersectionArray?.includes(currentNum)) {

        } else if(arrayToCheckIn?.includes(currentNum)) {
            intersectionArray.push(currentNum)
        }
    }
    return intersectionArray;
};