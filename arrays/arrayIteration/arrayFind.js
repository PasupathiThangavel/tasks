var number = [12, 1, 10, 45, 66];
var find = number.find(myFunction);

console.log("First number over 11 is " + find);

function myFunction(value, index, array) {
    return value > 11;
}
myFunction();