// Roman numeral converter

"use strict;"
class Roman {
    constructor(roman,total) {
        this.roman = roman
        this.total = 0
    }
    transformLetterNumber (letter) {
        switch (letter) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
        
            default:
                throw new Error("Invalid Roman numeral");
        }
    }
    isBigger(a, b) {
        if (a === b) { return true; }
        let arr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
        return arr.indexOf(a) > arr.indexOf(b) ? true : false;
    }
    init() {

        for (let i = 0 ; i < this.roman.length ; i++) {
            if (this.isBigger(this.roman[i], this.roman[i + 1])) {
                this.total += this.transformLetterNumber(this.roman[i]);
            } else {
                this.total -= this.transformLetterNumber(this.roman[i]);
            }
        }

        return this.total;

    }
}
const test = new Roman('IMM');
test.init();
console.log('Roman ',test);

/*

IV
V
VI
VII
VIII
IX
XV
*/