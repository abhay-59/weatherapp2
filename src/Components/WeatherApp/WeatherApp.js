import React, { useState } from "react";
// import React from 'react';
import "./WeatherApp.css";
import night_icon from "../Assests/night3.png";
// import nightbg from "./nightbg.png";
// import daybg from "./after_noonbg.png";
import search_icon from "../Assests/search.png";
import clear_icon from "../Assests/clear.png";
import cloud_icon from "../Assests/cloud.png";
import drizzle_icon from "../Assests/drizzle.png";
import rain_icon from "../Assests/rain.png";
import snow_icon from "../Assests/snow.png";
import humidity_icon from "../Assests/humidity.png";
import wind_icon from "../Assests/wind.png";
var nightcontainer=document.querySelector(".container");
const WeatherApp = () => {
  let api_key = "dd94f859a0e52d6e4767fddf735f04a7";
  const [wicon, setWicon] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("city-name");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percentage");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " km/hr";
    // °°°°°°°°
    temperature[0].innerHTML = data.main.temp + " °C";
    location[0].innerHTML = data.name;
    if (
      data.weather[0].icon === "01n" ||
      data.weather[0].icon === "13n" ||
      data.weather[0].icon === "10n" ||
      data.weather[0].icon === "09n" ||
      data.weather[0].icon === "02n" ||
      data.weather[0].icon === "04n" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(night_icon);
      // if(nightcontainer){nightcontainer.setAttribute("style", "background-image: url('nightbg.png')")}
      if(nightcontainer){nightcontainer.style.background = "linear-gradient(180deg, #160064 0%, #5b0273 100%)";}
    } else if (data.weather[0].icon === "01d") {
      setWicon(clear_icon);
      if(nightcontainer){nightcontainer.style.background = "linear-gradient(180deg, #eb6e00 0%, #f2c94c 100%)";}
    } else if (data.weather[0].icon === "02d") {
      setWicon(cloud_icon);
    } else if (data.weather[0].icon === "03d") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === "04d") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === "09d") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "10d") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "13d") {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };
  return (
    <div id="night_con" className="container" >
      <div
        classname="abhay"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "40px",
          padding: "0 5px",
        }}
      >
        <input type="text" className="city-name" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">∞</div>
      <div className="weather-location">!search a city!</div>
      <br />
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">∞</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">0km/hr</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
