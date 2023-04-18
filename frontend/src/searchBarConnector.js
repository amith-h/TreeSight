import React, { useState } from "react";
import SearchBar from "./searchBar.js";

const App = () => {
  const [data, setData] = useState([
    "apple",
    "banana",
    "cherry",
    "durian",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
  ]);

  const handleSearch = (filteredData) => {
    console.log(filteredData);
    // do something with the filtered data, e.g. update state
  };

  return <SearchBar data={data} onSearch={handleSearch} />;
};

export default App;
