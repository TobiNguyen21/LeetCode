/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-2^31 <= x <= 2^31 - 1
 */

function reverse(x: number): number {
    let isNegative: boolean = false;
    let x_string: string = '' + x;
    if (x_string[0] === '-') {
        x_string = x_string.slice(1);
        isNegative = true;
    };

    const numReverse = (isNegative) ? -+(x_string.split('').reverse().join('')) : +(x_string.split('').reverse().join(''));
    if (numReverse > Math.pow(2, 31) - 1 || numReverse < - Math.pow(2, 31)) return 0;
    return numReverse;
};

const rs: number = reverse(123);

console.log(rs);