// Q7. write a function that check Consonant from a string.

function countConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        // Check if it is a letter and NOT a vowel
        if (/[a-z]/.test(char) && !vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countConsonants("sujatro")); 
