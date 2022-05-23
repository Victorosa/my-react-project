import React from 'react'
import social from './social.js'
import menu from './menu.js'
import Name from './name.js'
import Iconno from './iconno.js'
import Toggle from './toggle.js'


const el = social.map((item, index)=>{
    return(
      <div className="block" key={index}>
          <div className='icon'>
            
              <div className='ppppf'><div className='pppp'>{item.icon}</div></div>
              </div>
          
      </div>
    )
})
const ell = menu.map((item, index)=>{
    return(
      <div className={item.sign?"sign-in":"icons"} key={index}><div className='number'><div>{item.icon}</div></div>
          {item.sign?<div className='numbers'>{item.sign}</div>:<div className='numbers'>{item.text}</div>}
      </div>
    )
})
function Interest() {
  return (
    
    <div className='interest'>
      <Toggle/>
      <div className='young'>
        {el}
      </div>
      <div className='display'>
      {ell}
      </div>
      <div className='namess'>
        <Name/>
      </div>
     <Iconno/>

    </div>
  )
}

export default Interest

