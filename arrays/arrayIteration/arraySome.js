var number = [12, 1, 10, 45, 66];
var Some = number.some(myFunction);

console.log("Some over 12 is " + Some);

function myFunction(value, index, array) {
  return value > 12;
}
myFunction();
