//https://leetcode.com/problems/longest-palindrome
function longestPalindrome(s: string): number {
    const obj:any={};
    let p=0,halfSum=0;
    for(const char of s){
        if(char in obj) obj[char]++;
        else obj[char]=1;
    }
    for(const key in obj){
        halfSum+=Math.floor(obj[key]/2)
        if(!p) p=obj[key]%2;
    }
    return halfSum*2+p;
}
console.log(longestPalindrome('bb'))
