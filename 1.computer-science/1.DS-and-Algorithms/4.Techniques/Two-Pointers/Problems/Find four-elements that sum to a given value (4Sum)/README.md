# Find a triplet such that sum of two equals to third element

Given an array of integers, you have to find three numbers such that the sum of two elements equals the third element.

Examples :

```
  Input : {5, 32, 1, 7, 10, 50, 19, 21, 2}
  Output : 21, 2, 19

  Input : {5, 32, 1, 7, 10, 50, 19, 21, 0}
  Output : no such triplet exist  
```

## Two pointer technique:

#### Step-by-step approach:

- Sort the given array first.
- Start fixing the greatest element of three from the back and traverse the array to find the other two numbers which sum up to the third element.
- Take two pointers j(from front) and k(initially i-1) to find the smallest of the two number and from i-1 to find the largest of the two remaining
  numbers
- If the addition of both the numbers is still less than A[i], then we need to increase the value of the summation of two numbers, thereby increasing
  the j pointer, so as to increase the value of A[j] + A[k].
- If the addition of both the numbers is more than A[i], then we need to decrease the value of the summation of two numbers, thereby decrease the k
  pointer so as to decrease the overall value of A[j] + A[k].

#### Below image is a dry run of the above approach:

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190620135416/Find-a-triplet-such-that-sum-of-two-equals-to-third-element.png)

[Here](Two-pointer.example.ts) is the implementation of the above approach.

#### Complexity Analysis:
- Time Complexity: O(N^2)
- Auxiliary Space: O(1)
