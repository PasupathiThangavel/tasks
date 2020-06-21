var number = [12, 1, 10, 45, 66];
var addition = number.reduce(myFunction);

//var addition = number.reduce(myFunction,100); it is give 100 + total=234

console.log("The addition of array value is " + addition);

function myFunction(total, value, index, array) {
    return total + value;
}
myFunction();