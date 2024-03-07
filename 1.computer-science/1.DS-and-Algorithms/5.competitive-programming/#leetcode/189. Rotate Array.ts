//https://leetcode.com/problems/rotate-array/description

function rotate(nums: number[], k: number): void {
    const reverseArray = (i: number, j: number): any => {
        while (i < j + 1) {
            const temp = nums[i];
            nums[i++] = nums[j];
            nums[j--] = temp;
        }
    };
    k = k % nums.length;
    reverseArray(0, nums.length - 1);
    reverseArray(0, k - 1);
    reverseArray(k, nums.length - 1);
    // console.log(nums);
}

// rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1], 2);
