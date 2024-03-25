
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-43.510406, 172.686218], 13.39);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; OpenStreetMap &amp; MapBox'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
// const marker1 = L.marker([-43.5233342406637, 172.6479671005655]).addTo(map)
//    .bindPopup('Site 1: Elsie Locke\'s cottage');

const marker1 = L.marker([-43.5233342406637, 172.6479671005655]).addTo(map)
 //   .bindPopup('<h3>Site 1: Elsie Locke\'s cottage at 392</h3><img src="https://photos.google.com/share/AF1QipP-To0LGDYW5lqARqxN4HXguSeKkwR7R6-EG0HuR7QZ8XuZ6NVp3O4AlGJ3cv-_bw/photo/AF1QipNFbHqYySSOQ6io6a2CXR_s20G-QDiqnbrgkOOu" alt="Image">');
 //   .bindPopup('<p><a href="https://photos.google.com/share/AF1QipP-To0LGDYW5lqARqxN4HXguSeKkwR7R6-EG0HuR7QZ8XuZ6NVp3O4AlGJ3cv-_bw/photo/AF1QipNFbHqYySSOQ6io6a2CXR_s20G-QDiqnbrgkOOu" target="_blank">Avon Loop: Elsie Locke\'s cottage at 392</a></p>');
    .bindPopup('<p>Avon Loop: Elsie Locke\'s cottage</p><img src="ttps://photos.google.com/share/AF1QipP-To0LGDYW5lqARqxN4HXguSeKkwR7R6-EG0HuR7QZ8XuZ6NVp3O4AlGJ3cv-_bw/photo/AF1QipNFbHqYySSOQ6io6a2CXR_s20G-QDiqnbrgkOOu" alt="Image">');

const marker2 = L.marker([-43.513646327701295, 172.6657229998654]).addTo(map)
    .bindPopup('Richmond: Secret soccer pitch');

const marker3 = L.marker([-43.518125340913045, 172.67587946453892]).addTo(map)
    .bindPopup('Dallington: Fork in the road');

const marker4 = L.marker([-43.50166007681469, 172.6745144076115]).addTo(map)
    .bindPopup('Horseshoe Lake: Asphalted way');

const marker5 = L.marker([-43.494768686466934, 172.70380156717445]).addTo(map)
    .bindPopup('Burwood: Anzac Drive planting');

const marker6 = L.marker([-43.49946861078792, 172.6974843514607]).addTo(map)
    .bindPopup('Burwood: Playground and rock memorial');

const marker7 = L.marker([-43.51703428870617, 172.72406434974968]).addTo(map)
    .bindPopup('Bexley: Cul de sac');



// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillColor: ''#f03', // transparent fill color
		fillOpacity: 0.5,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([	
	 [-43.5233342406637, 172.6479671005655], // Bottom-left corner
    [-43.5233342406637, 172.72406434974968], // Top-left corner
    [-43.513646327701295, 172.72406434974968], // Top-right corner
    [-43.513646327701295, 172.6479671005655], // Bottom-right corner
	],{
		color: 'blue',
		fillColor: 'none',
	}).addTo(map).bindPopup('Rephotography Zone');




// END OF DOCUMENT
