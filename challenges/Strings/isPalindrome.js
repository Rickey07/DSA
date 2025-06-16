/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const numbers = Array.from({ length: 10 }, (_, i) => String(i) );
    const full_array = [...alphabets,...numbers];
    let oldStr = ""
    for(let i = 0 ; i<s.length ; i++) {
        if(full_array?.includes(s[i]?.toLowerCase())) {
            oldStr+=s[i]?.toLowerCase()
        }
    }
   return oldStr === oldStr.split('').reverse().join('')

  
};