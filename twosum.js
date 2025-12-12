//Q12. Two Sum in JavaScript

function twoSumAll(nums, target) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

console.log(twoSumAll([1,3,2,3,4,5], 7));
