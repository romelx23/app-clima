import React, { useState } from 'react';
import '../Components/WeatherForm.css'
import { getWeather } from '../helpers/getWeather';
// import { useFetchWeat } from '../hooks/useFetchWeat';

export const WeatherForm = ({setWeather}) => {
    const [clima, setClima] = useState('')

    const search=e=>{
        if(e.key==='Enter'){
            getWeather(clima);
        }
    }
    const handleInputChange=(e)=>{
        e.preventDefault();
        let climaInicial=e.target.value;
        setClima(climaInicial);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(clima!==""){
            setWeather(clima);
        }
    }
    return (
        <>
            <form
            onSubmit={handleSubmit}
            >
                <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Ingrese un Lugar"
                autoComplete="off"
                value={clima}
                onChange={handleInputChange}
                onKeyPress={search}
                />
                <button
                type="submit"
                className="btn btn-primary"
                >
                    Busque su Clima
                </button>
            </form>
        </>
    )
}
