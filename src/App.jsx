import React, { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchForecast,fetch5DayForecastGrouped } from "./api";
import SearchBar from "./components/SearchBar";
// import ErrorCard from "./components/ErrorCard";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import DaywiseCard from "./components/DaywiseCard";
import FunctionalCards from "./components/FunctionalCards";
import Footer from "./components/footer";
import "./index.css";

const App = () => {
  // const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [daywiseForecast, setDaywiseForecast] = useState(null);

  const [city, setCity] = useState("Agra");

  useEffect(() => {
  const getData = async () => {
    
    const weatherData = await fetchCurrentWeather(city);
    const forecastData = await fetchForecast(city);
    const daywiseData = await fetch5DayForecastGrouped(city);
    setWeather(weatherData);
    setForecast(forecastData);
    setDaywiseForecast(daywiseData);
   
  };
  getData();
}, [city]);
  useEffect(() => {
    if (weather) {
      document.title = `Weather in ${weather.name}`;
    }
  }, [weather]);

  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />
      {/* {weather || error ? <WeatherCard weather={weather} error={error} /> : null} */}

      {/* {error && <ErrorCard message={error} />} */}

      {weather && <WeatherCard weather={weather} />}

      {forecast && <ForecastCard forecast={forecast} />}

      {daywiseForecast && <DaywiseCard forecast={daywiseForecast} />}

      {weather && <FunctionalCards weather={weather} aqi={71} uv={2} />}
      <Footer />
    </div>
  );
};

export default App;
