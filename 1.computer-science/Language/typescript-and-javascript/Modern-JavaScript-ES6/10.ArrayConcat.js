// array1.concat(array2, array3, ..., arrayX)
{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin"];
    //return new concated array, does not change the existing arrays.
    let result = arr1.concat(arr2, arr3);
    console.log(result);
    console.log(arr1);

}
