var promise = new Promise(function (resolve, reject) {
    throw new Error(' error has occured');
})
promise
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    }); 