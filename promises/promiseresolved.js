var promise = new Promise(function (resolve, reject) {
    resolve('resolved');
    //reject('rejected');
})

promise.then(function (success) {
    console.log(success);
}, function (failure) {
    console.log(failure);
})