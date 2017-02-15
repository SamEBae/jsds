function Joe(){
    this.name = "Joe";
}

function Chris(){
    this.name = "Chris";
}

function Cole(){
    this.name = "Cole";
}

function inheritsFrom (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

function RoomFactory () {
    this.createRoommate = function (type) {
        switch (type) {
            case "Joe":
                return new Joe();
                break;
            case "Chris":
                return new Chris();
                break;
            case "Cole":
                return new Cole();
                break;
            default:
                return null;
                break;
        }
    }
}
var room301 = new RoomFactory();
console.log(room301.createRoommate("Joe")); // {name: "Joe"}
console.log(room301.createRoommate("Chris")); // {name: "Chris"}
console.log(room301.createRoommate("Cole")); // {name: "Cole"}