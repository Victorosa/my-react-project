import React, { useState, useRef } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import {FaQuoteLeft} from 'react-icons/fa'
import {AiOutlineBarChart} from 'react-icons/ai'
import {GiBoxUnpacking} from 'react-icons/gi'
import {BiWorld} from 'react-icons/bi'
import {BsFillPinFill} from 'react-icons/bs'
import {FiMonitor} from 'react-icons/fi'
import {AiFillMessage} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import { Hover, Hoverer, Hoverest} from  './hover'
import Orange from './orange'
import Rest from './rest'

export function TopNav(){
  const [hover, setHover] = useState(false);
  const [hoverer, setHoverer] = useState(false);
  const [hoverest, setHoverest] = useState(false);

  return <> 
  <div className='ttr' onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <p><span className='iconsy'><FaQuoteLeft/></span> COMPANY<BsChevronDown/>
     </p>
    {hover&&<p className='pp'><Hover/></p>}
    </div>
    <div className='ret'  onMouseOver={()=>setHoverer(true)} onMouseLeave={()=>setHoverer(false)}>
     <p className='you'>
     <span className='iconsy'> <BsFillPersonPlusFill/></span> SOCIAL MEDIA<BsChevronDown/>
     </p>
     
     {hoverer&&<p className='pp'><Hoverer/></p>}
     </div>
     <div className='fhg'  onMouseOver={()=>setHoverest(true)} onMouseLeave={()=>setHoverest(false)}>
      <p className='you'>
      <span className='iconsy'><AiOutlineBarChart/></span>SEO<BsChevronDown/></p>
      {hoverest&&<p className='pp'><Hoverest/></p>}
      </div>
     <p className='you'>
     <span className='iconsy'><GiBoxUnpacking/></span>
     PACKAGES
     <BsChevronDown/></p>
     <p className='you'>
     <span className='iconsy'>  <BiWorld/></span>
     WEB SOLUTION
     <BsChevronDown/></p>
     <p className='you'>
     <span className='iconsy'> <BsFillPinFill/></span>
     GOGGLE ADS
     <BsChevronDown/></p>
     <p className='you'>
     <span className='iconsy'> <FiMonitor/></span>
     REPUTATION
     <BsChevronDown/></p>
     <p className='you'>
     <span className='iconsy'> <AiFillMessage/></span>
     BLOG
     <BsChevronDown/></p>
     </>
     
}
export function Nav() {
  
  const [showValue, setShowValue] = useState("");
  const inputRef = useRef()
  const [MyStyle, setMyStyle] = useState({width:"4px",transition:"1s"});
  const handleSubmit = (e)=>{
    e.preventDefault()
    setMyStyle({width:"4px",transition:"1s"})
    inputRef.current.blur()
    setShowValue("")
  }
  const handleInput = (e)=>{
    setShowValue(e.target.value)
  }
  return (
    <div className='bar'>
      <nav>
       <TopNav/>
       <form onSubmit={handleSubmit} className='search'>
        
       <input placeholder=' search...' ref={inputRef} onChange={handleInput} value={showValue} onFocus={()=>setMyStyle({width:"20vw", transition:"1s"})}
          style={MyStyle} /><span className='span'><FiSearch/>  </span>
          <input type="submit"/>
         </form>
     </nav>
     <Orange/>
     <h1 className='searchy'>Search Engine Optimization</h1>

     <div className='resty'>
     <Rest/>
     </div>
    </div>
  )
};






