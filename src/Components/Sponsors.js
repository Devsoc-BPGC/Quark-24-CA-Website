import React from 'react'
import './Sponsors.css'
import dc from './images/180dc.jpg'
import bluelearn from './images/bluelearn_black.png'
import sankalp from './images/sankalp.png'
import languify from './images/languify.png'
import helpcode from './images/helpcode.png'
import ds from './images/devsoc.png'
import robobox from './images/robobox.jpg'
import unstop from './images/unstop.svg'

const Sponsors = () => {
  return (
    <div className='marquee'>
            <div className='sp1'>
            <img className='bluelearn' alt="Bluelearn" src={bluelearn} onClick={()=>{window.location.href="https://www.bluelearn.in"}}/>
            <img alt="SankalpTaru" src={sankalp} onClick={()=>{window.location.href="https://sankalptaru.org/"}}/>
            <img alt="Languify" src={languify} onClick={()=>{window.location.href="https://www.languify.in/"}}/>
            <img className='robo' alt="RoboBox" src={robobox} onClick={()=>{window.location.href="https://www.languify.in/"}}/>
            </div>
            <div className='sp2'>
            <img alt="Help4Code" src={helpcode} onClick={()=>{window.location.href="https://help4code.com/"}}/>
            <img alt="unstop" src={unstop} onClick={()=>{window.location.href="https://unstop.com/"}}/>
            <img alt="DevSoc" src={ds} onClick={()=>{window.location.href="https://www.devsoc.club"}}/>
            <img alt="180DC" src={dc} onClick={()=>{window.location.href="https://www.180dc.org/branches/BITS-Goa"}}/>
            </div>
        
    </div>
  )
}

export default Sponsors