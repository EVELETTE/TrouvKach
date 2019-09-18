import React, { Component } from "react";
import List from "../src/components/list";

import TerminalImg from "../src/assets/terminal.png";

class Terminals extends Component {
  render() {
    return (
      <div>
        <center>
          <img src={TerminalImg} alt={"TERMINAL"} />
        </center>
        <List />
      </div>
    );
  }
}

export default Terminals;
