function Bike(theColor, theWeight, theSpeed, theShowRoom) {
    this.color = theColor;
    this.Weight = theWeight;
    this.speed = theSpeed;
    this.ShowRoom = theShowRoom;
    this.colorname = function () {
        console.log("This is a " + this.color);
    }

    this.ShowRoomplace = function () {
        this.ShowRoom.forEach(function (eachPlace) {
            console.log("Place in:" + eachPlace);
        });
    }
}
var apacheBike = new Bike("Yellow", 164, 120, ["Salem", "Chennai", "Madurai"]);
apacheBike.colorname();
apacheBike.ShowRoomplace();

var Pulsar = new Bike("black", 155, 110, ["Salem", "Chennai", "Erode"]);
Pulsar.colorname();
Pulsar.ShowRoomplace();
