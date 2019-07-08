"use strict";
exports.__esModule = true;
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
