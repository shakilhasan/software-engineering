//The splice() method can be used to add new items to an array:
//The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //return new spliced array, change main array
    let result = fruits.splice(2, 1, "Lemon", "Kiwi");
    console.log(result);
    console.log(fruits);

}
