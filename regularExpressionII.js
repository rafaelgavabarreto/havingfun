/*
Regular Expression II
Asked in:  
Facebook
Microsoft
Google
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:

int isMatch(const char *s, const char *p)
Some examples:

isMatch("aa","a") → 0
isMatch("aa","aa") → 1
isMatch("aaa","aa") → 0
isMatch("aa", "a*") → 1
isMatch("aa", ".*") → 1
isMatch("ab", ".*") → 1
isMatch("aab", "a*b") → 1
Return 0 / 1 ( 0 for false, 1 for true ) for this problem

*/
class regularExpressionII {
    constructor(S,P){
        this.S = S
        this.P = P
    }
    testMatch(a, b) {
        return a === b || b === '.' || b === '*' ? true : false ;
    }
    showResult(result) {
        console.log(result);
    }
    compare(srtA,srtB) {
        if(this.testMatch(srtA[0],srtB[0])) {
            if (srtA.length > 0 || srtB.length > 0) {
                return this.compare(srtA.substr(1),srtB.substr(1));
            }
            if (srtA.length === 0 || srtB.length === 0) {
                return 1;
            }
        } else {
            return 0;
        }
    }
    init() {
        if (this.S === this.P || this.P[0] === '*') {
            this.showResult(1);
        } else {
            this.showResult(this.compare(this.S,this.P));
        }

    }
}
let test = new regularExpressionII("aa","aaa");
test.init();