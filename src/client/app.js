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
import TypoGraphy from "@material-ui/core/Typography";
import mainLogo from "../../src/logo.png";
import NavBar from "../navbar";
class App extends Component {
    render() {
        return (
            <div>
                <AppBar color={"primary"} position={"static"}>
                    <Toolbar>
                        <img src={mainLogo} alt={"trouvkach"} />
                        <TypoGraphy variant={"title"} color={"inherit"}>
                            {"TrouvKash"}
                        </TypoGraphy>
                    </Toolbar>
                    <NavBar />
                </AppBar>
            </div>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.querySelector("#app"));
