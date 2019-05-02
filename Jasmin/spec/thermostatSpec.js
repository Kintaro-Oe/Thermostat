describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('Has a minimum temp of 10', function() {
    expect(thermostat.minTemp).toEqual(10)
  });

  describe('up', function() {
    it('increases temp by 1 degree', function(){
      thermostat.up()
      expect(thermostat.temp).toEqual(21);
    });

  describe('down', function() {
    it('decreases temp by 1 degree', function() {
      thermostat.down()
      expect(thermostat.temp).toEqual(19);
    });

    it('throws error when trying to go lower than minTemp', function() {
      for(i = 0; i < 10; i++) {
      thermostat.down();
      }
      expect(thermostat.down).toThrowError("Cannot go lower than minimum temperature");
    });

  });



  });
});
