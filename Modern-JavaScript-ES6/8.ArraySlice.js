//The slice() method slices out a piece of an array.
{
    const arr = [1, 2, 3, 4, 5, 6];

    //return new sliced array, not change main array
    let result = arr.slice(1, 3); //slice form right to left
    console.log(result);
    console.log(arr);

}
