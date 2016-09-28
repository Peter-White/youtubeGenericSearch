$(document).ready(function() {
  var $weathercontainer = $('#weathercontainer');
  var weatherAPI = "http://api.wunderground.com/api/7c8568ecd192f9f6/conditions/q/MA/Boston.json";
  function forecast(data) {

  var icon = data.current_observation.icon;
  var temp = data.current_observation.feelslike_string;
  var humid = data.current_observation.relative_humidity;

  // Convert Icon names to proper titles
  function forecastIcon(weatherIcon) {
    var icons = ["chanceflurries",
      "chancerain",
      "chancesleet",
      "chancesnow",
      "chancetstorms",
      "clear",
      "cloudy",
      "flurries",
      "fog",
      "hazy",
      "mostlycloudy",
      "mostlysunny",
      "partlycloudy",
      "partlysunny",
      "rain",
      "sleet",
      "snow",
      "sunny",
      "tstorms",
      "unknown"];

    var iconTrans = ["Chance of Flurries",
      "Chance of Rain",
      "Chance Freezing Rain",
      "Chance of Snow",
      "Chance of Thunderstorms",
      "Clear",
      "Cloudy",
      "Flurries",
      "Fog",
      "Haze",
      "Mostly Cloudy",
      "Mostly Sunny",
      "Partly Cloudy",
      "Partly Sunny",
      "Rain",
      "Freezing Rain",
      "Snow",
      "Sunny",
      "Thunderstorms",
      "Unknown"];

    for(var i = 0; i < icons.length; i++) {
      if(weatherIcon === icons[i]) {
        return iconTrans[i];
        break;
      }
    };
  };


    var weatherReport = '<table id="weather_report">';
    weatherReport += '<tr>';
    weatherReport += '<th>Weather</th><th>Temperature</th><th>Humidity</th>';
    weatherReport += '<tr>';
    weatherReport += '<td><img src="';
    weatherReport += data.current_observation.icon_url;
    weatherReport += '" />';
    weatherReport += '<h2>' + forecastIcon(icon) + '</h2></li>';
    weatherReport += '<td><h2>' + temp + '</h2></td>';
    weatherReport += '<td><h2>' + humid + '</h2></td>';
    weatherReport += '</tr>';
    weatherReport += '</table>';
    $weathercontainer.html(weatherReport);
  };
  $.getJSON(weatherAPI, forecast);
});
