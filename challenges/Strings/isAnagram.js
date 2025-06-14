/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


const isAnagram = function(s, t) {
    if(s.length  !== t.length) return false;
    const map = new Map(); // Create a map

    for(const char of s) {
        map.set(char,(map.get(char) || 0) + 1)
    } // Add all the character occurrences

    for(const char of t) {
        if(!map.has(char)) return false
        const value = map.get(char) -1 // subtract 1
        map.set(char,value)
        if(map.get(char) === 0) map.delete(char) // if char occurrence is zero then delete that key.
    }

    return map.size === 0; // If anagram then map will be cleared
};