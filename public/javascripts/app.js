$(document).ready(function() {

$('form').submit(function (e) {
      e.preventDefault();
      var $searchField = $('#search');
      var $sumbitButton = $('#submit');

      $searchField.prop("disabled",true);
      $sumbitButton.attr("disabled",true).val("searching....");

      var $tubeTest = $('#tubeTest');
      var youtubeAPI = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKQfeLQ1KcJox_KtjdLq_WYbbn97KbHPo";
      var search = $searchField.val();

      var youtubeOptions = {
          q: search,
          maxResults: 30,
      };

      function listStuff(data) {
        var youtubeStuff = '<ul>';
        $.each(data.items,function(i, video) {
          var videoUrl = video.id.videoId;
          var videoTitle = video.snippet.title;
          youtubeStuff += '<li class="grid-25 tablet-grid-50">';
          youtubeStuff += '<iframe title="' + videoTitle + '" width="255" height="179" src="http://www.youtube.com/embed/' + videoUrl + '" frameborder="0" allowfullscreen></iframe>';
          youtubeStuff += '</li>';
        });
        youtubeStuff += '</ul>';
        $tubeTest.html(youtubeStuff);
        $searchField.prop("disabled",false);
        $sumbitButton.attr("disabled",false).val("Search");
      }
      $.getJSON(youtubeAPI, youtubeOptions, listStuff);
    }); // form submit
}); // end ready

