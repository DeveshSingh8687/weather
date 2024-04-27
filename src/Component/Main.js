import React, { useContext } from 'react'
import { ContextData } from '../Context/Context'
import './Main.css'
import Header from './Header'

function Main() {
    const {data, bgImg} = useContext(ContextData)

    const style = {
        backgroundImage:`url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
    }
  return (
    <div className='app' style={style}>
        <Header />
        {
            data && data.cod == 404 ? 
            <h1 style={{textAlign:'center'}}>Please Enter a Valid city</h1>
        :<div className='container'>
            <div className='top'>
                <div className='location'>
                    <p>{data && data.name} </p>
                </div>
                <div className='temp'>
                    <h1>{data && data.main && data.main.temp} &deg;c</h1>                    
                </div>
                <div className='description'>
                    <p>{data && data.weather && data.weather[0].main}</p>
                </div>
                <div className='bottom'>
                    <div className='feels'>
                        <p className='bold'>{data && data.main && data.main.feels_like} &deg;c</p>
                        <p>Feels Like</p>
                    </div>
                    <div className='humidity'>
                        <p className='bold'>{data && data.main && data.main.humidity}</p>
                        <p>Humidity</p>
                    </div>
                    <div className='wind'>
                        <p className='bold'>{data && data.wind && data.wind.speed} Km/H</p>
                        <p>Wind Spees</p>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Main