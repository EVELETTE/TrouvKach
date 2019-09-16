/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by BackstreetBoys@BeCode
 * started at 06/09/2019
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import mainLogo from "../client/assets/logo.png";
import Button from "../client/components/button";
import Paper from "../client/components/paper";
//import MeLocate from "../client/components/me-locate";
//import Map from "../client/components/map";

class App extends Component {
    render() {
        return (
            <div>
                <AppBar color={"primary"} position={"static"}>
                    <Toolbar>
                        <img src={mainLogo} alt={"trouvkach"} />
                        <h1>TrouvKach</h1>

                    </Toolbar>
                    <Button />
                    <Paper />
                </AppBar>
            </div>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.querySelector("#app"));
//ReactDOM.render(<Map />, document.querySelector("#app"));
// ReactDOM.render(<MeLocate />, document.querySelector("#app"));
