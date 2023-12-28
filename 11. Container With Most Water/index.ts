function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let maxArea: number = 0;
    while (left < right) {
        let currentArea: number = (right - left) * Math.min(height[left], height[right]);
        if (currentArea > maxArea) maxArea = currentArea;

        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));