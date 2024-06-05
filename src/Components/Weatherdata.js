import React from "react";


export default function weatherData({ list }) {
    return (
      <>
      {list.map((item)=>(
            <div key ={item.day} className="weather-card">
              <p>{item.day}</p>
              <p>{item.temperature}</p>
              <p>{item.condition}</p>
            </div>
    ))}
    </> 
)}