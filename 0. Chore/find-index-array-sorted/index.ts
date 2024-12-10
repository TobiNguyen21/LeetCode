/**
 * Find index of element in array
 * Found: return index
 * Not Found: return -1
 */

function findIndexOfArray(arr: number[], x: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;

    while(left <= right) {
        let mid: number = Math.round((left + right) / 2);
        if(x === arr[mid]) return mid;
        if(x < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }  

    return -1;
}

function main() {
    const arr: number[] = [2, 3, 4, 8, 33, 54, 66, 77, 87];
    const x = 66;

    console.log("Helllo");
    console.log({
        result: findIndexOfArray(arr, x),
    })
}

main();