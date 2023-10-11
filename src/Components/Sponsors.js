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
        
            <img alt="Bluelearn" src={bluelearn} />
            <img alt="SankalpTaru" src={sankalp} />
            <img alt="Languify" src={languify} />
            <img alt="Help4Code" src={helpcode} />
            <img alt="DevSoc" src={ds} />
            <img alt="180DC" src={dc} />
        
    </div>
  )
}

export default Sponsors