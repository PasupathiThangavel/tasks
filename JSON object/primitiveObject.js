var fname = { name: "pasupathi" };
var lname = fname;
fname.name = "thangavel";
console.log(lname.name);//thangavel
console.log(fname.name); //thangavel