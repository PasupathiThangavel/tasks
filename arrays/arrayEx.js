var Laptop = ['lenovo', 'dell', 'acer', 'toshiba'];
console.log(Laptop);//print Laptop array
var Bike = new Array('apache', 'tvs', 'pulsar', 'honda');
console.log(Bike);//print Bike array
var index = Laptop[0];
console.log(index);//print index variable
Bike[1] = "apache200";
console.log(Bike);//again print bike array after index adding
console.log(Bike.length);//get the array of Bike length
console.log(Laptop[Laptop.length - 1]);//print the last index of Laptop array 
console.log(Bike.join('#'));
console.log(Bike.toString());//print array to string
console.log(Bike.push('tvs50'));//push last element
console.log(Bike.pop());// remove last index
var person = [];
person.name = "pasupathi";
person["age"] = 25;
console.log(person);