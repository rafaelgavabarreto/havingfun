// Find the sequences
// [ 1, 99, 2, 5, 3, 100, 4] => { [1, 2, 3, 4, 5], [99, 100] }

class Longest {
    constructor(arr){
        this.arr = arr,
        this.resultTemp = [],
        this.results = []
    }
    arrSort(arr) {
        return arr.sort((a, b) => { return a - b });
    }
    searchSequence(arr) {

        return arr.map((element, index) => {
            if (arr[index] + 1 === arr[index+1]) {
                this.resultTemp.push((arr[index]));
            } else {
                this.resultTemp.push((arr[index]));
                this.results.push(this.resultTemp);
                this.resultTemp = [];
            }
        },[[]]);
    }
    init() {
        this.arr = this.arrSort(this.arr);
        this.searchSequence(this.arr);
        console.log('results',this.results);
    }
}

let longest = new Longest([1, 99, 3, 5, 102, 100, 4]);
longest.init();