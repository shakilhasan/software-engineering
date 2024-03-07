//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description
function removeDuplicates(nums: number[]): number {
    let i=0,p=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!==nums[i+1])nums[p++]=nums[i];
    }
    return p;
}
