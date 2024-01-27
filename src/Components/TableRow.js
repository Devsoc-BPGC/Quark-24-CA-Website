import React, { useState, useEffect } from 'react';


export default function TableRow(props){
    return(
        <div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(20, 1fr)', gridTemplateRows:'repeat(1, 1fr)', gridColumnGap:'0px', gridRowGap:'0px'}}>
                <div style={{gridArea:'1 / 3 / 3 / 14', marginBottom:'1rem'}}>{props.name}</div>
                <div style={{gridArea:'1 / 14 / 3 / 17', marginBottom:'1rem'}}>{props.followers}</div>
                <div style={{gridArea:'1 / 17 / 3 / 19', marginBottom:'1rem'}}>{props.points}</div>
            </div> 
               
        </div>
    )
}
