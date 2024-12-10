/**
 * Calculate sum array with 3 solution
 */

class ArrayCustom {

    constructor(
        private readonly arr: number[]
    ) { }

    public static len() {
        return ArrayCustom.length;
    }

    public sum(): number {
        let sum: number = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];
        }
        return sum;
    }

    public indexOf(x: number): number {
        this.arr.forEach((v, i)=>{
            if (v === x) return i;
        })
        return -1;
    }
}

(() => {
    const arr: number[] = [23, 34, 45, 65, 76, 87];
    
    const arr2 = new ArrayCustom(arr);

    console.log({
        a: arr2.indexOf(65),
        b: arr2.sum(),
        c: ArrayCustom.len(),
    })
})();