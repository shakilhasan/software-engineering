//https://leetcode.com/problems/sign-of-the-product-of-an-array
function arraySign(nums: number[]): number {
    let p=1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] ==0)return 0;
        else if(nums[i]<0) p=p*(-1)
    }
    return p;
};
