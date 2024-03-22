#Find four elements that sum to a given value (4Sum) | Set 1 (n^3 solution)

Given an array of integers, find all combination of four elements in the array whose sum is equal to a given value X.

Example:

```
Input: array = {10, 2, 3, 4, 5, 9, 7, 8}, X = 23
Output: 3 5 7 8
Explanation: Sum of output is equal to 23, i.e. 3 + 5 + 7 + 8 = 23.

Input: array = {1, 2, 3, 4, 5, 9, 7, 8}, X = 16
Output: 1 3 5 7
Explanation: Sum of output is equal to 16, i.e. 1 + 3 + 5 + 7 = 16.
```

## Two pointer technique:

time complexity can be improved to O(n^3) with the use of sorting as a preprocessing step, and then using method 1 of this post to reduce a loop.

#### Step-by-step approach:

- Sort the input array.
- Fix the first element as A[i] where i is from 0 to n–3. After fixing the first element of quadruple, fix the second element as A[j] where j varies
  from i+1 to n-2. Find remaining two elements in O(n) time, using the method 1
  of [this](https://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x)
  post

[Here](Two-pointer.example.ts) is the implementation of the above approach.

#### Complexity Analysis:

- Time Complexity : O(n^3)
- Auxiliary Space: O(1)

### References
1. [Find four elements that sum to a given value (4Sum) | Set 1 (n^3 solution)](https://www.geeksforgeeks.org/find-four-numbers-with-sum-equal-to-given-sum)
