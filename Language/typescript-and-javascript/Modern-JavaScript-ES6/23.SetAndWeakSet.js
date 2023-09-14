//Sets, a collection of unique values, can hold any value of any data type, no order.
{
    let mySet = new Set(); // set can Create  by constructor(new) syntax, not by lateral syntax
    // mySet[0]=3 //Set can't add like array
    mySet.add(5) //to add values
    mySet.add(3).add(7).add(8).add({one: 1, two: 2}) //add() method return a new set, so repeatedly use by dot
    console.log(mySet)
}
//convert to set,
{
    //only iterable can convert to set, so object can't,
    console.log('--------------')
    let myArray = [1, 2, 3, 4, 5, 6]
    let mySet = new Set(myArray);
    let mySet1 = new Set('Bangladesh');
    console.log(mySet, mySet1);

    console.log([...mySet]) //set to array
    console.log(Array.from(mySet)) //set to array
}

//use case
{
    console.log('--------------')
    //to get unique element from array
    {
        let myArray = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6]
        console.log([...new Set(myArray)]) // array to set to array
    }
    //math SET operations using set
    {
        let a = new Set([1, 2, 3, 4]);
        let b = new Set([3, 4, 5, 6, 7])

        //union
        let union = new Set([...a, ...b]);

        //intersection
        let intersection = new Set([...a].filter(x => b.has(x)));

        //difference
        let difference = new Set([...a].filter(x => !b.has(x)));
    }

}

//WeakSet, similar but some difference from Set
{
    // WeakSet can only add object, collections of objects only
    console.log('WeakSet ----------------------')
    let ws = new WeakSet([{one: 1, two: 2}]);
    ws.add({a: 10, b: 20}) //can only add object
    console.log(ws)
}