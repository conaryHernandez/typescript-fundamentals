function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum('FIZZ', 'fuzzy'));
function arrayFunction(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function identity(arg) {
    return arg;
}
// Assigment
var myIdentity = identity;
var myIdentity2 = identity;
console.log(identity(myIdentity('wat')));
console.log(identity(myIdentity(1)));
// generic classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 5;
myGenericNumber.add = function (x, y) { return x + y; };
console.log('class generic method', myGenericNumber.add(1, 2));
function loggingConstraint(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
console.log('testing contraint', loggingConstraint({ length: 10, value: 3 }));
