var number = [12, 1, 10, 45, 66];
var maping = number.map(myFunction);

console.log(maping);

function myFunction(value) {
    return value * 2;
}
myFunction();
