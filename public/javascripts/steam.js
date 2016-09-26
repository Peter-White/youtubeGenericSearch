$(document).ready(function() {

  var $steamContainer = $('#steamcontainer');

  var steamAPI = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=C2F2065B4A7CC356F0CA94C2A7539FFF';
  var steamOptions = {
    steamid: "76561198005298207",
    format: "json"
  };

  function steamGoods(data) {
    var htmlStuff = '<ul>';
    // $.each(function(i, game) {

    // });
    htmlStuff += '<li>' + 'Johnny' + '</li>';
    htmlStuff += '</ul>';
    $steamContainer.html(htmlStuff);
  };
  $.getJSON(steamAPI, steamOptions, steamGoods);
});
