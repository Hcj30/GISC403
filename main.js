
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([51.505, -0.09], 11);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; OpenStreetMap &amp; MapBox'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([51.5, -0.09]).addTo(map)
	.bindPopup('Hello! I am a TEST popup.');

const marker2 = L.marker([-43.51703428870617, 172.72406434974968]).addTo(map)
	.bindPopup('Hello! I am a popup.');

const marker3 = L.marker([51.3, -0.00]).addTo(map)
	.bindPopup('Hello! I am a popup.');

const marker4 = L.marker([51.6, -0.09]).addTo(map)
	.bindPopup('Hello! I am a popup.').openPopup();



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillOpacity: 0.5,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.007],
		[51.50, -0.027],
		[51.40, -0.007]
	],{
		color: 'blue',
		fillColor: '#f03',
	}).addTo(map).bindPopup('I am a polygon.');




// END OF DOCUMENT