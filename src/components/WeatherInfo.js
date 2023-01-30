import React, {Component} from "react";
import WeatherTile from "./WeatherTile";


class WeatherInfo extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            console.log(this.props.state)
        );
    }
}

export default WeatherInfo