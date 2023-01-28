import React, {Component} from "react";



class CityForm extends Component {

    handleSubmit(e) {
        e.preventDefault();
        console.log('Kliknięto na przycisk Wyślij.');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="cityName" placeholder={"Wpisz nazwę miasta"}/>
                <button type="submit">Pokaż pogodę.</button>
            </form>);
    }
}

export default CityForm