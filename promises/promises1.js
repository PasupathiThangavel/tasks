var promise = new Promise(function (resolve, reject) {
    const x = "pasupathi";
    const y = "pasupathiq";
    if (x === y) {
        resolve();
    }
    else {
        reject();
    }
});

promise.
    then(function () {
        console.log("two constants are match");

    }).
    catch(function () {
        console.log('not match');
    });