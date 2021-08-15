// import { Bear } from './models/bear.model';
import { Age } from './enums/age.enum';
import { Names } from './enums/name.enum';
import { Person } from './models/person.model';
import { Animal } from './models/animal.model';
import { BearModel } from './models/bear.model';
// be careful with circular references
import { Bear, Man, Pig, iPerson } from './interfaces/index';

/* const bear = new Bear(3);

if(bear instanceof Bear) {
	console.log('it is');
}
*/

// type assetions
let definetlyNotAString: any = 'I am a string';

// let strLength = (definetlyNotAString as string).length;
let strLength = (<string>definetlyNotAString).length;

function totalAge(age1: Age, age2: Age): number {
  return age1 + age2;
}

function sayHello(person: Person): string {
  return `Say Hello to My Little Friend, ${person.firstName}!`;
}

sayHello(new Person({firstName: 'Dylan'}));

// use void when you dont want to return something.
function voidExample(): void {
  totalAge(1,2);
}

// when ypur throw an error.
function neverExample(): never {
	throw Error;
}


// interfaces are used when you want to create a type
const example1: Person = new Person({firstName: 'Dollan', middleName: 'dollan', lastName: 'dollan'});

example1.firstName = 'Dylan';
example1.middleName = 'Coding God';
example1.lastName = 'Israel';

// barrels

// models

// intersection types are the hability to add multiple types to single entity
let man: Man | Pig;
let bear: Bear;
let pig: Pig;

type ManBearPig = Bear & Man & Pig

let manBearPig: ManBearPig ;
manBearPig.firstName = 'Dylan';
manBearPig.claws = 3;
manBearPig.bacon = false;

// generics gives us away when we dont have predefine a data type and we still able to manipulate it

function example<T>(arg: T[]): T {
  return arg[0];
}

example([5]);


// modfiers: private, protected, public and readonly
const bear2 = new BearModel({name: 'Omega', tail: true});
bear2.claws = 3;
bear2.add(1, 2);

// ts local setup

// tslint


