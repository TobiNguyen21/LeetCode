// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// tính độ dài lớn nhất của chuỗi con không có ký tự lặp lại


/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = (s) => {
    let left = 0;
    let maxLength = 0;
    let charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            left = charMap.get(currentChar) + 1; // dời left vào
        }

        // Cập nhật vị trí xuất hiện gần nhất của ký tự hiện tại
        charMap.set(currentChar, right);

        // Cập nhật độ dài lớn nhất nếu có chuỗi con mới dài hơn
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

const s = "xxzqi";
const result = lengthOfLongestSubstring(s);
console.log(`RESULT: ${result}`);
