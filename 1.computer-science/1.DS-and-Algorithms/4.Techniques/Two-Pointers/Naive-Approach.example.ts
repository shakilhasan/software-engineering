// Naive solution to find if there is a pair in A[0..N-1] with given sum X.
function isPairSum1(A: number[], N: number, X: number) {
    for (let i = 0; i < N - 1; i++)
        for (let j = i + 1; j < N; j++) {
            if (i == j) continue; // as equal i and j means same element
            if (A[i] + A[j] == X) return 1;  // pair exists
            if (A[i] + A[j] > X) break; // as the array is sorted
        }
    return 0; // No pair found with given sum.
}

console.log(isPairSum1([2, 3, 5, 8, 9, 10, 11], 7, 17));
