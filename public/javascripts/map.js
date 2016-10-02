function initMap() {
  // Create a map object and specify the DOM element for display.
  var coordinates = {lat: 42.332370, lng: -71.037130};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    scrollwheel: true,
    zoom: 20
  });

  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title: 'My Humble Abode'
  });
}
