var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var degree_lat = Math.floor(position.coords.latitude);
  var arcminute_lat = Math.floor((position.coords.latitude - degree_lat) * 60);
  var arcsecond_lat = Math.round(
    ((position.coords.latitude - degree_lat) * 60 - arcminute_lat) * 60
  );
  var degree_long = Math.floor(position.coords.longitude);
  var arcminute_long = Math.floor(
    (position.coords.longitude - degree_long) * 60
  );
  var arcsecond_long = Math.round(
    ((position.coords.longitude - degree_long) * 60 - arcminute_long) * 60
  );

  x.innerHTML =
    "Latitude: " +
    degree_lat +
    "° " +
    arcminute_lat +
    "&apos; " +
    arcsecond_lat +
    "&quot;" +
    "<br>Longitude: " +
    degree_long +
    "° " +
    arcminute_long +
    "&apos; " +
    arcsecond_long +
    "&quot;";
}

