const map = L.map('map', {
  center: [42.3601, -71.0589],
  zoom: 12,
});

const tiles = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: 12 
}).addTo(map);
  
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 12,
  attribution: '© OpenStreetMap'
});

const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 12,
  attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

const baseMaps = {
          "OpenStreetMap": osm,
          "OpenStreetMap.HOT": osmHOT
      };

const cakeLayer = L.layerGroup();
 const icecreamLayer = L.layerGroup();
const cookieLayer = L.layerGroup();
const pieLayer = L.layerGroup();
const breadLayer = L.layerGroup();
const donutLayer = L.layerGroup();
const waffleLayer = L.layerGroup();
const gelatoLayer = L.layerGroup();
const shavediceLayer = L.layerGroup();

const markersData = [
  {
      position: [42.3641884, -71.0542414],  
      title: "Mike's Pastry",
      popupContent: "<p><b>Mike's Pastry</b></p>",
    categories: ["cake", "cookie"] 
  },
  {
    position: [42.3641597, -71.0544506],  
      title: "Caffe Vittoria",
      popupContent: "<p><b>Caffe Vittoria</b></p>",
    categories: ["cake", "cookie"] 
  },
  {
      position: [42.365187, -71.055601],  
        title: "Bova's Bakery",
        popupContent: "<p><b>Bova's Bakery</b></p>",
    categories: ["cake", "pie", "cookie"] 
    },
  {
      position: [42.363249, -71.054753],  
        title: "Modern Pastry Shop",
        popupContent: "<p><b>Modern Pastry Shop</b></p>",
    categories: ["cake", "pie", "cookie"] 
  },
    {
      position: [42.342211, -71.080107],  
        title: "Colette Bakery",
        popupContent: "<p><b>Colette Bakery</b></p>",
      categories: ["bread", "cake", "cookie"] 
    },
    {
      position: [42.356171, -71.053307],  
        title: "Kane's Donuts",
        popupContent: "<p><b>Kane's Donuts</b></p>",
      categories: ["donut"]
    },
  {
      position: [42.350196, -71.079404],  
        title: "Levain Bakery",
        popupContent: "<p><b>Levain Bakery</b></p>",
    categories: ["cookie"]
    },
  {
      position: [42.3514443, -71.0766509],  
        title: "Jonquils Cafe and Bakery",
        popupContent: "<p><b>Jonquils Cafe and Bakery</b></p>",
    categories: ["cake"]
    },
  {
      position: [42.3505169, -71.0599519],  
        title: "Sweet Waffles + Boba",
        popupContent: "<p><b>Sweet Waffles + Boba</b></p>",
    categories: ["waffle"]
    },
  {
      position: [42.34973907470703, -71.08280944824219],  
        title: "Amorino Gelato",
        popupContent: "<p><b>Amorino Gelato</b></p>",
    categories: ["gelato", "waffle", "cake", "cookie"] 
  },
 {
      position: [42.3517859, -71.131513],  
        title: "Tous les Jours",
        popupContent: "<p><b>Tous les Jours</b></p>",
   categories: ["cake", "pie", "cookie", "bread"] 
 },
 {
      position: [42.3632561, -71.0548493],  
        title: "Caffè Paradiso",
        popupContent: "<p><b>Caffè Paradiso</b></p>",
     categories: ["gelato", "cake", "cookie"] 
 },
    {
      position: [42.346182, -71.107795],  
        title: "Japonaise Bakery & Cafe",
        popupContent: "<p><b>Japonaise Bakery & Cafe</b></p>",
      categories: ["bread", "cake"]
    },
      {
      position: [42.3411542, -71.1262328],  
        title: "Oasit’s Sweet Dessert Studio",
        popupContent: "<p><b>Oasit’s Sweet Dessert Studio</b></p>",
         categories: ["bread", "shavedice"]
      },
        {
      position: [42.3462816, -71.1073801],  
        title: "Kyo Matcha",
        popupContent: "<p><b>Kyo Matcha</b></p>",
          categories: ["cake", "icecream"]
        },
           {
      position: [42.3645456, -71.0553615],  
        title: "North End Creamery",
        popupContent: "<p><b>North End Creamery</b></p>",
              categories: ["icecream"]
           },
             {
      position: [42.3454826, -71.1268255],  
        title: "Far Out Ice Cream",
        popupContent: "<p><b>Far Out Ice Cream</b></p>",
               categories: ["icecream"]
             },
       {
      position: [42.3516032, -71.0449846],  
        title: "Taiyaki NYC",
        popupContent: "<p><b>Taiyaki NYC</b></p>",
         categories: ["icecream"]
       },
 {
      position: [42.3411133, -71.0874948],  
        title: "Da Vinci Gelato & Waffle",
        popupContent: "<p><b>Da Vinci Gelato & Waffle</b></p>",
    categories: ["gelato", "waffle", "cookie"]
 },
    {
      position: [42.3488318, -71.0845681],  
        title: "Emack & Bolio's Ice Cream",
        popupContent: "<p><b>Emack & Bolio's Ice Cream</b></p>",
       categories: ["icecream"]
    },
{
      position: [42.3524901, -71.1304223],  
        title: "The Scoop N Scootery",
        popupContent: "<p><b>The Scoop N Scootery</b></p>",
   categories: ["icecream"]
},
{
      position: [42.3421365, -71.0756481],  
        title: "FoMu",
        popupContent: "<p><b>FoMu</b></p>",
   categories: ["icecream"]
},
{
      position: [42.3776994, -71.0310994],  
        title: "Slush King",
        popupContent: "<p><b>Slush King</b></p>",
  categories: ["icecream", "gelato"]
},
 {
      position: [42.3391704, -71.1347906],  
        title: "Athan's Bakery",
        popupContent: "<p><b>Athan's Bakery</b></p>",
   categories: ["cake", "cookie"]
 },
{
      position: [42.2827993, -71.0555485],  
        title: "Top Shelf Cookies",
        popupContent: "<p><b>Top Shelf Cookies</b></p>",
  categories: ["cookie"]
},
 {
      position: [42.3564571, -71.1425835],  
        title: "Crumbl",
        popupContent: "<p><b>Crumbl</b></p>",
   categories: ["cookie"]
 },
{
      position: [42.360166, -71.056184],  
        title: "The Boston Chipyard, Inc.",
        popupContent: "<p><b>The Boston Chipyard, Inc.</b></p>",
  categories: ["cookie"]
},
{
      position: [42.3625573, -71.0573822],  
        title: "Hearth & Hug Bakery",
        popupContent: "<p><b>Hearth & Hug Bakery</b></p>",
   categories: ["bread", "cake", "cookie", "pie"] 
},
{
      position: [42.3516206, -71.0610665],  
        title: "Corner Cafe & Bakery",
        popupContent: "<p><b>Corner Cafe & Bakery</b></p>",
  categories: ["bread", "cake"] 
},
{
      position: [42.3431546, -71.0866977],  
        title: "Oakleaf Cakes Bake Shop",
        popupContent: "<p><b>Oakleaf Cakes Bake Shop</b></p>",
   categories: ["cake", "cookie", "bread"]
},
{
      position: [42.3526534, -71.1304813],  
        title: "Yi Soon Bakery",
        popupContent: "<p><b>Yi Soon Bakery</b></p>",
  categories: ["bread", "cake", "cookie"]
},
{
      position: [42.3508208, -71.0612964],  
        title: "Bao Bao Bakery & Cafe",
        popupContent: "<p><b>Bao Bao Bakery & Cafe</b></p>",
  categories: ["bread", "cake", "cookie"]
},
{
      position: [42.3771529, -71.0333475],  
        title: "Lolly's Bakery",
        popupContent: "<p><b>Lolly's Bakery</b></p>",
   categories: ["bread", "cake", "cookie"]
},
{
      position: [42.2856719, -71.1556372],  
        title: "Sugar Baking Co.",
        popupContent: "<p><b>Sugar Baking Co.</b></p>",
  categories: ["pie", "cake", "cookie"]
},
  {
      position: [42.3417661, -71.1239952],  
        title: "When Pigs Fly Breads",
        popupContent: "<p><b>When Pigs Fly Breads</b></p>",
    categories: ["bread", "cake", "cookie"]
    }];

markersData.forEach(function(markerData) {
  const marker = L.marker(markerData.position, {
      title: markerData.title,
      draggable: false,
      opacity: 0.75
  }).addTo(map); marker.bindPopup(markerData.popupContent);
});
markersData.categories.forEach(function(category) {
              if (category === "cake") cakeLayer.addLayer(marker);
              if (category === "icecream") icecreamLayer.addLayer(marker);              if (category === "cookie") cookieLayer.addLayer(marker); 
  if (category === "pie") pieLayer.addLayer(marker);
   if (category === "bread") breadLayer.addLayer(marker);
 if (category === "donut") donutLayer.addLayer(marker);
 if (category === "waffle") waffleLayer.addLayer(marker);
 if (category === "gelato") gelatoLayer.addLayer(marker);
  if (category === "shavedice") shavediceLayer.addLayer(marker);
          });


cakeLayer.addTo(map);
icecreamLayer.addTo(map);
cookieLayer.addTo(map);
pieLayer.addTo(map);
breadLayer.addTo(map);
donutLayer.addTo(map);
waffleLayer.addTo(map);
gelatoLayer.addTo(map);
shavediceLayer.addTo(map);

const overlayMaps = {
          "Cake": cakeLayer,
          "Ice Cream": icecreamLayer,
          "Cookie": cookieLayer,
          "Pie": pieLayer,
          "Bread": breadLayer,
          "Donut": donutLayer,
          "Waffle": waffleLayer,
          "Gelato": gelatoLayer,
          "Shaved Ice": shavediceLayer
      };

const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
