/*
Given the numbers of a, b, and c generate a string not repeting the same character more than 2.

Example:
A = 1, B = 2, C = 1
return = 'bbac'

*/

class Phrase {
    constructor(A,B,C) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.Total = A + B + C;
    }
    total() {
        return this.A + this.B + this.C;
    }
    whoISbigger(A, B, C) {
        if (A >= B + C) {
            return 'a';
        } 
        if (B >= A + C) {
            return 'b';
        }
        if (C >= A + B) {
            return 'c';
        }
        return this.defineExeption('a');
    }
    checkPosition(returnString, position, letter) {
        if (returnString[position-2] === undefined || returnString[position-2] !== letter || returnString[position-1] === undefined || returnString[position-1] !== letter) {
            return letter;
        } else {
            return this.checkPosition(returnString, position, this.defineExeption(letter));
        }
    }
    defineExeption(letter) {
        switch (letter) {
            case 'a':
                return this.B > 0 ? 'b' : this.C > 0 ? 'c' : '';
            case 'b':
                return this.C > 0 ? 'c' : this.A > 0 ? 'a' : '';
            case 'c':
                return this.B > 0 ? 'b' : this.C > 0 ? 'c' : '';
            default:
                break;
        }
    }
    decreaseLetter(letter) {
        if (letter === 'a') { this.A -= 1; }
        if (letter === 'b') { this.B -= 1; }
        if (letter === 'c') { this.C -= 1; }
    }
    init() {
        let returnString = [];
        
        for (let i = 0 ; i < this.Total ; i ++) {
            let nextLetter = this.checkPosition(returnString, i, this.whoISbigger(this.A, this.B, this.C));
            returnString[i] = nextLetter;
            this.decreaseLetter(nextLetter);
        }
        console.log(returnString.join(''));
    }
}

let phrase = new Phrase(8,3,1);
phrase.init();