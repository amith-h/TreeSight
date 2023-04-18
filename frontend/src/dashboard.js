import React from 'react';
//import { useState, useEffect } from 'react'; //
import background2 from './assets/tree2.png';
import CircularProgressBar from './CircularProgressBar.js';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import TabBar from './tabBar.js'
import data2 from './wildhacks_data_json.json';
import percent from './percentile.json';

function dashboard({ onSwitchPage, onSwitchPage2, countryName, setCountryName }) {
    

      // end of graph data stuff that will be deleted
      // start of new graph data

    const afghanistanData = data2.filter(item => item["Country Name"] == countryName);
    const countryData = afghanistanData.map(item => {
        return {
            "1990": item["1990 [YR1990]"],
            "2022": item["2022"],
            "2021": item["2021"],
            "2020": item["2020 [YR2020]"],
            "2019": item["2019 [YR2019]"],
            "2018": item["2018 [YR2018]"],
            "2017": item["2017 [YR2017]"],
            "2016": item["2016 [YR2016]"],
            "2015": item["2015 [YR2015]"],
            "2014": item["2014 [YR2014]"],
            "2013": item["2013 [YR2013]"],
          "2023": item["2023"],
          "2024": item["2024"],
          "2025": item["2025"],
          "2026": item["2026"],
          "2027": item["2027"],
          "2028": item["2028"],
          "2029": item["2029"],
          "2030": item["2030"],
          "2031": item["2031"]
          
        };
      });

    const futureData = [
      { name: "2021", value: countryData[0]["2021"] },
        { name: "2022", value: countryData[0]["2022"] },
        { name: "2023", value: countryData[0]["2023"] },
        { name: "2024", value: countryData[0]["2024"] },
        { name: "2025", value: countryData[0]["2025"] },
        { name: "2026", value: countryData[0]["2026"] },
        { name: "2027", value: countryData[0]["2027"] },
        { name: "2028", value: countryData[0]["2028"] },
        { name: "2029", value: countryData[0]["2029"] },
        { name: "2030", value: countryData[0]["2030"] },
        { name: "2031", value: countryData[0]["2031"] }
    ];

    const pastData = [

        { name: "2013", value: countryData[0]["2013"] },
        { name: "2014", value: countryData[0]["2014"] },
        { name: "2015", value: countryData[0]["2015"] },
        { name: "2016", value: countryData[0]["2016"] },
        { name: "2017", value: countryData[0]["2017"] },
        { name: "2018", value: countryData[0]["2018"] },
        { name: "2019", value: countryData[0]["2019"] },
        { name: "2020", value: countryData[0]["2020"] }, 
    

    ];
   


    const pastMax = Math.max(...pastData.map(item => item.value)) + 1;
const pastMin = Math.min(...pastData.map(item => item.value)) -1;
const futureMax = Math.max(...futureData.map(item => item.value))  + 1;
const futureMin = Math.min(...futureData.map(item => item.value)) -1;




    const sust_score1 =  (((countryData[0]["1990"] - countryData[0]["2031"])) / countryData[0]["1990"]).toFixed(3);
    var sust_score = 0
   if (sust_score1 < 0){
       sust_score = 60 - (100 * sust_score1);
   }
   else{
       sust_score = 50 - (100 * sust_score1);
   }
    

   // const compare_val = 49; // to be changed


   // Parse the JSON data into a JavaScript object
   const mystr = countryName;
   var compare_val = percent[mystr].toFixed(2);
   console.log(compare_val); 
   
      // end of the new data definition

    if (sust_score < 0){
        sust_score = 30;
    }

    return (
      <div><TabBar showSearchBar={true} onSwitchPage={onSwitchPage} onSwitchPage2={onSwitchPage2} countryName={countryName}setCountryName={setCountryName} />
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
          src={background2}
          alt="Background"
          style={{
            position: 'absolute',
            top: 300,
            left: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <div style={{ 
          position: 'relative', 
          zIndex: 1, 
          //top: -150,
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontFamily: 'Lilita One',  
            fontSize: 100, 
            color: "#05472A",
            textAlign: 'center',
            margin: 0,
          }}>
            {countryName}
          </h1>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div ><h3 style={{color: " white"}}>Sustainability Score</h3>    <CircularProgressBar value={sust_score} color_opt={'#50C878'}/></div>
            <div ><h3 style={{color: " white"}}>Percentage Better than Other Countries</h3>     <CircularProgressBar value={compare_val} color_opt={'#50C878'}/></div>
             
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
  <div style={{ flex: 1, marginRight: '20px' }}>
    <div style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#ffffff' }}>
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
      Past Data (% forested land)
      </div>
      
      <LineChart
        width={500}
        height={300}
        data={pastData}
        margin={{ left: -10 }}>
        <XAxis dataKey="name" />
        <YAxis
          domain={[pastMin, pastMax]}
          tickFormatter={(value) => `${value.toFixed(0)}%`}
          axisLine={true}
          tickLine={false}
          
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  </div>
  <div style={{ flex: 1, marginLeft: '20px' }}>
    <div style={{ border: '1px solid #ccc', padding: '10px' , backgroundColor: '#ffffff', }}>
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
      Predicted next 10 years (% forested land)
      </div>
      <p>Sustainability Score</p>
      <LineChart
        width={500}
        height={300}
        data={futureData}
        margin={{ left: -10 }}>
        <XAxis dataKey="name" />
        <YAxis
          domain={[futureMin, futureMax]}
          tickFormatter={(value) => `${value.toFixed(0)}%`}
          axisLine={true}
          tickLine={false}
          
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  </div>

</div>
</div>
  
        </div>
       
      </div>
    );
  }
  
  

export default dashboard;
