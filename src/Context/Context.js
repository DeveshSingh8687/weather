import React, { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Main from '../Component/Main'
// images
import Clear from '../Assets/images/Clear.jpg'
import Fog from '../Assets/images/fog.png'
import Rainy from '../Assets/images/Rainy.jpg'
import Snow from '../Assets/images/snow.jpg'
import Stormy from '../Assets/images/Stormy.jpg'
import Sunny from '../Assets/images/Sunny.jpg'
import Cloud from '../Assets/images/Cloud.avif'
import Haze from '../Assets/images/haze.jpg'

export const ContextData = createContext()
function Context() {
    const [city,setCity] = useState('Jaipur')
    const [data,setData] = useState()
    const [bgImg,setBgImg] = useState('')
    const API_key = "4f281436b0521ec06f6c4ad4dd251d4a"
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[city])
    useEffect(()=>{
        if(data && data.weather )
        {
            let weatherType = data.weather[0].description
            if (weatherType.toLowerCase().includes('clear')) {
                setBgImg(Clear)
              }
              else if(weatherType.toLowerCase().includes('haze')) {
                setBgImg(Haze)
              }else if (weatherType.toLowerCase().includes('cloud')) {
                setBgImg(Cloud)
              } else if (weatherType.toLowerCase().includes('rain') || weatherType.toLowerCase().includes('shower')) {
                setBgImg(Rainy)
              } else if (weatherType.toLowerCase().includes('snow')) {
                setBgImg(Snow)
              } else if (weatherType.toLowerCase().includes('fog')) {
                setBgImg(Fog)
              } else if (weatherType.toLowerCase().includes('thunder') || weatherType.toLowerCase().includes('storm')) {
                setBgImg(Stormy)
              }
        }
    },[data])
  return (
    <ContextData.Provider value={{data, setCity, bgImg}}>
        <Main />
    </ContextData.Provider>
  )
}

export default Context