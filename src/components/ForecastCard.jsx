// Import the React library to use JSX and React features
import React from "react";
// Import weather icons from react-icons library
import { WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";

// Define the ForecastCard functional component, receiving 'forecast' as a prop
const ForecastCard = ({ forecast }) => {
  // If forecast data is missing or doesn't have a 'list', show a message
  if (!forecast || !forecast.list) {
    return <p>No forecast data available.</p>;
  }

  // Render the forecast card UI
  return (
    <div className="forecast-card">
  <h3>Upcoming Forecast</h3>
  <div className="hourly">
    {forecast.list.slice(0, 12).map((item, index) => (
      <div key={index} className="hour">
        <p>{new Date(item.dt * 1000).getHours()}:00</p>

        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          alt={item.weather[0].description}
        />

       
            <p>{item.weather[0].description}</p>
            <p><WiHumidity size={24} /> {item.main.humidity}%</p>
            <p><WiStrongWind size={24} /> {item.wind?.speed ?? 'N/A'} m/s</p>
            <p><WiThermometer size={24} /> {item.main.temp}°C</p>
        <p>Feels like: {item.main.feels_like}°C</p>

      </div>
    ))}
  </div>
</div>

  );
};

// Export the ForecastCard component for use in other files
export default ForecastCard;
