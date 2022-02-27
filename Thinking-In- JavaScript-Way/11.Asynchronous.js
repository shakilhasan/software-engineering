// Asynchronous JavaScript - callbacks, promises and async-await

//synchronous example------------------
{
    // use Call Stack environment
    console.log("synchronous example------------------")
    const processOrder = (customer) => {
        console.log(`2.processing order for customer 1`);
        let currentTime = new Date().getTime();
        while (currentTime + 3000 >= new Date().getTime()) {
        }
        console.log(`3.order processed for customer 1`);
    };

    console.log(`1.take order for customer 1`);
    processOrder();
    console.log(`4.completed order for customer 1`);
}


//Asynchronous example------------------
{
    //images/Asynchronous.png
    //use Call Stack, Web Api, callback queue, Event Loop environment
    console.log("Asynchronous example------------------")
    const processOrder = (customer) => {
        console.log(`2.processing order for customer 1`);
        setTimeout(() => {   //build-in asynchronous function
            console.log(`3.cooking completed`);
        }, 3000)
        console.log(`4.order processed for customer 1`);
    };

    console.log(`1.take order for customer 1`);
    processOrder();
    console.log(`5.completed order for customer 1`);
}

//Asynchronous control by callback---------------
{
    console.log("Asynchronous control by callback------------------")
    const takeOrder = (customer, callback) => {
        console.log(`a.take order for ${customer}`)
        callback(customer)
    };

    const processOrder = (customer, callback) => {
        console.log(`b.processing order for ${customer}`);
        setTimeout(() => {
            console.log(`c.cooking completed`)
            console.log(`d.order processed for ${customer}`);
            callback(customer);
        }, 3000);
    };

    const completedOrder = (customer) => {
        console.log(`e.completed order for ${customer}`);
    };

    takeOrder('customer1', (customer) => {
        processOrder(customer, (customer) => {
            completedOrder(customer);                       //callback hell
        })
    });

    console.log(`f.Hello`);
}


//Asynchronous control by Promise---------------
//ex-1
{
    console.log("Asynchronous control by Promise------------------")
    const hasMeeting = false;

    const meeting = new Promise((resolve, reject) => {
        if (!hasMeeting) {
            const meetingDetails = {
                name: 'Technical Meeting',
                location: 'Google Meet',
                time: '10:00 PM'
            };
            resolve(meetingDetails);
        } else {
            reject(new Error('meeting already scheduled!'));
        }
    });

    const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    }

    meeting.then(addToCalendar).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.message);
    })

}

//ex-2
{
    console.log("ex-2 -------------")
    const promise1 = Promise.resolve(`Promise 1 resolved`);
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 2 resolved`);
        }, 2000);
    });

    promise1.then((res) => console.log(res));
    promise2.then((res) => console.log(res));

    Promise.all([promise1, promise2]).then((res) => {   //return result as Array
        console.log(res);
    });
}

//ex-3
{
    console.log("ex-3 -------------")

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 1 resolved`);
        }, 5000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 2 resolved`);
        }, 2000);
    });

    Promise.race([promise1, promise2]).then((res) => {  //return 1st resolved  result
        console.log(res);
    });
}


//Asynchronous control by async-await---------------
{
    console.log("Asynchronous control by async-await------------------")
    const hasMeeting = false;

    const meeting = new Promise((resolve, reject) => {
        if (!hasMeeting) {
            const meetingDetails = {
                name: 'Technical Meeting',
                location: 'Google Meet',
                time: '10:00 PM'
            };
            resolve(meetingDetails);
        } else {
            reject(new Error('meeting already scheduled!'));
        }
    });

    const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
    }

    async function MyMeeting() {
        try {
            const meetingDetails = await meeting;
            const calendar = await addToCalendar(meetingDetails);
            console.log(calendar)
        } catch {
            console.log("Something went wrong")
        }
    }

    MyMeeting();
}