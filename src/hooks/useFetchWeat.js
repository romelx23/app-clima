import React, { useState, useEffect } from 'react';
import { getWeather } from "../helpers/getWeather";
export const useFetchWeat = (weather) => {

    const [weat, setWeat] = useState({
        data:[],
    });

    useEffect(() => {
        getWeather(weather)
        .then(
            (datos) => setWeat({
                data:datos,
            })
          )
          .catch((err)=>{
            console.log(err)
            console.log("no se encontrĂ³ el lugar")
          })
      }, [weather]);
      return weat;
}
