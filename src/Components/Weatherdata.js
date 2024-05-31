import React from "react";

const weatherData = [
    {
      day: "Monday",
      temperature: 20,
      condition: "Sunny"
    },
    {
      day: "Tuesday",
      temperature: 22,
      condition: "Cloudy"
    },
    {
      day: "Wednesday",
      temperature: 18,
      condition: "Rainy"
    },
    // Add more data as needed
  ];

function WeatherData() {
    return(
      <>
      {weatherData.map((item)=>(
            <div className="weather-card">
              <p>{item.day}</p>
              <p>{item.temperature}</p>
              <p>{item.condition}</p>
            </div>
    ))}
    </> 
)
}

export default WeatherData