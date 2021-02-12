'use strict;'

class findDiff {
    constructor(arr, sum) {
        this.arr = arr
        this.sum = sum
        this.arrTemp = []
    }
    checkArrTemp(a) {
        if (this.arrTemp.includes(this.sum - a)) {
            return true;
        } else {
            this.insertArrTemp(a);
            return false;
        }
    }
    insertArrTemp(a) {
        this.arrTemp.push(a);
    }
    checkArr(arr) {
        if (arr.length) {
            if (this.checkArrTemp(arr[0])) {
                return true;
            } else {
                arr.shift();
                return this.checkArr(arr);
            }
        }
    }
    init() {
        let result = this.checkArr(this.arr) || false;
        console.info('Result:', result);
    }
}
let test = new findDiff([1,2,4,5,10,15],15);
test.init();