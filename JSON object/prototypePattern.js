function Bike() {

}
Bike.prototype.color = "Yellow";
Bike.prototype.weight = 165;
Bike.prototype.speed = 120;
Bike.prototype.Showroom = "Chennai";
Bike.prototype.colorname = function () {
    console.log("This is a " + this.color);
}
Bike.prototype.Showroomplace = function () {
    console.log("Place in:" + this.Showroom);
}
var apacheBike = new Bike("Yellow", 164, 120, ["Salem", "Chennai", "Madurai"]);
apacheBike.colorname();
apacheBike.Showroomplace();