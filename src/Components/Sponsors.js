import React from 'react'
import './Sponsors.css'
import dc from './images/180dc.jpg'
import bluelearn from './images/bluelearn_black.png'
import sankalp from './images/sankalp.png'
import languify from './images/languify.png'
import helpcode from './images/helpcode.png'
import ds from './images/devsoc.png'

const Sponsors = () => {
  return (
    <div className='marquee'>
        
            <img alt="Bluelearn" src={bluelearn} onClick={()=>{window.location.href="https://www.bluelearn.in"}}/>
            <img alt="SankalpTaru" src={sankalp} onClick={()=>{window.location.href="https://sankalptaru.org/"}}/>
            <img alt="Languify" src={languify} onClick={()=>{window.location.href="https://www.languify.in/"}}/>
            <img alt="Help4Code" src={helpcode} onClick={()=>{window.location.href="https://help4code.com/"}}/>
            <img alt="DevSoc" src={ds} onClick={()=>{window.location.href="https://www.devsoc.club"}}/>
            <img alt="180DC" src={dc} onClick={()=>{window.location.href="https://www.180dc.org/branches/BITS-Goa"}}/>
        
    </div>
  )
}

export default Sponsors