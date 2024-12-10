/**
 * Calculate sum array with 3 solution
 */
var ArrayCustom = /** @class */ (function () {
    function ArrayCustom(arr) {
        this.arr = arr;
    }
    ArrayCustom.len = function () {
        return ArrayCustom.length;
    };
    ArrayCustom.prototype.sum = function () {
        var sum = 0;
        for (var i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];
        }
        return sum;
    };
    ArrayCustom.prototype.indexOf = function (x) {
        this.arr.forEach(function (v, i) {
            if (v === x)
                return i;
        });
        return -1;
    };
    return ArrayCustom;
}());
(function () {
    var arr = [23, 34, 45, 65, 76, 87];
    var arr2 = new ArrayCustom(arr);
    console.log({
        a: arr2.indexOf(65),
        b: arr2.sum(),
        c: ArrayCustom.len(),
    });
})();
