import React from 'react';


export default function weatherData({ list }) {
  // function handleClick(event) {
    // console.log(event.target.value)}
    return (
      <>
      <p>Here is the list of the current 7 Day forecast</p>
      {list.map((item)=>(
            <div key= {item.dt} className="weather-card">
              {/* <button type="button" onClick={handleClick} value= {item.temperature}>Check My Temperature</button> */}
              {/* onClick={() => handleClick(item.temperature)} in line handler example. [Callback function] When an it is not reusable. */}
              <p>{item.dt_txt}</p>
              {/* Challenge = <p>Current Time is {item.dt_txt.__}</p> */}
              <p>Current Temperature is {item.main.temp}</p>
              <p>Humidity: {item.main.humidity}</p>
              <p>Lowest Temperature: {item.main.temp_min}</p>
              <p>Feels Like: {item.main.feels_like}</p>
            </div>
    ))}
    </> 
)}