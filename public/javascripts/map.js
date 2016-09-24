function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.332438, lng: -71.037154},
    scrollwheel: true,
    zoom: 20
  });
}
