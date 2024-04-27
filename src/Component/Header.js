import React, { useContext, useState } from 'react'
import { ContextData } from '../Context/Context'

function Header() {
    const {data,setCity} = useContext(ContextData)
    const [input,setInput] = useState('')
    const keyDown = (e)=>{
        if(e.key === 'Enter')
        {
            setCity(input)
        }
    }
  return (
    <div>
        <div className='search'>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter City Name' type='text' onKeyDown={(e)=>keyDown(e)}/>
        </div>
    </div>
  )
}

export default Header