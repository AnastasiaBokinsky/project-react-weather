import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let longtitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}`;
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
