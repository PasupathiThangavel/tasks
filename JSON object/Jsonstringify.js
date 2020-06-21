var myName = { firstName: "pasupathi", lastname: "thangavel" }
JSON.stringify(myName);
JSON.stringify(myName, null, 3);
var myNameStr = '{"firstName": "pasupathi", "lastname": "thangavel"}';
var myNameObj = JSON.parse(myNameStr);
console.log(myNameObj.firstName); 