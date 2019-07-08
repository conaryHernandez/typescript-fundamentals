"use strict";
exports.__esModule = true;
var bear_model_1 = require("./bear.model");
var bear = new bear_model_1.Bear(3);
if (bear instanceof bear_model_1.Bear) {
    console.log('it is');
}
// type assetions
var definetlyNotAString = 'I am a string';
// let strLength = (definetlyNotAString as string).length;
var strLength = definetlyNotAString.length;
