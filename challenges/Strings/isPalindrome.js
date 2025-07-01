// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
//     const numbers = Array.from({ length: 10 }, (_, i) => String(i) );
//     const full_array = [...alphabets,...numbers];
//     let oldStr = ""
//     for(let i = 0 ; i<s.length ; i++) {
//         if(full_array?.includes(s[i]?.toLowerCase())) {
//             oldStr+=s[i]?.toLowerCase()
//         }
//     }
//    return oldStr === oldStr.split('').reverse().join('')

  
// };

function checkPalindrome(inputStr) {
    if(typeof inputStr === 'number') {
        inputStr = inputStr?.toString();
    }
    let reverseStr = "";

    for(let i = inputStr?.length - 1 ; i>=0 ; i--) {
        reverseStr+=inputStr[i]?.toLowerCase();
    }
    const isValid = reverseStr === inputStr?.toLowerCase();
    console.log(isValid,'isValid',reverseStr)
    return isValid
}

checkPalindrome(121)
checkPalindrome('racecar');
checkPalindrome('--++--++')