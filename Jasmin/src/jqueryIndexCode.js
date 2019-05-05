$(document).ready(function() {

  $('#select-city').change(function() {
    var city = $('#select-city').val();
    if(city === "") { return; };
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?id=';
    var key = '&appid=7f2adfbb35a4ee131c7b1ca64d0040e2';
    var units = '&units=metric'
    $.get(url + city + units + key, function(data) {
      $('#current-temperature').text(data.main.temp)
    });
  };

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
