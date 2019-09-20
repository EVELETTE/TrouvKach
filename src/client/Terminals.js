import React, {Component} from "react";
import List from "./components/list";

import TerminalImg from "./assets/terminal.png";

class Terminals extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={TerminalImg} alt={"TERMINAL"} />
                </center>
                <br />
                <List />
            </div>
        );
    }
}

export default Terminals;
