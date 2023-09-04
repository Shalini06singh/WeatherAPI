import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const api = {
  key: 'b15844b9802592d7bac4510983bba2ae',
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [search , setSearch] = useState("");
  const [weather, setWeather] =useState({});
  const searchPressed =() =>{
   fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
   .then((res) => res.json())
   .then((result) =>{
    // gets all detail from api
    console.log(result);
    setWeather(result);
   });
  };
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Weather App</h1>
         
         <div>

         <input type="text" placeholder='Enter Your City...'
         onChange={(event) => setSearch(event.target.value)}
         />
         <button onClick={searchPressed}>Search</button>

         </div>
         {typeof weather.main !=="undefined" ?(
<div>

 
  <p>{weather.name}</p>
   
    <p>{weather.main.temp} °C</p>
  
   {/* <p>{weather.weather[0].main}</p> */}
   <p>Humidity:{weather.main.humidity}</p>
   <p>({weather.weather[0].description})</p>

</div>
         ) : (
          ""
         )
        }
      </header>
    </div>
  );
}

export default App;
