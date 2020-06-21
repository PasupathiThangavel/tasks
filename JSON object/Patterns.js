var newBike = {
    color: "yellow",
    weight: 160,
    speed: 120,
    ShowRoom: ["chennai", "Salem"],

    colorName: function () {
        console.log("This is " + this.color);
    },
    showRoom: function () {
        this.ShowRoom.forEach(function (eachPlace) {
            console.log("Place in:" + eachPlace);
        });
    }
}
console.log(newBike.showRoom());
console.log(newBike.colorName());