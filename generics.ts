function sum<T extends string>(num1:T ,num2:T): string {
	return num1 + num2;
}

console.log(sum('FIZZ', 'fuzzy'));

function arrayFunction<T>(arg: T[]): T[] {
	console.log(arg.length);

	return arg;
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}

// generic interface
interface GenericIdentityFn {
  <T>(arg: T): T;
}

// parameter of the whole interface.
interface GenericIdentityAll<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
   return arg;
}

// Assigment
let myIdentity: GenericIdentityFn = identity;
let myIdentity2: GenericIdentityAll<number> = identity;

console.log(identity(myIdentity('wat')));
console.log(identity(myIdentity(1)));


// generic classes
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T; // generic function :o !!!!
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 5;
myGenericNumber.add = function(x, y) { return x + y; };

console.log('class generic method', myGenericNumber.add(1, 2));

// generic constraits
interface Lengthwise {
    length: number;
}

function loggingConstraint<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

console.log('testing contraint', loggingConstraint({length: 10, value: 3}));

// Using Type Parameters in Generic Constraints #
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// Using Class Types in Generics #
function create<T>(c: {new(): T; }): T {
    return new c();
}

// A more advanced example uses the prototype property to infer and constrain relationships between the constructor function and the instance side of class types.

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!


