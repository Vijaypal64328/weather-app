import React from "react";
import { WiStrongWind, WiBarometer, WiHumidity, WiDaySunny, WiDust, WiFog } from "react-icons/wi";

const FunctionalCards = ({ weather, aqi, uv }) => {
  if (!weather) return null;

  const conditions = {
    visibility: weather.visibility > 10000 ? "Very Good" : weather.visibility > 5000 ? "Good" : "Poor",
    pressure: weather.main.pressure > 1015 ? "High" : weather.main.pressure < 1000 ? "Low" : "Normal",
    humidity: weather.main.humidity > 80 ? "High" : "Moderate",
    wind: weather.wind.speed < 2 ? "Calm" : weather.wind.speed < 5 ? "Light" : "Windy",
    uv: uv < 3 ? "Low" : uv < 6 ? "Moderate" : uv < 8 ? "High" : "Very High",
    aqi: aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : "Poor"
  };

  return (
    <div className="functional-cards-container">
      <h3>Weather Metrics</h3>
    <div className="functional-cards-grid">
      <div className="func-card">
        <h4>Visibility</h4>
        <WiFog size={36} />
        <p>{weather.visibility / 1000} km</p>
        <p>{conditions.visibility}</p>
      </div>

      <div className="func-card">
        <h4>Pressure</h4>
        <WiBarometer size={36} />
        <p>{weather.main.pressure} hPa</p>
        <p>{conditions.pressure}</p>
      </div>

      <div className="func-card">
        <h4>Humidity</h4>
        <WiHumidity size={36} />
        <p>{weather.main.humidity}%</p>
        <p>{conditions.humidity}</p>
      </div>

      <div className="func-card">
        <h4>Wind</h4>
        <WiStrongWind size={36} />
        <p>{weather.wind.speed} m/s</p>
        <p>{conditions.wind}</p>
      </div>

      <div className="func-card">
        <h4>UV Index</h4>
        <WiDaySunny size={36} />
        <p>{uv ?? "N/A"}</p>
        <p>{conditions.uv}</p>
      </div>

      <div className="func-card">
        <h4>Air Quality</h4>
        <WiDust size={36} />
        <p>{aqi}</p>
        <p>{conditions.aqi}</p>
      </div>
    </div>
    </div>
  );
};

export default FunctionalCards;
