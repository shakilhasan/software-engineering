//https://leetcode.com/problems/binary-search/
import {binarySearch} from "./helpers/utils";

function search(nums: number[], target: number): number {
    return binarySearch(nums, target)
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
