import React from "react"

import "./Card.css"
export default function Card(props){
    const {bgcolor, text, title, cardclass}=props

    const cardstyle={
        position: "relative",
        backgroundColor:bgcolor,
        margin: "1rem",
        padding: "2rem",
        flex: "0 0 auto",
        width: "300px",
    }

    return(
    
        <div style={cardstyle} className={cardclass }>
            <div className="overlaycard"></div>
            <h3 style={{marginTop:"0"}}>{title}</h3>
            {text}
            
        </div>
        
    )
}