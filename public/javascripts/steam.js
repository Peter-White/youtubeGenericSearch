$(document).ready(function() {

  var $steamContainer = $('#steamcontainer');

  var steamAPI = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=C2F2065B4A7CC356F0CA94C2A7539FFF';
  var steamOptions = {
    steamid: "76561198005298207"
  };

  function steamGoods(data) {
    var htmlStuff = '<h2>';
    var gameCount = data.response.game_count;
    htmlStuff += gameCount;
    htmlStuff += '</h2>';
    $steamContainer.html(htmlStuff);
  };
  $.getJSON(steamAPI, steamOptions, steamGoods);
}); //end ready
