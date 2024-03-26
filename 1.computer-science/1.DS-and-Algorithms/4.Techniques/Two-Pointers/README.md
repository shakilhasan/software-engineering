# Two Pointers

The Two Pointers technique is a clever strategy used in algorithm design, particularly when dealing with arrays or linked lists. Imagine you have two
fingers, and you place each at different ends or positions of an array. These ‘fingers’ or pointers then traverse through the array, helping you to
compare, search, or even manipulate the data efficiently.

![](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn00zc8hdrzchlnllby5a.png)

Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array.
Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is
equal to X.

## Illustration :

```markdown
A[] = {10, 20, 35, 50, 75, 80}
X = =70
i = 0
j = 5

A[i] + A[j] = 10 + 80 = 90
Since A[i] + A[j] > X, j--
i = 0
j = 4

A[i] + A[j] = 10 + 75 = 85
Since A[i] + A[j] > X, j--
i = 0
j = 3

A[i] + A[j] = 10 + 50 = 60
Since A[i] + A[j] < X, i++
i = 1
j = 3
m
A[i] + A[j] = 20 + 50 = 70
Thus this signifies that Pair is Found
```

Let us do discuss the working of two pointer algorithm in brief which is as follows. The algorithm basically uses the fact that the input array is
sorted. We start the sum of extreme values (smallest and largest) and conditionally move both pointers. We move left pointer ‘i’ when the sum of A[i]
and A[j] is less than X. We do not miss any pair because the sum is already smaller than X. Same logic applies for right pointer j.

### Methods:

Here we will be proposing a two-pointer algorithm by starting off with the naïve approach only in order to showcase the execution of operations going
on in both methods and secondary to justify how two-pointer algorithm optimizes code via time complexities across all dynamic programming languages
such as C++, Java, Python, and even JavaScript

1. Naïve Approach using loops
2. Optimal approach using two pointer algorithm

#### Method 1: Naïve Approach:

[Here](Naive-Approach.example.ts) is the implementation:
<br>Time Complexity:  O(n2).
<br>Auxiliary Space: O(1)

<br>

#### Method 2: Two Pointers Technique

Now let’s see how the two-pointer technique works. We take two pointers, one representing the first element and other representing the last element of
the array, and then we add the values kept at both the pointers. If their sum is smaller than X then we shift the left pointer to right or if their
sum is greater than X then we shift the right pointer to left, in order to get closer to the sum. We keep moving the pointers until we get the sum as
X.

[Here]() is the implementation:
<br>Time Complexity:  O(n log n) (As sort function is used)
<br>Auxiliary Space: O(1), since no extra space has been taken.


## Usage

* Ordered Data Structures: This pattern shines when applied to ordered arrays or lists, allowing for intelligent, position-based decisions that can
  significantly optimize the algorithm.
* Efficiency: By reducing the need for nested loops, the Two Pointers technique helps in achieving linear time complexity, making your algorithm
  faster and more efficient.

## Pros and Cons

### Pros:

* Efficiency: Achieves O(n) time complexity for problems that might otherwise require O(n^2).
* Simplicity: Once mastered, it provides a straightforward and elegant solution.

### Cons:

* Applicability: Mainly beneficial for problems involving sequences or intervals.
* Initial Complexity: It might take some time to get the hang of this pattern and understand where and how to move the pointers.

### More problems based on two pointer technique [here](./Problems).

## References:
1. [Two Pointers Technique](https://www.geeksforgeeks.org/two-pointers-technique)
2. [Solved-all-two-pointers-problems-in-100-days](https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days)
3. [20 Essential Coding Patterns to Ace Your Next Coding Interview ](https://dev.to/arslan_ah/20-essential-coding-patterns-to-ace-your-next-coding-interview-32a3)
