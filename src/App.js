import './App.css';
import React, {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container pt-5 align-content-center App-container">
                <WeatherInfo />
            </div>
        )
    }

}

function contactApi() {
    return (
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=54.3776333928692&lon=18.620147474188297&appid=8bfb9fe227f2439c991d251b4b87224d').then(e => e.json())
    );
}

class WeatherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {actualCityWeather: contactApi()}
        console.log(this.state.actualCityWeather.value)
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
export default App;
