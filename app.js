let mymap;
// Different zoom level based on the device.
if (window.innerWidth < 768) {
  mymap = L.map("map").setView([44.43, 26.09], 10);
} else {
  mymap = L.map("map").setView([44.43, 26.09], 11);
}

L.tileLayer(
  "https://api.mapbox.com/styles/v1/saidcosmin/ckbgbvfyq4tju1insgf177gcm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FpZGNvc21pbiIsImEiOiJja2JnYnJ1aWgwNmVuMnhwM2d2MnVvN2djIn0.S7WwldxX_lwc9-6ZnIsYqQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoic2FpZGNvc21pbiIsImEiOiJja2JnYnJ1aWgwNmVuMnhwM2d2MnVvN2djIn0.S7WwldxX_lwc9-6ZnIsYqQ",
  }
).addTo(mymap);

let s1Coords = [
  [44.43, 26.09],
  [44.49, 25.99],
  [44.53, 26.09],
  [44.49, 26.11],
];
let sector1 = L.polygon(s1Coords, { color: "#ff3f34", fillOpacity: 0.5 }).addTo(
  mymap
);
sector1.bindTooltip("Sector 1", { permanent: false, direction: "center" });
let s2Coords = [
  [44.44, 26.19],
  [44.45, 26.15],
  [44.47, 26.17],
  [44.49, 26.11],
  [44.43, 26.09],
];
let sector2 = L.polygon(s2Coords, { color: "#ffa801", fillOpacity: 0.5 }).addTo(
  mymap
);
sector2.bindTooltip("Sector 2", { permanent: false, direction: "center" });

let s3Coords = [
  [44.43, 26.22],
  [44.39, 26.2],
  [44.4, 26.12],
  [44.43, 26.09],
  [44.44, 26.19],
];
let sector3 = L.polygon(s3Coords, { color: "#ffdd59", fillOpacity: 0.5 }).addTo(
  mymap
);
sector3.bindTooltip("Sector 3", { permanent: false, direction: "center" });

let s4Coords = [
  [44.395, 26.16],
  [44.34, 26.16],
  [44.33, 26.15],
  [44.37, 26.09],
  [44.43, 26.09],
  [44.4, 26.12],
];
let sector4 = L.polygon(s4Coords, { color: "#0be881", fillOpacity: 0.5 }).addTo(
  mymap
);
sector4.bindTooltip("Sector 4", { permanent: false, direction: "center" });

let s5Coords = [
  [44.37, 26.09],
  [44.4, 26.01],
  [44.4, 26.04],
  [44.43, 26.09],
];
let sector5 = L.polygon(s5Coords, { color: "#0fbcf9", fillOpacity: 0.5 }).addTo(
  mymap
);
sector5.bindTooltip("Sector 5", { permanent: false, direction: "center" });
let s6Coords = [
  [44.4, 25.97],
  [44.44, 25.96],
  [44.44, 26.01],
  [44.45, 26.01],
  [44.46, 25.97],
  [44.49, 25.99],
  [44.43, 26.09],
  [44.4, 26.04],
  [44.4, 26.01],
];
let sector6 = L.polygon(s6Coords, { color: "#575fcf", fillOpacity: 0.5 }).addTo(
  mymap
);
sector6.bindTooltip("Sector 6", { permanent: false, direction: "center" });
