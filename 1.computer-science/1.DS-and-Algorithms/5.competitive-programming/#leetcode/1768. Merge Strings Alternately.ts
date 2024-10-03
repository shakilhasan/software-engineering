//https://leetcode.com/problems/merge-strings-alternately
function mergeAlternately(word1: string, word2: string): string {
    const len1 = word1.length,len2 = word2.length;
    let result='', p=0, q=0, i=0;
    while (i < len1 +len2) {
        if((i%2===0 && p<len1)||q>=len2) result+=word1[p++];
        else result+=word2[q++];
        i++;
    }
    return result;
}
function mergeAlternately1(word1: string, word2: string): string {
    const len1 = word1.length,len2 = word2.length;
    let result='', p=0, q=0;
    while (p < len1 || q < len2) {
        if( p<len1) result+=word1[p++];
        if( q<len2) result+=word2[q++];
    }
    return result;
}
console.log(mergeAlternately("abc",  "pqr"));  //"apbqcr"
console.log(mergeAlternately("ab",   "pqrs"));  //"apbqrs"
console.log(mergeAlternately("abcd",   "pq"));  //"apbqcd"
