// "use strict";

function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
};

Thermostat.prototype.up = function () {
  this.temp += 1
};

Thermostat.prototype.down = function () {
  if (this.temp === this.minTemp) {
    throw new TypeError("Cannot go lower than minimum temperature");
  };
    this.temp -= 1
};

// console.log(new Thermostat())
