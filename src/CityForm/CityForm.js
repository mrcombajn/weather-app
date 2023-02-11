import React from "react";

const CityForm = (props) => {

    const handleOnCityChange = (e) => {
        props.updateCityName(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleOnCityChange} placeholder={"Wpisz nazwę miasta"} />
        </div>
    );
}

export default CityForm