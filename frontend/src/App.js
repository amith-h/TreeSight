import React, { useState } from 'react';
import Page1 from './page1';
import axios from 'axios';
import Page2 from './dashboard';

function App() {
  const [data, setData] = React.useState(null);


  const [countryName, setCountryName] = useState(" ");
  const [currentPage, setCurrentPage] = useState(1);


  
  const handlePageSwitchOne = () => {
    setCurrentPage(1);
  };

  const handlePageSwitchTwo = (currentCountryName) => {
    axios.get(`/api/data/${currentCountryName}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  
    setCurrentPage(2);
  };
  

  return currentPage === 1 ? (
    <Page1
      onSwitchPage={handlePageSwitchOne}
      onSwitchPage2={handlePageSwitchTwo}
      countryName={countryName}
      setCountryName={setCountryName} 
    />
  ) : (
    <Page2
      onSwitchPage={handlePageSwitchOne}
      onSwitchPage2={handlePageSwitchTwo}
      countryName={countryName}
      setCountryName={setCountryName} 
    />
  );
}

export default App;
