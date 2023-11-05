import React from 'react'
import "./Profiles.css"
import Lead from "./database.js"

export default function profiles({data}) {
    return (
        <div id='profile'>
            {item({data})}      
        </div>





    )
}

function item({data}) {
    return (
        <>
        {
      data.map((value,index)=>( 
        <div className='arr' key={index}>
            <div className='rankings'>
               <p>{value.rank}</p>
            </div>
            <div className='info'>
                <p>{value.name}</p>
            </div>
        </div>
      ))
    }
      </>
    
    )
}