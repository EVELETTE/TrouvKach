/* eslint-disable class-methods-use-this */
import React, {Component} from "react";
import Cards from "../src/components/cards";

import BankImg from "../src/assets/bank.png";

class Banks extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={BankImg} alt={"BANK"} />
                </center>
                <center>
                    <Cards />
                </center>
            </div>
        );
    }
}

export default Banks;
