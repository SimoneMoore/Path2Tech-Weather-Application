import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import NavBar from '.Components/NavBar';
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
return(
  <section>
    <NavBar></NavBar>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    {/*  <Route path="/about/:id" element={<About></About>}></Route> is a way to include parameters in your */}
      </Routes>
  </section>
)
}
export default App;