/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
var map = L.map('map', {
    center: [42.3601, -71.0589],
    zoom: 10,
});
 
var tiles = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 15  
}).addTo(map);

<!---var marker = L.marker([42.3641884, -71.0542414], { 
   <!--- draggable: true,
   <!--- title: "Mike's Pastry",
   <!--- opacity: 0.75
<!---});

<!---marker.addTo(map).bindPopup("<p><b>Mike's Pastry</b></p>");

var markersData = [
    {
        position: [42.3641884, -71.0542414],  
        title: "Mike's Pastry",
        popupContent: "<p><b>Mike's Pastry</b></p>"
    },
    {
      position: [42.3641597, -71.0544506],  
        title: "Caffe Vittoria",
        popupContent: "<p><b>Caffe Vittoria</b></p>"
    }
];

markersData.forEach(function(markerData) {
    var marker = L.marker(markerData.position, {
        title: markerData.title,
        draggable: true,
        opacity: 0.75
    }).addTo(map);
  marker.bindPopup(markerData.popupContent);
});