//Q.15 Remove any No from Array

function removeno(arr, target){
    let arrlen = arr.length;

    for(let i = 0; i < arrlen; i ++ ){
        if(arr[i] === target){
            arr.splice(target);
        }
    }

    return arr;
}

console.log(removeno([1,2,3,4,5], 5));


