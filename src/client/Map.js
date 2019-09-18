import React, {Component} from "react";
import StreetMap from "./components/streetmap";
import SearchBar from "./components/searchbar";

import MapImg from "./assets/map.png";

class Map extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={MapImg} alt={"MAP"} />
                </center>
                <br />
                <center>
                    <SearchBar />
                </center>
                <br />
                <StreetMap />
            </div>
        );
    }
}

export default Map;
