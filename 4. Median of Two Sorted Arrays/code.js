function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Đảm bảo nums1 là mảng ngắn nhất
    }

    const m = nums1.length;     // size ngắn
    const n = nums2.length;     // size dài
    const totalLength = m + n;
    const isEven = totalLength % 2 === 0;

    let left = 0;
    let right = m;

    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = Math.floor((totalLength + 1) / 2) - partitionX;

        console.log("partitionX", partitionX);
        console.log("partitionY", partitionY);

        const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minRightX = partitionX === m ? Infinity : nums1[partitionX];
        const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minRightY = partitionY === n ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if (isEven) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }

    throw new Error('Arrays are not sorted!');
}

// Ví dụ sử dụng:
const nums1 = [1, 2, 3];
const nums2 = [1, 2, 3, 4, 5];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Kết quả: 2.0
