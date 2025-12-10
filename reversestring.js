//Q1. Write a JavaScript function that takes a string as input and returns the string reversed.

function reversesting(str) {
    return str.split('').reverse().join('');
}

console.log(reversesting("Hello, World!"));  // Output: !dlroW ,olleH



function reversesting(str) {
    let newstring = "";
    for(let i = str.length - 1; i >= 0; i--){
        newstring = newstring + str[i];
    }
    return newstring;
}

console.log(reversesting("Hello, World!"));  // Output: !dlroW ,olleH