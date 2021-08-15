var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Using Type Parameters in Generic Constraints #
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// Using Class Types in Generics #
function create(c) {
    return new c();
}
// A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
