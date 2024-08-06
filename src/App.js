import "./App.css";
import icon from "./magnifying-glass.png";
import Weather from "./Weather";
import React, { useState } from "react";
import clear_icon from "./weatherImage/clear-sky.png";
import cloud_icon from "./weatherImage/scattered-clouds.png";
import few_clouds from "./weatherImage/few-clouds.png";
import broken_clouds from "./weatherImage/broken-clouds.png";
import shower_rain from "./weatherImage/shower-rain.png";
import mist_icon from "./weatherImage/mist.png";
import drizzle_icon from "./weatherImage/drizzle.png";
import rain_icon from "./weatherImage/rain.png";
import snow_icon from "./weatherImage/snow.png";
import thunderstorm_icon from "./weatherImage/thunderstorm.png";
import up_icon from "./weatherImage/up_icon.png";
import down_icon from "./weatherImage/down_icon.png";
import windy_icon from "./weatherImage/wind_icon.png";
import humidity_icon from "./weatherImage/humidity_icon.png";
import pressure_icon from "./weatherImage/pressure_icon.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    let d = new Date();
    this.state = {
      city: "Istanbul",
      country: "TR",
      propValuesForCurrentWeather: {
        degree: "28.1",
        description: "Clear Sky",
        feelsLike: "26",
        max_degree: "32",
        min_degree: "26",
        img: clear_icon,
        humidity: " 62",
        wind: " 41",
        pressure: "1002.5",
      },
      propValuesForComponentWeather: [
        {
          weather: "Clear Sky",
          max_degree: "20.8",
          min_degree: "18.7",
          img: clear_icon,
          day: "",
          getDay: weekday[(d.getDay() + 0) % 7],
        },
        {
          weather: "Clear Sky",
          max_degree: "20.8",
          min_degree: "18.7",
          img: clear_icon,
          day: "",
          getDay: weekday[(d.getDay() + 1) % 7],
        },
        {
          weather: "Clear Sky",
          max_degree: "20.8",
          min_degree: "18.7",
          img: clear_icon,
          day: "",
          getDay: weekday[(d.getDay() + 2) % 7],
        },
        {
          weather: "Clear Sky",
          max_degree: "20.8",
          min_degree: "18.7",
          img: clear_icon,
          day: "",
          getDay: weekday[(d.getDay() + 3) % 7],
        },
        {
          weather: "Clear Sky",
          max_degree: "20.8",
          min_degree: "18.7",
          img: clear_icon,
          day: "",
          getDay: weekday[(d.getDay() + 4) % 7],
        },
        {
          weather: "Clear Sky",
          max_degree: "20.8",
          min_degree: "18.7",
          img: clear_icon,
          day: "",
          getDay: weekday[(d.getDay() + 5) % 7],
        },
        {
          weather: "Clear Sky",
          max_degree: "20.8",
          min_degree: "18.7",
          img: clear_icon,
          day: "",
          getDay: weekday[(d.getDay() + 6) % 7],
        },
      ],
    };
  }

  handleKeyDown = async (event) => {
    let weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    let d = new Date();
    let weatherDescription = "osman";
    let max_temp = "Emin";
    let min_temp = "merve";
    let code = 0;
    let city = "istanbul";
    let wicon = clear_icon;
    let day = "";
    if (event.key === "Enter") {
      event.target.blur();
      if (city[0] === "") {
        return 0;
      }
      this.setState({ city: event.target.value });

      city = event.target.value;
      let key = "XAFAXJTUMT4X444F8RJRB4BTC";
      let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`;
      let response = await fetch(url);
      let info = await response.json();
      console.log(info);
      const updatedPropValuesForCurrentWeather = {
        ...this.state.propValuesForCurrentWeather,
      };

      updatedPropValuesForCurrentWeather.degree = info.days[0].temp;
      updatedPropValuesForCurrentWeather.description = info.days[0].description;
      updatedPropValuesForCurrentWeather.feelsLike = info.days[0].feelslike;
      updatedPropValuesForCurrentWeather.max_degree = info.days[0].tempmax;
      updatedPropValuesForCurrentWeather.min_degree = info.days[0].tempmin;
      updatedPropValuesForCurrentWeather.img = info.days[0].icon;
      updatedPropValuesForCurrentWeather.humidity = info.days[0].humidity;
      updatedPropValuesForCurrentWeather.wind = info.days[0].winddir;
      updatedPropValuesForCurrentWeather.pressure = info.days[0].pressure;

      this.setState({ city: info.resolvedAddress });
      //this.setState({ country: info.resolvedAddress });
      this.setState({
        propValuesForCurrentWeather: updatedPropValuesForCurrentWeather,
      });
      const { propValuesForComponentWeather } = this.state;
      const updatedPropValues = [...propValuesForComponentWeather];
      console.log(updatedPropValuesForCurrentWeather);

      // function find_icon(code) {
      //   if (code === 800) {
      //     return (wicon = clear_icon);
      //   } else if (code === 802) {
      //     return (wicon = cloud_icon);
      //   } else if (code === 801) {
      //     return (wicon = few_clouds);
      //   } else if (code === 803) {
      //     return (wicon = broken_clouds);
      //   } else if (code === 804) {
      //     return (wicon = shower_rain);
      //   } else if (code === 502) {
      //     return (wicon = rain_icon);
      //   } else if (code >= 200 && code <= 232) {
      //     return (wicon = thunderstorm_icon);
      //   } else if (code >= 300 && code <= 321) {
      //     return (wicon = drizzle_icon);
      //   } else if (code >= 500 && code <= 531) {
      //     return (wicon = rain_icon);
      //   } else if (code >= 600 && code <= 622) {
      //     return (wicon = snow_icon);
      //   } else if (code >= 700 && code <= 781) {
      //     return (wicon = mist_icon);
      //   } else {
      //     return (wicon = clear_icon);
      //   }
      // }

      for (var i = 1; i < 8; i++) {
        weatherDescription = info.days[i].description;
        max_temp = info.days[i].tempmax;
        min_temp = info.days[i].tempmin;
        //code = info.days[i].icon;
        day = weekday[(d.getDay() + i - 1) % 7];
        wicon = info.days[i].icon;

        // Update the prop values for the current component index
        updatedPropValues[i - 1] = {
          weather: weatherDescription,
          max_degree: max_temp,
          min_degree: min_temp,
          img: wicon,
          getDay: day,
        };
      }
      this.setState({ propValuesForComponentWeather: updatedPropValues });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Weather App</h1>
        </header>
        <div className="search-container">
          <input
            type="search"
            placeholder="Enter a city"
            className="search-bar"
            onKeyDown={this.handleKeyDown}
          ></input>
        </div>
        <div className="current-weather">
          <div className="current-weather-title">
            <h1>Current Weather</h1>
            {/* <label className="switch celsius-to-fahrenheit">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label> */}
          </div>
          <div className="current-weather-content">
            <div className="current-weather-part1">
              <h1>
                {this.state.city} ({this.state.country})
              </h1>
              <div className="current-weather-img-degree">
                <img
                  alt="current-weather-img"
                  className="current-weather-img"
                  src={clear_icon}
                ></img>
                <h3> {this.state.propValuesForCurrentWeather.degree}°C</h3>
              </div>
              <h3 className="current-description">
                {" "}
                {this.state.propValuesForCurrentWeather.description}
              </h3>
            </div>
            <div className="current-weather-part2">
              <div className="current-weather-info">
                <h3>
                  Feels like:{" "}
                  {this.state.propValuesForCurrentWeather.min_degree}°C
                </h3>
              </div>
              <div className="current-weather-info">
                <img src={up_icon} />
                <h3>
                  max: {this.state.propValuesForCurrentWeather.max_degree}°C
                </h3>
              </div>
              <div className="current-weather-info">
                <img src={down_icon} />
                <h3>
                  min: {this.state.propValuesForCurrentWeather.min_degree}°C
                </h3>
              </div>
              <div className="current-weather-info">
                <img src={humidity_icon} />
                <h3>
                  Humidity: {this.state.propValuesForCurrentWeather.humidity}%
                </h3>
              </div>
              <div className="current-weather-info">
                <img src={windy_icon} />
                <h3>Wind: {this.state.propValuesForCurrentWeather.wind}kph</h3>
              </div>
              <div className="current-weather-info">
                <img src={pressure_icon} />
                <h3>
                  Pressure:{this.state.propValuesForCurrentWeather.pressure}hPa
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="extended-forecast-content">
          <div className="extended-forecast-title">
            <h1>Extended Forcast</h1>
          </div>
          <div className="extended-forecast">
            {this.state.propValuesForComponentWeather.map((props, index) => (
              <Weather key={index} className="element" {...props} />
            ))}
          </div>
        </div>
        <footer className="footer">
          <p>Designed by Meroby113</p>
        </footer>
      </div>
    );
  }
}
