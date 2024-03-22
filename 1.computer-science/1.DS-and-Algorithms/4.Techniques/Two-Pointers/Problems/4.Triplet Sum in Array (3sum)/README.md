# Triplet Sum in Array (3sum)

Given an array arr[] of size n and an integer X. Find if there’s a triplet in the array which sums up to the given integer X.
Examples :

```
Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
Output: 12, 3, 9 
Explanation: There is a triplet (12, 3 and 9) present 
in the array whose sum is 24. 

Input: array = {1, 2, 3, 4, 5}, sum = 9 
Output: 5, 3, 1 
Explanation: There is a triplet (5, 3 and 1) present 
in the array whose sum is 9.  
```

## Triplet Sum in Array (3sum) using Two pointer technique:

By Sorting the array the efficiency of the algorithm can be improved. This efficient approach uses the two-pointer technique. Traverse the array and
fix the first element of the triplet. Now use the Two Pointers algorithm to find if there is a pair whose sum is equal to x – array[i]. Two pointers
algorithm take linear time so it is better than a nested loop.

#### Step-by-step approach:

- Sort the given array.
- Loop over the array and fix the first element of the possible triplet, arr[i].
- Then fix two pointers, one at i + 1 and the other at n – 1. And look at the sum,
    - If the sum is smaller than the required sum, increment the first pointer.
    - Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
    - Else, if the sum of elements at two-pointer is equal to given sum then print the triplet and break.

[Here](Two-pointer.example.ts) is the implementation of the above approach.

#### Complexity Analysis:

- Time complexity: O(N^2), There are only two nested loops traversing the array, so time complexity is O(n^2). Two pointers algorithm takes O(n) time
  and the first element can be fixed using another nested traversal.
- Auxiliary Space: O(1), As no extra space is required.

### References

1. [Triplet Sum in Array (3sum)](https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/)
