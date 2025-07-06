// Import the axios library for making HTTP requests
import axios from "axios";

// Get the OpenWeather API key from environment variables
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Function to fetch current weather data for a given city
export const fetchCurrentWeather = async (city) => {
    try {
        // Construct the API URL with city, metric units, and API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        // Make a GET request to the API
        const response = await axios.get(url);
        // Return the data from the API response
        return response.data;
    } catch (error) {
        // Log any errors to the console
        console.error("Error fetching current weather data:", error);
        // Show an alert if the city is not found or there is an API error
        alert("City not found or API error.");
        // Return null if there was an error
        return null;
    }
};

// Function to fetch weather forecast data for a given city
export const fetchForecast = async (city) => {
    try {
        // Construct the API URL for forecast data
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
        // Make a GET request to the API
        const response = await axios.get(url);
        // Return the data from the API response
        return response.data;
    } catch (error) {
        // Log any errors to the console
        console.error("Error fetching forecast data:", error);
        // Show an alert if the city is not found or there is an API error
        // alert("Forecast data could not be fetched.");
        // Return null if there was an error
        return null;
    }
};   
// Function to fetch weather forecast for next days 
  export const fetch5DayForecastGrouped = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url);

    // Group forecasts by day
    const grouped = {};
    response.data.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });

    // For each day, take the mid-day (12:00) forecast or nearest available
    const dailyData = Object.keys(grouped).map((date) => {
      const dayItems = grouped[date];
      const midDay = dayItems.find((i) => i.dt_txt.includes("12:00:00")) || dayItems[Math.floor(dayItems.length / 2)];
      return midDay;
    });

    return dailyData;

  } catch (error) {
    console.error("Error fetching grouped forecast data:", error);
    // alert("Grouped forecast data could not be fetched.");
    return null;
  }
};


