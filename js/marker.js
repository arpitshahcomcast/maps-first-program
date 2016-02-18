

$(function() {
    
    // Add Marker to the Map.
    // Declare latitude and longitude of the marker in "position" of markerOptions
    var markerOptions1 = {
        position: new google.maps.LatLng(39.95234,-75.16379)
    };
    var markerOptions2 = {
        position: new google.maps.LatLng(39.96234,-75.16379)
    };
    var markerOptions3 = {
        position: new google.maps.LatLng(39.94234,-75.16379)
    };
    var marker1 = new google.maps.Marker(markerOptions1);
    var marker2 = new google.maps.Marker(markerOptions2);
    var marker3 = new google.maps.Marker(markerOptions3);
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    
    // Add info message to the marker
    // Create message for the Info 
    var infoWindowOptions1 = {
        content: 'Philadelphia City Hall'
    };
    var infoWindow1 = new google.maps.InfoWindow(infoWindowOptions1);
    google.maps.event.addListener(marker1,'click',function(e){
        // Here Open info message on "map" and at "marker" position.
        infoWindow1.open(map, marker1);
    });
    var infoWindowOptions2 = {
        content: 'Location 2'
    };
    var infoWindow2 = new google.maps.InfoWindow(infoWindowOptions2);
    google.maps.event.addListener(marker2,'click',function(e){
        // Here Open info message on "map" and at "marker" position.
        infoWindow2.open(map, marker2);
    });
    var infoWindowOptions3 = {
        content: 'location 3'
    };
    var infoWindow3 = new google.maps.InfoWindow(infoWindowOptions3);
    google.maps.event.addListener(marker3,'click',function(e){
        // Here Open info message on "map" and at "marker" position.
        infoWindow3.open(map, marker3);
    });
});

