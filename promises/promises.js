var promise = new Promise(function (resolve, reject) {
    const x = 12;
    const y = 12;
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occured');
    }); 