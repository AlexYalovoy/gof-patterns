var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Factory_Method;
(function (Factory_Method) {
    var Creator = /** @class */ (function () {
        function Creator() {
        }
        Creator.prototype.handleTransport = function () {
            var transport = this.createTransport();
            transport.carry();
        };
        return Creator;
    }());
    var CarCreator = /** @class */ (function (_super) {
        __extends(CarCreator, _super);
        function CarCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CarCreator.prototype.createTransport = function () {
            return new Car();
        };
        return CarCreator;
    }(Creator));
    Factory_Method.CarCreator = CarCreator;
    var ShipCreator = /** @class */ (function (_super) {
        __extends(ShipCreator, _super);
        function ShipCreator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShipCreator.prototype.createTransport = function () {
            return new Ship();
        };
        return ShipCreator;
    }(Creator));
    Factory_Method.ShipCreator = ShipCreator;
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.carry = function (laggage) {
            console.log("\u041F\u0435\u0440\u0435\u0432\u043E\u0436\u0443 \u0433\u0440\u0443\u0437 " + (laggage !== null && laggage !== void 0 ? laggage : '') + " \u043F\u043E \u0441\u0443\u0448\u0435");
        };
        ;
        return Car;
    }());
    var Ship = /** @class */ (function () {
        function Ship() {
        }
        Ship.prototype.carry = function (laggage) {
            console.log("\u041F\u0435\u0440\u0435\u0432\u043E\u0436\u0443 \u0433\u0440\u0443\u0437 " + (laggage !== null && laggage !== void 0 ? laggage : '') + " \u043F\u043E \u043C\u043E\u0440\u044E");
        };
        ;
        return Ship;
    }());
})(Factory_Method || (Factory_Method = {}));
var ClientCode;
(function (ClientCode) {
    var creator = new Factory_Method.CarCreator();
    creator.handleTransport();
})(ClientCode || (ClientCode = {}));
