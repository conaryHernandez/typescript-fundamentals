"use strict";
exports.__esModule = true;
var person_model_1 = require("./models/person.model");
/* const bear = new Bear(3);

if(bear instanceof Bear) {
    console.log('it is');
}
*/
// type assetions
var definetlyNotAString = 'I am a string';
// let strLength = (definetlyNotAString as string).length;
var strLength = definetlyNotAString.length;
function totalAge(age1, age2) {
    return age1 + age2;
}
function sayHello(person) {
    return "Say Hello to My Little Friend, " + person.firstName + "!";
}
sayHello(new person_model_1.Person({ firstName: 'Dylan' }));
// use void when you dont want to return something.
function voidExample() {
    totalAge(1, 2);
}
// when ypur throw an error.
function neverExample() {
    throw Error;
}
// interfaces are used when you want to create a type
var example1 = { firstName: 'Dollan', middleName: 'dollan', lastName: 'dollan' };
example1.firstName = 'Dylan';
example1.middleName = 'Coding God';
example1.lastName = 'Israel';
