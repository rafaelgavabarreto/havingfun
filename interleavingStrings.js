/**
 * Interleaving Strings
Asked in:  
Google
Yahoo
Given A, B, C, find whether C is formed by the interleaving of A and B.

Input Format:

The first argument of input contains a string, A.
The second argument of input contains a string, B.
The third argument of input contains a string, C.
Output Format:

Return an integer, 0 or 1:
    => 0 : False
    => 1 : True

Constraints:

1 <= length(A), length(B), length(C) <= 150

Examples:

Input 1:
    A = "aabcc"
    B = "dbbca"
    C = "aadbbcbcac"

Output 1:
    1
    
Explanation 1:
    "aa" (from A) + "dbbc" (from B) + "bc" (from A) + "a" (from B) + "c" (from A)

Input 2:
    A = "aabcc"
    B = "dbbca"
    C = "aadbbbaccc"

Output 2:
    0

Explanation 2:
    It is not possible to get C by interleaving A and B.
 */
"use strict;"
class interleavingStrings {
    constructor(A, B, C) {
        this.A = A
        this.Apoint = 0
        this.B = B
        this.Bpoint = 0
        this.C = C
        this.Result = 1
    }
    checkLetter(letter) {
        if (letter === this.B[this.Bpoint]) {
            this.Bpoint++;
            return true;
        }
        if (letter === this.A[this.Apoint]) {
            this.Apoint++;
            return true;
        }
        return false;
    }
    printResult(boolean) {
        console.info(boolean);
    }
    init() {
        for (let i = 0 ; i < this.C.length ; i++) {
            if (!this.checkLetter(this.C[i],this.C[i + 1])) {
                this.Result = 0;
            } 
        }
        this.printResult(this.Result);
    }
}

let test1 = new interleavingStrings("aabcc", "dbbca", "aadbbbaccc");
let test2 = new interleavingStrings("aabcc", "dbbca", "aadbbcbcac");
test1.init();
test2.init();