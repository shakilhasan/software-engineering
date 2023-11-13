//https://leetcode.com/problems/majority-element/description
function majorityElement(nums: number[]): number {
    let obj: any = {}, i = 0, max = 0, num;
    for (i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) obj[nums[i]] = obj[nums[i]] + 1
        else obj[nums[i]] = 1
    }
    let keys = Object.keys(obj);
    for (i = 0; i < keys.length; i++) {
        if (obj[keys[i]] > max) {
            max = obj[keys[i]]
            num = keys[i];
        }
    }
    return Number(num);
}
