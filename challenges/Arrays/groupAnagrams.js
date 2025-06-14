// Given an array of strings strs, group the anagrams together. You can return the answer in any order.




/**
 * @param {string[]} strs
 * @return {string[][]}
 */



var groupAnagrams = function(strs) {
    let map = {};

    for(const s of strs) {
        const key = s?.split("")?.sort()?.join("");
        if(!map[key]) {
            map[key] = []
        }
        map[key].push(s)
    }

    return Object.values(map);
};