$(function() {
    var infowindow = null;
    var marker = [];
    var locations = [
    [39.94234,-75.15379,'location1'],
    [39.95234,-75.15379,'location2'],
    [39.96234,-75.15379,'location3'],
    [39.94234,-75.16379,'location4'],
    [39.95234,-75.16379,'location5'],
    [39.95234,-75.16379,'location6'],
    [39.94234,-75.17379,'location7'],
    [39.95234,-75.17379,'location8'],
    [39.96234,-75.17379,'location9']
    ];
    //console.log("inside market_list.js"); 
    
    var cities = {
        'a':    [ 39.94234,-75.15379, 'location1'],
        'b':    [ 39.95234,-75.15379, 'location2'],
        'c':    [ 39.96234,-75.15379,'location3'],
        'd':    [ 39.94234,-75.16379,'location4'],
        'e':    [ 39.95234,-75.16379,'location5'],
        'f':    [ 39.96234,-75.16379,'location6'],
        'g':    [ 39.94234,-75.17379,'location7'],
        'h':    [ 39.95234,-75.17379,'location8'],
        'i':    [ 39.96234,-75.17379,'location9']

    };     
    var cLength = locations.length ;
    //console.log("locations.length " + locations.length);
    //console.log("cLength " + cLength);
    
        //Adding infowindow option
        infowindow = new google.maps.InfoWindow({
            content: "holding..."
        });
    
    var counter = 0;
    var allLatLng = [];
    var allMarker = [];
    for (var key in cities) {
        //console.log("inside for loop");
        var data = cities[key];
        var myLatLng = new google.maps.LatLng(data[0],data[1]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: data[2],
            //icon: image,
            //title: 'test',
            html: '<div class="markerPop"><h1>' + data[2] + '</h1></div>',
            content: data[2]
        });
        
        // put all latlng in array
        allLatLng.push(myLatLng);
        allMarker.push(marker);
        //console.log(marker.content);
        //console.log(marker.html);
    
    
        marker.addListener('click', function(e) {
            // Here Open info message on "map" and at "marker" position.
            //console.log("inside addListener" + this.html);
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        }); 
    }

/*         //console.log(allLatLng);
        //  Make an array of the LatLng's of the markers you want to show
        //  Create a new viewpoint bound
        var bounds = new google.maps.LatLngBounds ();
        //  Go through each...
        console.log("allLatLng.length:" + allLatLng.length );
        for (var i = 0, LtLgLen = allLatLng.length; i < LtLgLen; i++) {
            console.log("inside for " + allLatLng[i] );
          //  And increase the bounds to take this point
          bounds.extend (allLatLng[i]);
        }
        //  Fit these bounds to the map
        map.fitBounds (bounds); */
    
    /* 
    for (var i = 0, length = locations.length; i < length; i++) {

        var line = locations[i].split(",");
        console.log("locations" + i + " : " + locations[i]);
        // Add Marker to the Map.
        // Declare latitude and longitude of the marker in "position" of markerOptions
        var markerOptions1 = {
            position: new google.maps.LatLng(line[0],line[1])
        };
        var marker1 = new google.maps.Marker(markerOptions1);
        marker1.setMap(map);

        // Add info message to the marker
        // Create message for the Info 
        var infoWindowOptions1 = {
            content: 'line[2]'
        };
        var infoWindow1 = new google.maps.InfoWindow(infoWindowOptions1);
        google.maps.event.addListener(marker1,'click',function(e){
            // Here Open info message on "map" and at "marker" position.
            infoWindow1.open(map, marker1);
        });
    } */
});





/*
$(function(b) {
    
    
var locations = [
[39.94234,-75.15379,'location1'],
[39.95234,-75.15379,'location2'],
[39.96234,-75.15379,'location3'],
[39.94234,-75.16379,'location4'],
[39.95234,-75.16379,'location5'],
[39.95234,-75.16379,'location6'],
[39.94234,-75.17379,'location7'],
[39.95234,-75.17379,'location8'],
[39.96234,-75.17379,'location9']
 ];
 
    
 var allLatlng = [
    ['39.94234,-75.153791'],
    ['39.95234,-75.153792'],
    ['39.96234,-75.153793'],
    ['39.94234,-75.163794'],
    ['39.95234,-75.163795'],
    ['39.95234,-75.163796'],
    ['39.94234,-75.173797'],
    ['39.95234,-75.173798'],
    ['39.96234,-75.173799']
 ];
 
    //console.log(allLatlng);
    //  Make an array of the LatLng's of the markers you want to show
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds ();
    //  Go through each...
    for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
    //  And increase the bounds to take this point
        bounds.extend (allLatlng[i]);
    }
    //  Fit these bounds to the map
    map.fitBounds (bounds);

    
});
*/
/* 

$.ajax({

    // Read from a file
    url: "js/location.csv",
    dataType: 'text',
    success: function (data) {

        var lines = data.match(/^.*((\r\n|\n|\r)|$)/gm);

        for (var i = 0; i < lines.length; i++) {
            console.log(line);
            var line = lines[i].replace("\n", "").split(";");
            console.log(line);
        }
    }
}); */