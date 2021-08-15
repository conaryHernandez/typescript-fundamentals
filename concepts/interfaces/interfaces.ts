interface mixedNumber {
	value: number;
}

interface LabeledValue {
  label: string;
}

function showNumber(arg: mixedNumber) {
	return arg.value;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

let mixedValue = {
	value: 2
}

console.log(showNumber(mixedValue));

// optional properties

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

// Readonly properties

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
	// p1.x = 5; // error!

console.log('testing read only properties', p1);

// readonly array
let a: number[] = [1, 2, 3, 4];
	/* let ro: ReadonlyArray<number> = a;
	ro[0] = 12; // error!
	ro.push(5); // error!
	ro.length = 100; // error!
	a = ro; // error!
	*/

// Excess Property Checks Best fix

interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);

console.log('testing checl property', mySquare2);

// Function types

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log('testing function types', mySearch('hola', 'ol'));

// Indexable Types

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// Implementing an interface #


interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick(): void; //  methods in an interface that are implemented in the class
	method?(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  console.log('ctor', ctor);

  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

console.log('digital', digital);

// Extending Interfaces #

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
  name: string;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

