import React, {useEffect} from "react";
import L from "leaflet";

function Map() {
    useEffect(() => {
        // create map
        const map = L.map("map", {
            center: [50.638728, 5.5954158],
            zoom: 16,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                }),
            ],
        });
        const markerUsr = new L.LatLng(50.638728, 5.5954158);
        const markerUser = new L.Marker(markerUsr);
        markerUser.addTo(map);
    }, []);

    return <div id={"map"} />;
}

export default Map;
