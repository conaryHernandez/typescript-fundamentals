"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(data) {
        this.firstName = data.firstName || 'Dylan';
        this.lastName = data.lastName || 'Israel';
        this.middleName = data.middleName;
    }
    return Person;
}());
exports.Person = Person;
