//Q2. Write a JavaScript function that takes a string as input and returns the longest word in the string.

function longestWord(str) {
    let words = str.split(' ');
    let longest = "";

    for (let word of words) {
        if (words.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("The quick brown fox jumps over the lazy elephant"));