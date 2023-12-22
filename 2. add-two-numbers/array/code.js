// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const addTwoNumbers = (l1, l2) => {
    const length = (l1.length >= l2.length) ? l1.length : l2.length;
    let k = 0;
    let result = [];
    for (let i = 0; i < length; i++) {
        l1[i] = !l1[i] ? 0 : l1[i];
        l2[i] = !l2[i] ? 0 : l2[i];

        if (l1[i] + l2[i] + k >= 10) {
            result[i] = l1[i] + l2[i] + k - 10;
            k = 1;
        } else {
            result[i] = l1[i] + l2[i] + k;
            k = 0
        }
    }

    result = (k === 0) ? result : [...result, 1];

    return result;
}


const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];
const result = addTwoNumbers(arr1, arr2);
console.log(`Result: ${JSON.stringify(result)}`);
