//Q9. Write a function that will check the no is prime or not

function checkingprime(number){
    for (let i =2; i <= number / 2; i ++){
        if(number % i === 0){
            return false;
        }
    }

    return true;
}


console.log(checkingprime(13));
console.log(checkingprime(15));