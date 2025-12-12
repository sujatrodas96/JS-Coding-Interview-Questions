//Q13. Find unique element from an array

function uniqueArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(uniqueArray([1, 2, 2, 3, 3, 4]));
