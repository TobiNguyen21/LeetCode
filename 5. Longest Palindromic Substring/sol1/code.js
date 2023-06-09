/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let result1 = '';
        let left = Math.floor(i + 0.5);
        let right = Math.round(i + 0.5);

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            result1 += s[right];
            right++;
            left--;
        }
        result1 = result1.split('').reverse().join('') + result1;
        console.log(`rs1`, result1);
        result = (result1.length > result.length) ? result1 : result;

        right = left = i;
        let result2 = '';
        while (left > 0 && right < s.length && s[left - 1] === s[right + 1]) {
            result2 += s[right + 1];
            left--;
            right++;
        }
        // sub1 = sub1.split('').reverse().join('');
        result2 = result2.split('').reverse().join('') + s[i] + result2;

        console.log(`rs2`, result2);
        result = (result2.length > result.length) ? result2 : result;
    }
    return result;
};

console.log(`RS: `, longestPalindrome('babad'));