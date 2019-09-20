import React, {Component} from "react";
import Cards from "./components/cards";

import BankImg from "./assets/bank.png";

class Banks extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={BankImg} alt={"BANK"} />
                </center>
                <br />
                <center>
                    <Cards />
                </center>
            </div>
        );
    }
}

export default Banks;
