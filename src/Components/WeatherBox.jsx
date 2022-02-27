import React, { useState, useEffect } from "react";
import { useFetchWeat } from "../hooks/useFetchWeat";

export const WeatherBox = ({ dateGenerate, weather}) => {
    const {data:weat}=useFetchWeat(weather);
    // console.log(weat);
  return (
    <>
      {(typeof weat.main !='undefined')?(
          <>
          <div className="location-box">
          <div className="location">
            {weat.name}, {weat.sys.country}
          </div>
          <div className="date">{dateGenerate(new Date())}</div>
        </div>
        <div className="wheater-box">
          <div className="temp">{Math.round(weat.main.temp)}°c</div>
          <div className="wheater">{weat.weather[0].main}</div>
          <div className="location">Se espera {weat.weather[0].description}</div>
        </div>
        </>
      )
      :
      (<div className="date">{dateGenerate(new Date())}</div>)
    }
    </>
  );
};
