import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
    console.log(props);
  }
  let apiKey = `c8735bb7e8e2f8d8a38c7501f3cd47d3`;
  let longtitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${longtitude}&lon=${latitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherImage">
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max"> 19</span>
            <span className="WeatherForecast-temperature-min">18</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
