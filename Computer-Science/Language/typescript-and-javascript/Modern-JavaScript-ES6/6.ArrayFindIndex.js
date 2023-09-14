//Array.prototype.find
{
    const arr = [1, 2, 3, 4, 5, 6];

    //go through every element of array if get true then stop
    //return index, if not get return -1
    let result = arr.findIndex((currentValue, index, arr) => {
        return currentValue > 4;
    });
    console.log(result)
    console.log(arr);

}
