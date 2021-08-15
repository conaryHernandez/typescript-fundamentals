"use strict";
exports.__esModule = true;
var person_model_1 = require("./models/person.model");
var bear_model_1 = require("./models/bear.model");
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
var example1 = new person_model_1.Person({ firstName: 'Dollan', middleName: 'dollan', lastName: 'dollan' });
example1.firstName = 'Dylan';
example1.middleName = 'Coding God';
example1.lastName = 'Israel';
// barrels
// models
// intersection types are the hability to add multiple types to single entity
var man;
var bear;
var pig;
var manBearPig;
manBearPig.firstName = 'Dylan';
manBearPig.claws = 3;
manBearPig.bacon = false;
// generics gives us away when we dont have predefine a data type and we still able to manipulate it
function example(arg) {
    return arg[0];
}
example([5]);
// modfiers: private, protected, public and readonly
var bear2 = new bear_model_1.BearModel({ name: 'Omega', tail: true });
bear2.claws = 3;
bear2.add(1, 2);
// ts local setup
// tslint
