function decimalToBinary(decimalNumber: number): number {
    return Number((decimalNumber >>> 0).toString(2));
}

function binarySearch(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) left = mid + 1
        else if (target < nums[mid]) right = mid - 1;
        else return mid;
    }
    return -1
}
export {
    decimalToBinary,
    binarySearch
}
