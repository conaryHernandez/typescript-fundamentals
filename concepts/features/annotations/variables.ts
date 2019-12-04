/** Primitives */
// :number = type annotation
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


/**  Object type */

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumvers: number[] = [1,2,3];
let thruths: boolean[] = [true, false, true];

class Car {

}

let car: Car = new Car();

/* Object literal */

let points: { x: number; y: number; } = {
	x: 10,
	y: 20
};


/* Functions */

const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};


/* When to use annotations */

// 1) Function that return the 'any' type, no clue of value

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number;} = JSON.parse(json);

console.log(coordinates);

// 2) WHen we declae a variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// 3) Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}
