const api={
    key:'4920363bb97f79d34067a12d90b8fb57',
    base:'http://api.openweathermap.org/data/2.5/'
}

export const getWeather = async (clima) => {
    let url=`${api.base}weather?q=${clima}&units=metric&appid=${api.key}`
    let res=await fetch(url);
    let data=await res.json()
        .catch((er)=>console.log(`error en la consulta ${er}`));
    // console.log(data)
    return data;
}