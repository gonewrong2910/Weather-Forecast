import React, { useEffect, useState } from 'react'
import "./style.css"
import Temp from "./temp"
const Forecast = () => {
    const  [searchValue, setsearchValue] = useState("Delhi")
    const [tempInfo, settempInfo] = useState({});

    const getWeatherInfo = async()=> {
        try{
            let url =  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=27d7d800d3b1849ef9f2d7e014701063`;
        
            const res = await fetch(url)
            const data = await res.json();
            
            const {temp , humidity, pressure } =data.main;
            const {main: weathermood} = data.weather[0];
            const {name}= data
            const {speed}= data.wind
            const {country, sunset} = data.sys;

            const myNewWeatherInfo ={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            settempInfo(myNewWeatherInfo);

        } catch (error){
            console.log(error)
        }
    };

    useEffect(() => {
       getWeatherInfo(); 
    }, []);
  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input type="search..."
            autoFocus id="search"
            className="searchTerm"
              value={ searchValue}
              onChange={(e) => setsearchValue(e.target.value) }
            />
               <button className='searchButton' type='button' onClick={getWeatherInfo}>
                search
               </button>
        </div>
      </div>
      <Temp tempInfo={tempInfo} />
    </>
  )
}

export default Forecast
