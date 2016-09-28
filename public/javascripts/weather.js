$(document).ready(function() {
  var $weathercontainer = $('#weathercontainer');
  var weatherAPI = "http://api.wunderground.com/api/7c8568ecd192f9f6/conditions/q/MA/Boston.json";
  function forecast(data) {
    var weatherReport = '<h2>';
    weatherReport += data.current_observation.image.url;
    weatherReport += '</h2>';
    $weathercontainer.html(weatherReport);
  };
  $.getJSON(weatherAPI, forecast);
});
