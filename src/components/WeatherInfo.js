import React, {Component} from "react";
import WeatherTile from "./WeatherTile";


class WeatherInfo extends Component {
    constructor(props) {
        super(props);
        //this.state = {actualCityWeather: contactApi()}
        //console.log(this.state.actualCityWeather.value)
    }

    render() {
        return (
            <div className="container">
                <header></header>
                <main>
                    <p>Aktualna temperatura:</p>
                    <p>Minimalna odczuwalna temperatura:</p>
                    <p>Maksymalna odczuwalna temperatura:</p>
                </main>

            </div>
        );
    }
}

export default WeatherInfo