import './App.css';
import Searchbar from './Components/Searchbar';
import WeatherData from './Components/Weatherdata';
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

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting...");
    }
  return (
    <div id="main" className="container">
      {/* Search Bar Component */}
      <Searchbar list ={handleSubmit} />
      {/* Iterating through array */}
      <WeatherData list = {weatherData} />
    </div>
  );
}
export default App;