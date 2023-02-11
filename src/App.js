import './App.css';
import React, {Component} from "react";
import CityForm from "./CityForm/CityForm";
import WeatherInfo from "./components/WeatherInfo";

class App extends Component {

    state = {
        actualCity: ""
    }

    updateCityName = (newName) => {
        this.setState({
            actualCity: newName
        })
    }


    render() {

        return(
            <div className="container pt-5 align-content-center App-container">
                <CityForm updateCityName={this.updateCityName}/>
                <WeatherInfo actualCity={this.state.actualCity} />
            </div>
        )
    }

}

export default App;
