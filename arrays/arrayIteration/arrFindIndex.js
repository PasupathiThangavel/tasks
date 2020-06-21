var number = [12, 1, 10, 45, 66];
var index = number.findIndex(myFunction);

console.log("First number over 12 has index " + index);

function myFunction(value, index, array) {
    return value > 12;
}
myFunction();
