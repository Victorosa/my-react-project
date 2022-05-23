import React, { useState } from 'react'
import {AiOutlineBars} from "react-icons/ai"
import {TopNav} from './navbar';
function Toggle() {
  const [nav, setNav] = useState(false);
  return (
    <div className='toggle' >
      {nav&&<p className='yty'><TopNav/></p>}
      <p className='bars'  onClick={()=>setNav(!nav)}> MENU<AiOutlineBars/></p>
     </div>
  
  )
}

export default Toggle
