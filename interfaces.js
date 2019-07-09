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
