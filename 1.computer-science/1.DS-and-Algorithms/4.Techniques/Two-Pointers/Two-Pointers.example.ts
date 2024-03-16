function isPairSum(A: number[], N: number, X: number) {
    let i = 0; // represents first pointer
    let j = N - 1;  // represents second pointer
    while (i < j) {
        if (A[i] + A[j] === X) return true; // If we find a pair
        else if (A[i] + A[j] < X) i++; // If sum of elements at current pointers is less, we move towards higher values by doing i++
        else j--; // If sum of elements at current pointers is more, we move towards lower values by doing j--
    }
    return false;
}

const arr = [2, 3, 5, 8, 9, 10, 11];
arr.sort((a, b) => a - b); // array should be sorted before using the two-pointer technique
console.log(isPairSum(arr, arr.length, 17));
