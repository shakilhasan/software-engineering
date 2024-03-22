# Find all triplets with zero-sum

Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.

Examples :

```
    Input: arr[] = {0, -1, 2, -3, 1}
    Output: (0 -1 1), (2 -3 1)
    Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

    Input: arr[] = {1, -2, 1, 0, 5}
    Output: 1 -2  1
    Explanation: The triplets with zero sum is 1 + -2 + 1 = 0   
```

## Find all triplets with zero-sum using Two-Pointer:

#### Follow the steps below to implement the idea:

- Sort the array in ascending order.
- Traverse the array from start to end.
- For every index i, create two variables l = i + 1 and r = n – 1
- Run a loop until l is less than r if the sum of array[i], array[l] and array[r] is equal to zero then print the triplet and break the loop
- If the sum is less than zero then increment the value of l, by increasing the value of l the sum will increase as the array is sorted, so
  array[l+1] > array [l]
- If the sum is greater than zero then decrement the value of r, by decreasing the value of r the sum will decrease as the array is sorted, so
  array[r-1] < array [r].

[Here](Two-pointer.example.ts) is the implementation of the above approach.

### References

1. [Find all triplets with zero sum](https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero)
