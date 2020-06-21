var number = [12, 1, 10, 45, 66];
var check = number.every(myFunction);

console.log("All over 12 is " + check);

function myFunction(value) {
    return value > 12;
}
myFunction();