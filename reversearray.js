//Q14. Write a JS Function to Reverse a array


function reversearray(arr){
    let revarr = [];
    let arrlen = arr.length;

    for(let i = arrlen - 1; i >= 0; i--) {
        revarr.push(arr[i]);
    }
    return revarr;
}

console.log(reversearray([1,2,3,4]));