import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

const SearchBar = ({ onSearch, countries , onSwitchPage, onSwitchPage2, countryName, setCountryName }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
 
  };

  let filteredCountries = [];

  if (query.length > 0) {
    filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      <div className="search-results-container">
        {filteredCountries.length > 0 && (
          <div className="search-results">
            <ul>
              {filteredCountries.map((country) => (
                 <div key={country}  onClick={() => {
                  setCountryName(country);
                  onSwitchPage2(country);
                  
                  
                }} style={{ cursor: "pointer" }}>
                 {country}
               </div>
               
              ))}
            </ul>
          </div>
        )}
        {query.length > 0 && filteredCountries.length === 0 && (
          <div className="search-results">
            <p>No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
