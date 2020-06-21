var number = [12, 1, 10, 45, 66];
var filter = number.filter(myFunction);

console.log(filter);

function myFunction(value) {
    return value > 2;
}
