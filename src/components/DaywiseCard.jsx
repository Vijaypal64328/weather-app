import React from "react";
import { WiStrongWind, WiBarometer,WiThermometer, WiHumidity, WiDaySunny, WiDust, WiFog, WiWindBeaufort0 } from "react-icons/wi";

const DaywiseCard = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return <p>No daywise forecast data available.</p>;
  }

  return (

    <div className="daywise-card">
  <h3> 7-Days Forecast</h3>
  <div className="daily">
      {forecast.map((day, index) => (
        <div className="day" key={index}>
          <p>{new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'long' })}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt={day.weather[0].description}
          />
           <p>{day.weather[0].description}</p>
          <p><WiHumidity size={24} /> {day.main.humidity}%</p>
          <p><WiThermometer  size={24} /> {Math.round(day.main.temp)}°C</p>
           <p>Feels like: {Math.round(day.main.feels_like)}°C</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DaywiseCard;
