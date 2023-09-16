//Array.prototype.find
{
    const arr = [1, 2, 3, 4, 5, 6];
    //go through every element of array if get true then stop
    //return value
    let result = arr.find(function (currentValue, index, arr) {
        return currentValue > 4;
    }, this);
    console.log(result)
    console.log(arr);

}
//why pass 'this' ?
{
    console.log('why pass this ? -----------')

    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        test() {
            console.log("hello")
        }

        exampleFunction() {
            let arr = [1, 2, 3, 4, 5];
            arr.find(function () {
                this.test();
            }, this) //if not pass this, then got error
        }

        exampleFunction1() {
            let arr = [1, 2, 3, 4, 5];
            arr.find(() => {
                this.test();
            }) //no need to pass this in arrow function
        }
    }

    let student = new Student('sakib', 35);
    student.exampleFunction();
    student.exampleFunction1();

}