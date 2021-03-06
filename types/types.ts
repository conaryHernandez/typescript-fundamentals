console.log('hello from ts');

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;
let alternative: boolean | number = 35;

// Arrays
let strArr: string[]; // array of strings
let numArr: number[]; // array of numbers
let boolArr: boolean[]; // array of numbers

let strArr2: Array<string>;
let numArr2: Array<number>;
let boolArr2: Array<boolean>;

const example1: string[] = ['Hello World'];

const example2: (number | boolean)[] = [1, 2, true];

const example3: boolean[][] = [ [true, false] ] ;

// tuple
let strNumTuple: [string, number];

// void
let myVoid: void = undefined;

// Assigment
myString = 'learning typescript';
myNum = 23;
myBool = true;
myVar = 'error?';

strArr = ['test', 'array'];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strArr2 = ['test', 'array'];
numArr2 = [1, 2, 3];
boolArr2 = [true, false, true];

strNumTuple = ['hello', 4]; // no problem here


console.log(myString, 23, myBool, myVar);
console.log(strArr, strArr2);
console.log(numArr, numArr2);
console.log(boolArr, boolArr2);
console.log(strNumTuple);
console.log(myVoid);


// custom types
type person = {firstName: string};

const customType: person = {firstName: 'Dollan'};

customType.firstName = 'Dylan';