/**
 * Find index of element in array
 * Found: return index
 * Not Found: return -1
 */
function findIndexOfArray(arr, x) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.round((left + right) / 2);
        console.log(mid);
        if (x === arr[mid])
            return mid;
        if (x < arr[mid])
            right = mid - 1;
        else
            left = mid + 1;
    }
    return -1;
}
function main() {
    var arr = [2, 3, 4, 8, 33, 54, 66, 77, 87];
    var x = 66;
    console.log("Helllo");
    console.log({
        result: findIndexOfArray(arr, x),
    });
}
main();
