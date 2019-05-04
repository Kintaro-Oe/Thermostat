"use strict";

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this._powerSavingMode = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
};

Thermostat.prototype.getCurrentTemp = function () {
  return this._temperature
};

Thermostat.prototype.getDefaultTemp = function () {
  return this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.getMinimumTemp = function () {
  return this.MINIMUM_TEMPERATURE
};

Thermostat.prototype.up = function () {
  if (this.isMaximumTemperature()) {
    return;
  };
  this._temperature += 1
};

Thermostat.prototype.down = function () {
  if (this._temperature === this.MINIMUM_TEMPERATURE) {
    return;
  };
    this._temperature -= 1
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this._powerSavingMode === true
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this._powerSavingMode = false
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this._powerSavingMode = true
};

Thermostat.prototype.isMaximumTemperature = function () {
  if(this.isPowerSavingModeOn() === true) {
    return this._temperature >= this.MAX_TEMP_PSM_ON;
  };
  return this._temperature === this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.reset = function () {
  this._temperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.energyUsage = function () {
  if(this._temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage'
  };
  if(this._temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._temperature < this.MAX_TEMP_PSM_ON) {
    return 'medium-usage'
  };
  return 'high-usage'
};
