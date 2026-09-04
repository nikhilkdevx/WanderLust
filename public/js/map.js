import * as maplibregl from "https://unpkg.com/maplibre-gl@6.6.0/dist/maplibre-gl.mjs";

const map = new maplibregl.Map({
    container: "map",
    style: "https://tiles.openfreemap.org/styles/liberty",
    center: window.coordinates,
    zoom: 9.5,
});

const popup = new maplibregl.Popup({
    offset: 25
}).setHTML(
    "<h4>Exact Location Provided After Booking</h4>"
);

new maplibregl.Marker({color : "red"})
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);