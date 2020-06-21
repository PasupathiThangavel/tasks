var txt = " ";
var number = [12, 1, 10, 45, 66];
number.forEach(myFunction);
console.log(txt);

function myFunction(value, index, array) {
  txt = txt + value;
}
myFunction();