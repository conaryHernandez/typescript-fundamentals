// import { Bear } from './models/bear.model';
import { Age } from './enums/age.enum';
import { Names } from './enums/name.enum';
import { Person } from './models/person.model';
import { iPerson } from './interfaces/person.interface';

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
const example1: Person = {firstName: 'Dollan', middleName: 'dollan', lastName: 'dollan'};

example1.firstName = 'Dylan';
example1.middleName = 'Coding God';
example1.lastName = 'Israel';
