// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// vistedNums = {'2':0, '7':1}

const towSum = (nums, target) => {
    let vistedNums = {}
    for (let i = 0; i < nums.length; i++) {
        const indexOfNeededNum = vistedNums[target - nums[i]];
        if (indexOfNeededNum >= 0) {
            return [i, indexOfNeededNum];
        }
        vistedNums[nums[i]] = i;
    }
}

(() => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = towSum(nums, target);
    console.log(`Result: ${result}`);

})()