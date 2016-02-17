
$(function() {
    var mapOptions = {
        center: new google.maps.LatLng(39.95234,-75.16379),
        // Other "zoom" level
        //  1: World
        //  5: Landmass/continent
        // 10: City
        // 15: Streets
        // 20: Buildings
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        // Other options for MapTypeId
        //mapTypeId: google.maps.MapTypeId.HYBRID
        //mapTypeId: google.maps.MapTypeId.SATELLITE
        //mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    map = new google.maps.Map(document.getElementById('my-map'), mapOptions);

});


/*

$(function() {
		//map options
		var mapOptions = {
			zoom: 5,
			center: new google.maps.LatLng(37.09024, -100.712891),
			panControl: false,
			panControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_LEFT
			},
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			scaleControl: false

		};
	

	
	//Fire up Google maps and place inside the map-canvas div
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

});
*/

/*
var mapOptions = {
    center: new google.maps.LatLng(39.95234,-75.16379),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);

*/