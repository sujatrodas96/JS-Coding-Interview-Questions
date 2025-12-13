//Q.16 remove targeted letter from string

function removeletter(word, targetletter){
    let strlen = word.length;

    for(let i = 0; i < strlen; i ++){
        if(word.indexOf(i) === targetletter){
            word.splice(0, targetletter);
        }
    }

    return word;
}

console.log(removeletter("Sujatro", "S"));



//Alternative Way



function removeletter(word, targetletter) {
    let result = "";

    for (let char of word) {
        if (char !== targetletter) {
            result = result + char;
        }
    }
    return result;
}

console.log(removeletter("Sujatro", "u"));