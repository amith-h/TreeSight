import React, { useState } from "react";

import SearchBar from './searchBar';
import background1 from './assets/tree1.png';
import countries from './countries.js';
import TabBar from './tabBar.js'

function Page1({ onSwitchPage, onSwitchPage2 , countryName, setCountryName }) {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredCountries);
  };

  return (
    <div>
      <TabBar showSearchBar={false} onSwitchPage={onSwitchPage} />

      <div style={{ 
        position: 'relative', 
        backgroundColor: '#07bbf2', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img
          src={background1}
          alt="Background"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          top: -150,
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontFamily: 'Lilita One',  
            fontSize: 100, 
            color: "white",
            textAlign: 'center',
            margin: 0,
          }}>
            Using data to <br/> solve climate change
          </h1>
          <SearchBar onSearch={handleSearch} countries={countries} onSwitchPage={onSwitchPage} onSwitchPage2={onSwitchPage2} countryName={countryName} setCountryName={setCountryName}/>
        
        </div>
      </div>
      </div>

  );
}

export default Page1;
