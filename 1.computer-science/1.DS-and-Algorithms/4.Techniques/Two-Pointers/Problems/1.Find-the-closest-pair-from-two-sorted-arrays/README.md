# Find the closest pair from two sorted arrays

Given two arrays arr1[0…m-1] and arr2[0..n-1], and a number x, the task is to find the pair arr1[i] + arr2[j] such that absolute value of (arr1[i] +
arr2[j] – x) is minimum.

```
    Input: arr1[] = {1, 4, 5, 7};
    arr2[] = {10, 20, 30, 40};
    x = 32
    Output: 1 and 30
    Input: arr1[] = {1, 4, 5, 7};
    arr2[] = {10, 20, 30, 40};
    x = 50
    Output: 7 and 40
```

## Find the closest pair from two sorted arrays using Nested Loop:

A Simple Solution is to run two loops. The outer loop considers every element of first array and inner loop checks for the pair in second array. We
keep track of minimum difference between ar1[i] + ar2[j] and x.

## Find the closest pair from two sorted arrays using Two pointer Technique:

### Below is the idea to solve this problem in O(n) time using following steps.

1) Merge given two arrays into an auxiliary array of size m+n using merge process of merge sort. While merging keep another boolean array of size m+n
   to indicate whether the current element in merged array is from ar1[] or ar2[].
2) Consider the merged array and use the linear time algorithm to find the pair with sum closest to x. One extra thing we need to consider only those
   pairs which have one element from ar1[] and other from ar2[], we use the boolean array for this purpose.

#### Can we do it in a single pass and O(1) extra space?

The idea is to start from left side of one array and right side of another array, and use the algorithm same as step 2 of above approach.

#### Step-by-step approach:

1. Initialize a variable diff as infinite (Diff is used to store the difference between pair and x). We need to find the minimum diff.
2. Initialize two index variables l and r in the given sorted array.
    - (a) Initialize first to the leftmost index in ar1: l = 0
    - (b) Initialize second the rightmost index in ar2: r = n-1
3. Loop while l< length.ar1 and r>=0
    - (a) If abs(ar1[l] + ar2[r] – sum) < diff then update diff and result
    - (b) If (ar1[l] + ar2[r] < sum ) then l++
    - (c) Else r–
4. Print the result.

[Here](./Two-pointer.example.ts) is the implementation of the above approach.

### References

1. [Find the closest pair from two sorted arrays](https://www.geeksforgeeks.org/given-two-sorted-arrays-number-x-find-pair-whose-sum-closest-x)
