//https://leetcode.com/problems/move-zeroes
function moveZeroes(nums: number[]): void {
    let t=0,len=nums.length;
    for (let i = 0; i < len; i++) if(nums[i]!==0) nums[t]=nums[i],t++;
    for(let i=len-1; i>=t; i--) nums[i]=0
}
moveZeroes([0,1,0,3,12])
