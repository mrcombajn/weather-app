import './App.css';
import React, {Component} from "react";
import WeatherInfo from "./components/WeatherInfo";
import CityForm from "./components/CityForm";

class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actualCityName: '',
            cities: [
                ['Gdańsk', new Coordinates(54.3776333928692, 18.620147474188297)],
                ['Warszawa', new Coordinates(52.25646163395101, 21.03407252816397)],
                ['Kraków', new Coordinates(50.07824653181334, 19.838788843016342)],
                ['Wrocław', new Coordinates(51.13549732764082, 16.96224077710458)]
            ]
        }
    }

    handleSubmit = e => {
        this.setState({actualCityName: e.target.value})

        
    }

    render() {
        return(
            <div className="container pt-5 align-content-center App-container">
                <header className="container-fluid align-content-center">
                    <form method="POST" onChange={this.handleSubmit}>
                        <CityForm />
                    </form>);
                </header>
                <main className="container pt-5, align-content-center">
                    <WeatherInfo />
                </main>
            </div>)
    }

}

export default App;
