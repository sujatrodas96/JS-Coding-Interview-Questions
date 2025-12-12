//Q8. Write a function that will check Larget No From an Array?

function largestsno(arr){
    let largest = arr[0];
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    return largest;

}

console.log(largestsno([11,9,10,18]));