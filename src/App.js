import { useState, useEffect } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import WeatherData from './Components/Weatherdata';
import { getWeatherData } from './Services/WeatherService';
// const weatherData = [
//   {
//     day: "Monday",
//     temperature: 20,
//     condition: "Sunny"
//   },
//   {
//     day: "Tuesday",
//     temperature: 22,
//     condition: "Cloudy"
//   },
//   {
//     day: "Wednesday",
//     temperature: 18,
//     condition: "Rainy"
//   },
//   // Add more data as needed
// ];

function App() {
  const persistedLocation= localStorage.getItem("searchTerm");
  const [searchTerm, setSearchTerm] = useState(persistedLocation || "");
  const [weatherData, setWeatherData] = useState([]);
  const[loading, setLoading]= useState(false);
  const [error, setError]= useState(false);
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting...");
    }
    useEffect(()=> {
      // How to remove item
      // localStorage.removeItem("onion");
      // How to set item in local storage
      localStorage.setItem("searchTerm", searchTerm);
      // How to pull from local storage
      // const persistedData = localStorage.getItem('data') 
      // console.log(persistedData);
      // Cleans up things before you leave a screen; equivalent to component will unmount
      // return () => console.log("Clean up function.");
    }, [searchTerm]);
    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true);
          // Throw new error ("error") is a way to test error conditions
          const response = await getWeatherData();
          console.log(response.data.list);
          setWeatherData(response.data.list);
          setLoading(false);
        } catch {
          // An impossible state wis when two states, like an error and loading, being present at the same time but conflict
          setError(true);
          setLoading(false);
        }
      }
      fetchData();
    }, []);
  return (
    <div id="main" className="container">
      {/* {`${true ? "container" : "no-container"}`} is another way you can styler class name with a ternary operator */}
      {/* Search Bar Component */}
      <Searchbar handleSubmit={handleSubmit} searchTerm= {searchTerm} handleChange= {handleChange} id= {'search-city'}>
        <strong>Search City: {searchTerm}</strong>
        {/* <em>This is your location: {searchTerm}</em> */}
        {/* <p>another child</p> */}
        {/* <section> */}
          {/* <p>I am a section.</p> */}
        {/* </section> */}
        {/* Render JSX to target children tag */}
      </Searchbar>
      {/* Ternary Operator , like if else*/}
      {true ? <p>My condition is true</p>: <p>My condition is false</p>}
      {/* Double Ampersand; both methods (above) are used fro conditional rendering */}
      {error && <p>There was an error loading your data</p>}
      {/* Iterating through array */}
      {loading ? <p>Data Loading</p>: (
        <WeatherData list = {weatherData} />
      )}
      
    </div>
  );
}
export default App;