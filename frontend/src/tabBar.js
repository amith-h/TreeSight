import React, { useState } from "react";
import logo from './assets/noBackgroundLogo.png';
import countries from './countries.js';
import SearchBar from './searchBar';

function TabBar({ showSearchBar, onSwitchPage, onSwitchPage2, countryName, setCountryName}) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredCountries);
  };

  return (
    <div
      className="flexbox-container"
      style={{
        backgroundColor: '#07bbf2',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        zIndex: 9999 // set a high z-index value
      }}
    >
      <div
        className="logo-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          zIndex: 9999 // set a high z-index value
        }}
      >
        <div
          className="logo"
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            zIndex: 9999 // set a high z-index value
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: 50,
              width: 200,
              objectFit: 'cover',
              objectPosition: 'center',
              marginLeft: -80,
              zIndex: 9999 // set a high z-index value
            }}
          />
        </div>
        <div className="home-button" style={{ marginLeft: '20px' }}>
          <button
            onClick={onSwitchPage}
            style={{
              backgroundColor: 'white',
              color: '#07bbf2',
              borderRadius: '20px',
              padding: '5px 20px',
              border: 'none',
              fontFamily: 'Lilita One',
              fontWeight: 'bold',
              fontSize: '15px',
              cursor: 'pointer',
              marginLeft: -50,
              zIndex: 9999 // set a high z-index value
            }}
          >
            Home
          </button>
        </div>
      </div>
      {showSearchBar && (
        <div style={{ position: 'relative', zIndex: 9999 }}>
          <SearchBar onSearch={handleSearch} countries={countries} onSwitchPage={onSwitchPage} onSwitchPage2={onSwitchPage2} countryName={countryName} setCountryName={setCountryName}/>
         
        </div>
      )}
    </div>
  );
}

export default TabBar;
