// Q5. Write a function that checks two words are anagram or not


function anagramword(str1, str2){
    const str1wrd = str1.split('').sort().join('');
    const str2wrd = str2.split('').sort().join('');

    return str1wrd === str2wrd;
}

console.log(anagramword("listen", "silent"));