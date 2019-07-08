"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var animal_model_1 = require("./animal.model");
var BearModel = /** @class */ (function (_super) {
    __extends(BearModel, _super);
    function BearModel(data) {
        var _this = _super.call(this, data) || this;
        _this.claws = data.claws;
        _this.name = data.name;
        _this.tail = data.tail;
        return _this;
    }
    BearModel.prototype.add = function (num1, num2) {
        var result = num1 + num2;
        return result;
    };
    BearModel.prototype.addTwo = function (num1, num2) {
        return num1 + num2;
    };
    return BearModel;
}(animal_model_1.Animal));
exports.BearModel = BearModel;
