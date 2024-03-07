// array.copyWithin(target, start, end)
//The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
{
    //Copy the first two array elements to the last two array elements:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.copyWithin(2, 0);

    //Copy the first two array elements to the third and fourth position:
    const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    fruits1.copyWithin(2, 0, 2);
}