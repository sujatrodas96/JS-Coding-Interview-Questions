//Q10. Write a function that calculate factorial of a number?

function calculatefactorial(number){
    if(number === 0){
        return 1;
    }

    let factorial = 1;

    for(let i = 1; i < number; i++){
        factorial = factorial * i;
    }

    return factorial;
}

console.log(calculatefactorial(7));