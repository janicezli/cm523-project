/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const map = L.map('map', {
    center: [42.3601, -71.0589],
    zoom: 10,
  });
const tiles = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 15  
}).addTo(map);


marker.addTo(map).bindPopup("<p><b>Mike's Pastry</b></p>");

const markersData = [
    {
        position: [42.3641884, -71.0542414],  
        title: "Mike's Pastry",
        popupContent: "<p><b>Mike's Pastry</b></p>"
    },
    {
      position: [42.3641597, -71.0544506],  
        title: "Caffe Vittoria",
        popupContent: "<p><b>Caffe Vittoria</b></p>"
    },
    {
        position: [42.365187, -71.055601],  
          title: "Bova's Bakery",
          popupContent: "<p><b>Bova's Bakery</b></p>"
      },
    {
        position: [42.363249, -71.054753],  
          title: "Modern Pastry Shop",
          popupContent: "<p><b>Modern Pastry Shop</b></p>"
    },
      {
        position: [42.342211, -71.080107],  
          title: "Colette Bakery",
          popupContent: "<p><b>Colette Bakery</b></p>"
      },
      {
        position: [42.356171, -71.053307],  
          title: "Kane's Donuts",
          popupContent: "<p><b>Kane's Donuts</b></p>"
      },
    {
        position: [42.350196, -71.079404],  
          title: "Levain Bakery",
          popupContent: "<p><b>Levain Bakery</b></p>"
      },
    {
        position: [42.3514443, -71.0766509],  
          title: "Jonquils Cafe and Bakery",
          popupContent: "<p><b>Jonquils Cafe and Bakery</b></p>"
      },
    {
        position: [42.3505169, -71.0599519],  
          title: "Sweet Waffles + Boba",
          popupContent: "<p><b>Sweet Waffles + Boba</b></p>"
      },
    {
        position: [42.34973907470703, -71.08280944824219],  
          title: "Amorino Gelato",
          popupContent: "<p><b>Amorino Gelato</b></p>"
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