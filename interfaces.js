function showNumber(arg) {
    return arg.value;
}
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var mixedValue = {
    value: 2
};
console.log(showNumber(mixedValue));
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
console.log('testing read only properties', p1);
// readonly array
var a = [1, 2, 3, 4];
var squareOptions = { colour: "red", width: 100 };
var mySquare2 = createSquare(squareOptions);
console.log('testing checl property', mySquare2);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log('testing function types', mySearch('hola', 'ol'));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
function createClock(ctor, hour, minute) {
    console.log('ctor', ctor);
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
console.log('digital', digital);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
