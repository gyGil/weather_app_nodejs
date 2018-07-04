var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        },1500);
    });
};

// asyncAdd(5, '7').then((res) => {   // first fire
//     console.log('Result: ', res);
//     return asyncAdd(res, 33);  // second fire
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log('Should be 45', res);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });

asyncAdd(5, '7').then((res) => {   // first fire
    console.log('Result: ', res);
    return asyncAdd(res, 33);  // second fire
}).then((res) => {
    console.log('Should be 45', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     // define what to do main task (only fired once)
//     setTimeout(() => {
//        resolve('Hey. It worked!');
//        //reject('Unable to fulfill promise');
//     }, 2500);    
// });

// // do main task and if it is sucess or fail, it pass over object in above resolve/reject
// somePromise.then((message) => {
//     console.log('Success: ', message)
// }, (errorMessage) => {
//     console.log('Error:', errorMessage);
// });