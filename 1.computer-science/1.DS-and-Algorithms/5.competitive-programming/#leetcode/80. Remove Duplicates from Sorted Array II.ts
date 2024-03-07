//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description
function removeDuplicates1(nums: number[]): number {
    let i=0,p=0;
    for(i=0;i<nums.length;i++){
        if(nums[i]!==nums[i+2])nums[p++]=nums[i];
    }
    return p;
}
