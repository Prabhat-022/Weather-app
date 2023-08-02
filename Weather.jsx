import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Weather = () => {
    const apiKey = "e596278d4095aa9dc0e0ad6b02e9e8e0";

    const [cityName, setCityName] = useState("")
    const [data, setData] = useState({});

    const getWetherDetails = (cityName) => {
        if (!cityName) return;
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
            console.log("response ", res.data);
            setData(res.data)

        }).catch((error) => {

            console.log(error);
        })
    }
    const getCityName = (e) => {
        setCityName(e.target.value);
        console.log(e.target.value);
    }
    const handleSearch = () => {
        getWetherDetails(cityName)

    }

    useEffect(() => {
        getWetherDetails("delhi")
    }, [])

    return (
        <div className="container">
            <div className="input_area">
                <h1>Weather App</h1>
                <input type="text" placeholder='Enter City Name' value={cityName} onChange={getCityName} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="output_area">
                <span className="dot"></span>
                <h2>{data?.name}</h2>
                <h1>{((data?.main?.temp) - 273.15).toFixed(2)}</h1>
            </div>
        </div>
    )
}

export default Weather
