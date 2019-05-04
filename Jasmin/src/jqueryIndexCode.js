$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  $('#power-saving-status').text('on')

  $('#temperature-up').on('click', function() {
    thermostat.up(); //update model
    updateTemperature(); // defined function below that updates view
  })

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#PSM-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    thermostat.isPowerSavingModeOn()
    $('#power-saving-status').text('on')
  })

  $('#PSM-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemp());
    $('#temperature').attr('class', thermostat.energyUsage());

  };
});
