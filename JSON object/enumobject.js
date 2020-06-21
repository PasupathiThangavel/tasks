var myName = { firstName: "pasupathi", lastname: "thangavel" };
for (var eachItem in myName) {
    console.log(eachItem);
}
function middlename() {
    this.midname = "chinnu";
}
var name = new middlename();
name.firstName = "pasupathi";
name.lname = "thangavel";
for (var eachItem in name) {
    console.log(eachItem);
}