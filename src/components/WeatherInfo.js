import React, {Component} from "react";

class WeatherInfo extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>{this.props.actualCityName}</div>);
    }
}

export default WeatherInfo