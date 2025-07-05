// src/components/SearchBar.jsx
import React, { useState } from "react";

// SearchBar component accepts an onSearch prop function
const SearchBar = ({ onSearch }) => {
    // State to store the current value of the input field
    const [city, setCity] = useState("");

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        if (city.trim()) { // Checks if city is not empty or just whitespace
            onSearch(city);   // Calls the onSearch function with the city name
            setCity("");      // Clears the input field
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            {/* Input field for entering city name */}
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)} // Updates state on input change
            />
            {/* Button to submit the form */}
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
