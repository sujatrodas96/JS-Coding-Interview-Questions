//Q3. write a JavaScript function that checks whether a given string is a palindrome (reads the same forwards and backwards) or not.

function isPalindrome(str) {
// first reverse the string
    let reversedStr = str.split('').reverse().join('');

// step 2: compare the reversed string with the original string
    return str === reversedStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false