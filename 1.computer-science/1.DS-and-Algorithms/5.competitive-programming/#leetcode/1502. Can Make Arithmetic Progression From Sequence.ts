//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
function canMakeArithmeticProgression(arr: number[]): boolean {
    arr=arr.sort((a,b) =>b-a)
    const diff=arr[1] - arr[0]
    for(let i=2;i<arr.length;i++) if(diff!=arr[i]-arr[i-1]) return false
    return true;
};
