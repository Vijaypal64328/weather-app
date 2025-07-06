import React from "react";
import { WiThermometer, WiThermometerExterior } from "react-icons/wi";
import { MdLocationOn } from "react-icons/md";
import { WiNa } from "react-icons/wi";


const WeatherCard = ({ weather,error}) => {
    // Get local time in the city’s timezone offset
   const timezoneOffset = weather.timezone; // in seconds
const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
const localDate = new Date(utc + timezoneOffset * 1000);

console.log("Local city time:", localDate.toLocaleString());


    const formattedTime = localDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = localDate.toLocaleDateString();
    const formattedDay = localDate.toLocaleDateString(undefined, { weekday: 'long' });

    // Combine state (if available) and country code
    const state = weather.sys?.state ? weather.sys.state : "";
    const country = weather.sys.country;
    // if error is present, return error message
    
    return (
        <div className="weather-card">
            <h2>
                <MdLocationOn  size={40} />  {weather.name}
                {state && `, ${state}`}
                , {country}
                <br />
                <small style={{ fontSize: "0.5em", color: "black" }}>
                    {formattedDay}, {formattedDate}, {formattedTime}
                </small>
            </h2>
                 <img
  src={`/daynight/${weather.weather[0].icon}.svg`}
  alt={weather.weather[0].description}
  onError={(e) => e.target.src = "/daynight/default.svg"} // Fallback
/>

            <p className="weather-description">{weather.weather[0].description}</p>
            <p>
                <WiThermometer /> Temperature: {weather.main.temp}°C
            </p>
            <p>
                <WiThermometerExterior /> Feels like: {weather.main.feels_like}°C
            </p>
        </div>
    );
};

export default WeatherCard;
