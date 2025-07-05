import React, { useState, useEffect } from "react";
import { fetchCurrentWeather, fetchForecast } from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import FunctionalCards from "./components/FunctionalCards";
import Footer from "./components/footer";
import "./index.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState("Agra");

  useEffect(() => {
    const getData = async () => {
      const weatherData = await fetchCurrentWeather(city);
      const forecastData = await fetchForecast(city);
      setWeather(weatherData);
      setForecast(forecastData);
    };
    getData();
  }, [city]);

  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />

      {weather && <WeatherCard weather={weather} />}

      {forecast && <ForecastCard forecast={forecast} />}

      {weather && <FunctionalCards weather={weather} aqi={71} uv={2} />}
      <Footer />
    </div>
  );
};

export default App;
