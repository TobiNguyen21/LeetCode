/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI" 
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
p a y p a l i s h i r  i  n  g
0 1 2 3 4 5 6 7 8 9 10 11 12 13
0 1 2 0 1 2 0 1 2 0 1  2   0  1     //3

0 1 2 1 0 1 2 1 0 1 2  1   0  1

0 1 2 3 0 1 2 3 0 1  2  3   // 4

0 1 2 3 4 0 1 2 3 4  0  1   // 5

0 1 2 3 4 5 0 1 2 3  4  5   // 6

==> i 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */

function convert(s: string, numRows: number): string {
    if (s.length <= numRows) return s;

    let result: string = '';

    let bucket: string[][] = [];
    let up: boolean = true;
    let j: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (j === numRows - 1) {
            up = false;
        }
        if (j === 0) {
            up = true;
        }
        if (!bucket[j]) bucket[j] = [];
        bucket[j].push(s[i]);
        if (up) j++;
        else j--;
    }

    console.log(bucket);

    let rs: string[] = [];
    for (let i = 0; i < bucket.length; i++) {
        rs = [...rs, ...bucket[i]];
    }
    return rs.join('');
};
console.log(convert('PAYPALISHIRING', 3));

// A A p p
