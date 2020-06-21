//Alphabets sorting
var Laptop = ['lenovo', 'dell', 'acer', 'toshiba'];
var sort = Laptop.sort();
console.log(sort);
var reverse = Laptop.reverse();
console.log(reverse);

//Numeric sorting
var number = [10, 1, 12, 23, 49];
var numsort = number.sort(function (a, b) { return (a - b) });
console.log(numsort);
console.log(numsort[0]);//lowest number sort
var numrsort = number.sort(function (a, b) { return (b - a) });
console.log(numrsort);
console.log(numrsort[number.length - 1]);//lowest number reversesort


//sorting array in random order
var number1 = [10, 1, 12, 23, 49];
var ransort = number1.sort(function (a, b) { return 0.5 - Math.random() });
console.log(ransort);

//Object arrays sorting
var person = [
    { name: "pasupathi", age: 25 },
    { name: "dinesh", age: 27 },
    { name: "arun", age: 26 }
];

var objectsort = person.sort(function (a, b) { return a.age - b.age });
console.log(objectsort);
