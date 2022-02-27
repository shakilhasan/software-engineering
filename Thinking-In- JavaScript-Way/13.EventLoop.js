{ // images/ EventLoop.png
    // process heavy sync task
    function process(num) {
        console.log(num);
    }

    [1, 2, 3, 4, 5].forEach((i) => {
        process(i);
    });

}

{ // images/ EventLoop-1.png
    const second = () => console.log("second")
    const third = () => console.log("third")
    const first = () => {
        console.log("first");
        setTimeout(second, 0);
        new Promise((resolve, reject) =>
            resolve("I am right after third, before second")
        ).then((resolve) => console.log(resolve));

        third();
    }

    first();
}

// images/ EventLoop-2.png