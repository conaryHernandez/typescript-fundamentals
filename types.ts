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
