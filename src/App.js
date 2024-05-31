import './App.css';
import Searchbar from './Components/Searchbar';
import WeatherData from './Components/Weatherdata';

function App() {
  return (
    <div id="main" className="container">
      {/* Search Bar Component */}
      <Searchbar/>
      {/* Iterating through array */}
      <WeatherData />
    </div>
  );
}
export default App;