import React from 'react'
import {BsFillHouseFill} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'

function Name() {
  return (
 <div className='surface'>
     <div className='tittle'>
        <p className='next'>Next<span className='gen'>GEN</span></p>
        <p>GLOBAL SERVICES</p>
        <p>FUTURE OF DIGITAL INNOVATION</p>
     </div>
     <div className='searches'><input  placeholder='search' className='searching'/><span><FiSearch/></span></div>
       
     <div className='stay'>
     <p className='stayhome'>STAY HOME, <span className='staysafe'>STAY SAVE</span> <BsFillHouseFill/></p>
     
     </div>
     
 </div>
  )
}
export default Name
