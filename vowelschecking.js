//Q6. write a function that checking vowels in a string

function countvowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for(let char of str.toLowerCase()){
        if(vowels.excludes(char)){
            count++;
        }
    }
    return count;
}

console.log(countvowels("sujatro"));