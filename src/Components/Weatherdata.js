import React from 'react';
import moment from 'moment';

export default function weatherData({ list }) {
    const desiredHours = [6, 12, 18];
  // function handleClick(event) {
    // console.log(event.target.value)}
    return (
      // this is the fragment
      <> 
      {/* this is the prop */}
      {list.filter(item => {
        const hour = moment(item.dt_txt).hour();
        return desiredHours.includes(hour);
        }).map((item)=>(
            <div key= {item} className="weather-card">
              {/* <button type="button" onClick={handleClick} value= {item.temperature}>Check My Temperature</button> */}
              {/* onClick={() => handleClick(item.temperature)} in line handler example. [Callback function] When an it is not reusable. */}
              <p style={{ fontSize:'20px',fontWeight: 'bold',textAlign:'center'}}>{moment(item.dt_txt).format('MMMM Do')}<br/>{moment(item.dt_txt).format('h:mma')}</p>
              {/* Challenge = <p>Current Time is {item.dt_txt}</p> */}
              <p>Temperature is {Math.floor(item.main.temp)}°F</p>
              <p>Expect {item.weather[0].description}</p>
              <p>Humidity: {item.main.humidity}%</p>
              <p>Lowest Temperature: {Math.floor(item.main.temp_min)}°F</p>
              <p>Feels Like: {Math.floor(item.main.feels_like)}°F</p>
            </div>
    ))}
    </> 
)}