import './App.css';
import CityForm from './components/CityForm.js';
import React, {Component} from "react";

class App extends Component {

    render() {
        return(
            <div className="container pt-5 align-content-center App-container">
                <header className="container-fluid align-content-center">
                    <CityForm />
                </header>
                <main className="container pt-5, align-content-center">

                </main>
            </div>)
    }

}

export default App;
