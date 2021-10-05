"use strict"

mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
	container: 'map', // container ID

});
//map

map.setStyle("mapbox://styles/mapbox/satellite-streets-v11")
map.setZoom(11)
map.setCenter([-98.4916, 29.4252])

//markers



var markerUnion = new mapboxgl.Marker({
	color:"purple",
})
	.setLngLat([-98.1187,29.7080])
	.setDraggable(false)
	.addTo(map);


//Popups
var popup = new mapboxgl.Popup()
	.setLngLat(markerUnion.getLngLat())
	.setHTML("<h3>Union Street Diner</h3>")

$(markerUnion).click(function(){
	popup.addTo(map);
})
markerUnion.setPopup(popup);


