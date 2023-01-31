import './App.css';
import React, {Component} from "react";
import axios from "axios";

class App extends Component {


    render() {
        return(
            <div className="container pt-5 align-content-center App-container">
                <WeatherInfo />
            </div>
        )
    }

}

class WeatherInfo extends Component {

    state = {
        weather: []
    }
    constructor(props) {
        super(props);
        this.contactApi();
        console.log(this.contactApi())

    }

    contactApi() {
        return axios
            .get()
            .then((res) => {
                this.setState({weather: res.data})
            })
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
