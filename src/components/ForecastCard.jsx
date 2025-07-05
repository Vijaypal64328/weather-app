// Import the React library to use JSX and React features
import React from "react";

// Define the ForecastCard functional component, receiving 'forecast' as a prop
const ForecastCard = ({ forecast }) => {
  // If forecast data is missing or doesn't have a 'list', show a message
  if (!forecast || !forecast.list) {
    return <p>No forecast data available.</p>;
  }

  // Render the forecast card UI
  return (
    <div className="forecast-card"> {/* Container for the forecast card */}
      <h3>Upcoming Forecast</h3> {/* Title for the forecast section */}
      <div className="hourly"> {/* Container for hourly forecast items */}
        {/* Loop through the first 12 forecast items */}
        {forecast.list.slice(0, 12).map((item, index) => (
          <div key={index} className="hour"> {/* Container for each hour */}
            {/* Display the hour (in 24-hour format) */}
            <p>{new Date(item.dt * 1000).getHours()}:00</p>
            {/* Display the weather icon */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            {/* Display the temperature in Celsius */}
            <p>{item.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the ForecastCard component for use in other files
export default ForecastCard;
