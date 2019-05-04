describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('states/properties', function() {
    it('Starts - at 20 degrees', function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it('Starts - with powerSavingMode on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toEqual(true)
    });

    it('Starts - with a minimum temperature of 10 degrees', function() {
      expect(thermostat.getMinimumTemp()).toEqual(10)
    });
  });

  describe('up', function() {
    it('increases temp by 1 degree', function(){
      thermostat.up()
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });

    it("When PSM off - can't go higher than MAX_TEMP_PSM_OFF", function() {
      thermostat.switchPowerSavingModeOff();
      for(i = 0; i < 13; i++) {
      thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(32)
    });

    it("When PSM on - can't go higher than MAX_TEMP_PSM_ON", function() {
      thermostat.switchPowerSavingModeOn();
      for(i = 0; i < 6; i++) {
      thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25)
    });
  });

  describe('down', function() {
    it('decreases temp by 1 degree', function() {
      thermostat.down()
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });

    it("can't go lower than MINIMUM_TEMPERATURE", function() {
      for(i = 0; i < 11; i++) {
      thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });
  });

  describe('powerSavingMode', function() {
    it('can be switched off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('can be switched on', function() {
      thermostat.switchPowerSavingModeOff();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('reset', function() {
    it('sets temperature back to 20', function() {
      thermostat.up()
      thermostat.reset()
      expect(thermostat.getCurrentTemp()).toEqual(20)
    });
  });

  describe('energyUsage', function() {
    it('return "low-usage" when temperature is < 18', function() {
      for(i = 0; i < 3; i++) {
        thermostat.down()
      }
      expect(thermostat.energyUsage()).toEqual("low-usage")
    });

    it('return "medium-usage" when temperature is 18+ but < 25', function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage")
    });

    it('return "high-usage" when temperature is => 25', function() {
      thermostat.switchPowerSavingModeOff()
      for(i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.energyUsage()).toEqual("high-usage")
    });
  });

  describe('edge case', function() {
    it('PSM off temperature above 25. PSM back on, cannot rise any higher', function() {
      thermostat.switchPowerSavingModeOff();
      for(i = 0; i < 13; i++) {
      thermostat.up();
      }
      thermostat.switchPowerSavingModeOn();
      thermostat.up()
      expect(thermostat.getCurrentTemp()).toBeLessThan(33)
    });
  });

});
