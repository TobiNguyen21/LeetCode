// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isValid(s: string): boolean {
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    let arr: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (arr.length === 0) {
            arr.push(s[i]);
            continue;
        }
        if (arr[arr.length - 1] && s[i] === obj[arr[arr.length - 1]]) {
            arr.pop();
        } else {
            arr.push(s[i])
        }
    }
    if (arr.length === 0) return true;
    return false;
};