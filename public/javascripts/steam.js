$(document).ready(function() {

  var $steamContainer = $('#steamcontainer');

  var steamAPI = 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=C2F2065B4A7CC356F0CA94C2A7539FFF';

  var steamOptions = {
    steamid: "76561198005298207",
    format: 'json'
  };

  // var gameCount = data.response.game_count;

  function steamGoods(data) {
    var htmlStuff = '<ul id="gamesList">';
      $.each(data.response.games, function(i, game) {
        htmlStuff += '<li>';
        htmlStuff += '<img src="http://media.steampowered.com/steamcommunity/public/images/apps/' + game.appid + '/' + game.img_logo_url + '.jpg" />';
        htmlStuff += '<a href="http://store.steampowered.com/app/' + game.appid + '/">' + game.name;

          if (game.name === "Undertale") {
            htmlStuff += ' (I LOOOOOOOVE THIS GAME SO MUCH IT HURTS!!!)';
          }
        htmlStuff += '</a>'
          console.log(game.name);
        htmlStuff += '</li>';
      });

        htmlStuff += '</ul>';
        $steamContainer.html(htmlStuff);
    };
    $.getJSON(steamAPI, steamOptions, steamGoods);
}); //end ready
