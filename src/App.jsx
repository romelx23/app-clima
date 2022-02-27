import React, { useState } from 'react';
import './App.css';
import { WeatherBox } from './Components/WeatherBox';
import {WeatherForm} from './Components/WeatherForm'
import { useFetchWeat } from './hooks/useFetchWeat';
// import { getWeather } from './helpers/getWeather';
function App() {
  const dateGenerate=(d)=>{
    // console.log(d.getDay());
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  const [weather, setWeather] = useState('lima')
  const {data:weat}=useFetchWeat(weather);
  // console.log(weat.weather);
  return (
    <div className={(typeof weat.main!='undefined')
      ?((weat.main.temp>16)
        ?'app warn':'app')
        :'app'}>
      <main>
          {
            weat.weather?<WeatherBox dateGenerate={dateGenerate} weather={weather}/>:<h2 className='title'>No se encontro el lugar</h2>
          }
        <div 
        // className='search-box'
        className={(typeof weat.main!='undefined')
        ?((weat.main.temp>16)
          ?'search-box warn':'search-box')
          :'search-box'}
        >
          <h1>Ingrese el lugar</h1>
          <WeatherForm setWeather={setWeather}/>
        </div>
      </main>
    </div>
  );
}

export default App;
