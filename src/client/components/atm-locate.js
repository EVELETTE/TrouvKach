import React, {Component} from "react";

class atmLocate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Recherche",
        };
    }

    getData() {
        setTimeout(() => {
            console.log("Our data is fetched");
            this.setState({
                data: "Résultats",
            });
        }, 3000);
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return <div>{this.state.data}</div>;
    }
}

export default atmLocate;
