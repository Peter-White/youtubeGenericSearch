$(document).ready(function() {
  var $weathercontainer = $('#weathercontainer');
  var weatherAPI = "http://api.wunderground.com/api/7c8568ecd192f9f6/conditions/q/MA/Boston.json";
  function forecast(data) {

  function forecastIcon() {
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
      if(data.current_observation.icon === icons[i]) {
        return iconTrans[i];
        break;
      }
    };
  };


    var weatherReport = '<img src="';
    weatherReport += data.current_observation.icon_url;
    weatherReport += '" />';
    weatherReport += '<h2>' + forecastIcon() + '</h2>';
    $weathercontainer.html(weatherReport);
  };
  $.getJSON(weatherAPI, forecast);
});
