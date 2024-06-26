
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-43.510309, 172.690972], 14.04);

L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1ok3un022601oi4squ74xc/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {    
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
// END REPLACE BLOCK

const customIcon = L.icon({
  iconUrl: 'https://cdn1.iconfinder.com/data/icons/social-media-vol-3/24/_camera_icon-512.png', // Specify the URL to your custom icon image
  iconSize: [32, 32], // Set the size of the icon
  popupAnchor: [0, -16] // Adjust the popup anchor position relative to the icon
});

// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
// const marker1 = L.marker([-43.5233342406637, 172.6479671005655]).addTo(map)
//    .bindPopup('Site 1: Elsie Locke\'s cottage');


const marker1 = L.marker([-43.5233342406637, 172.6479671005655], { icon: customIcon }).addTo(map)
    .bindPopup('Avon Loop: Whats here? Elsie Locke\'s cottage, a significant location due to its historical and cultural significance');

const marker2 = L.marker([-43.513646327701295, 172.6657229998654], { icon: customIcon }).addTo(map)
    .bindPopup('Richmond: Whats here? Discover a hidden soccer pitch in this area');

const marker3 = L.marker([-43.518125340913045, 172.67587946453892], { icon: customIcon }).addTo(map)
    .bindPopup('Dallington: Whats here? A fork in the road leading to a secret garden and a new pedestrian bridge');

const marker4 = L.marker([-43.50166007681469, 172.6745144076115], { icon: customIcon }).addTo(map)
    .bindPopup('Waikākāriki: Whats here? A disapearing lane: Witness natures rapid regeneration taking place');

const marker5 = L.marker([-43.494768686466934, 172.70380156717445], { icon: customIcon }).addTo(map)
    .bindPopup('Burwood: Whats here? Discover a school planting initiative, showcasing assisted regeneration next to the mahinga kai exemplar');

const marker6 = L.marker([-43.49946861078792, 172.6974843514607], { icon: customIcon }).addTo(map)
    .bindPopup('Burwood: Whats here? Community designed playground and large rock memorial');

const marker7 = L.marker([-43.51703428870617, 172.72406434974968], { icon: customIcon }).addTo(map)
    .bindPopup('Bexley: Whats here? A cul-de-sac being reclaimed by the wetland, see a unique transformation in progress');




// These are the Territorial Authority Polygons that are being accessed from a 3rd party server. 

// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path) 

var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", { 

		color: 'white', //stroke colour 

		fillColor: 'transparent', // transparent fill color 

		fillOpacity: 1.0, 

	}); 

geojsonLayer.addTo(map); 

// Function to check if a point is inside a polygon (helper function)
function isPointInsidePolygon(point, polygon) {
    // Implement a point-in-polygon algorithm (e.g., Ray Casting Algorithm)
    // This is a simplified example and may need a more robust implementation for real use
    // Adapt this function based on your needs and any libraries you may be using
    // Here's a simple example using Leaflet's LatLngBounds.contains function:
    return L.latLngBounds(polygon).contains(point);
}



// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([	
	[-43.528555511862564, 172.64574794498358],
	[-43.528555511862564, 172.73029115380038],
  	[-43.491396958850515, 172.73029115380038], 
  	[-43.491396958850515, 172.64574794498358]
	],{
		color: 'black',
		weight: '1',
		fillColor: 'black',
		fillOpacity: 0.05,
	}).addTo(map).bindPopup('Rephotography Zone: this doesnt work, but I dont know why!!!');





// END OF DOCUMENT
