function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];

    const phoneString: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const results: string[] = [];

    function combine(combination: string, nextDigits: string) {
        if (nextDigits.length === 0) {
            results.push(combination);
        } else {
            const letters: string = phoneString[parseInt(nextDigits[0])];
            for (const letter of letters) {
                combine(combination + letter, nextDigits.slice(1));
            }
        }
    }

    combine("", digits);
    return results;
}

console.log(letterCombinations("23"));