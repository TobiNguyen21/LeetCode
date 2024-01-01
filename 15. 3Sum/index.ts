/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
 */
function removeDuplicates(arr: number[][]): number[][] {
    const uniqueValues = new Set<string>();
    const result: number[][] = [];

    for (const subArray of arr) {
        const key = JSON.stringify(subArray);

        if (!uniqueValues.has(key)) {
            result.push(subArray);
            uniqueValues.add(key);
        }
    }

    return result;
}

function threeSum(nums: number[]): number[][] {
    let _3Sum: number[][] = [];
    nums.sort((a, b) => a - b);

    if (nums[nums.length - 1] === nums[0] && nums[0] === 0) return [[0, 0, 0]];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currentSum: number = nums[i] + nums[left] + nums[right];

            if (currentSum < 0) {
                left++;
            } else if (currentSum > 0) {
                right--;
            } else {
                _3Sum.push([nums[i], nums[left], nums[right]]);
                left++;
            }

        }
    }
    return removeDuplicates(_3Sum);
};

console.log(threeSum([0]));