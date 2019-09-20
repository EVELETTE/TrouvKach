import React, {Component} from "react";
import Localisation from "./components/localisation";
import StreetMap from "../client/components/streetmap";
import {shadows} from "@material-ui/system";

import Gps from "./assets/gps.png";

class Home extends Component {
    render() {
        return (
            <div>
                <center>
                    <h2>Welcome on TrouvKach</h2>
                    <p>The best app to find easily cash !</p>
                    <img src={Gps} alt={"GPS"} />
                </center>
                <Localisation />
                <br />
                <StreetMap />
            </div>
        );
    }
}

export default Home;
