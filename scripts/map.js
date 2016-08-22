function init_map() {
  console.log("fired!")
  var var_location = new google.maps.LatLng(34.144454, -118.149862);

  var var_mapoptions = {
    center: var_location,
    zoom: 14
  };

  var var_marker = new google.maps.Marker({
    position: var_location,
    map: var_map,
    title:"Romanesque Room"});

  var var_map = new google.maps.Map(document.getElementById("map-container"),
    var_mapoptions);

  var_marker.setMap(var_map); 

}

console.log("loading maps");
google.maps.event.addDomListener(window, 'load', init_map);