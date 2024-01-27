import React, { useState, useEffect } from 'react';
import "./Leaderboard.css"
import TableRow from "./TableRow"

export default function Leaderboard(){
    return(
    <div className="Leader">
      <header style={{ position: 'relative' }}>
        <h1 style={{ textAlign: 'center' }}>Leaderboard</h1>
        <a href='/' style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black', fontSize: '2rem', position: 'absolute', right: '2rem', top: '0rem' }}>X</a>
      </header>

        <div style={{display:'grid', gridTemplateColumns:'repeat(20, 1fr)', gridTemplateRows:'repeat(1, 1fr)', gridColumnGap:'0px', gridRowGap:'0px'}}>
            <div style={{gridArea:'1 / 2 / 3 / 12', fontSize:'1.2rem', color:'#730075', fontWeight:'bold', borderBottom:'2px solid #730075', marginBottom:'1rem'}}>CA Name</div>
            <div style={{gridArea:'1 / 12 / 3 / 17', fontSize:'1.2rem', color:'#730075', fontWeight:'bold', borderBottom:'2px solid #730075', marginBottom:'1rem'}}>Followers</div>
            <div style={{gridArea:'1 / 17 / 3 / 20', fontSize:'1.2rem', color:'#730075', fontWeight:'bold', borderBottom:'2px solid #730075', marginBottom:'1rem'}}>Points</div>
        </div>
      
      <TableRow name="Wilbur perraira" followers="49" points="490" />
      <TableRow name="Dikshit Laddha" followers="34" points="340" />
      <TableRow name="Dilip" followers="10" points="100" />
      <TableRow name="lekhana reddy" followers="7" points="70" />
      <TableRow name="palak tamrakar" followers="6" points="60" />
      <TableRow name="MD Faizal" followers="5" points="50" />
      <TableRow name="saara saara" followers="3" points="30" />
      <TableRow name="Ajay Thakur" followers="2" points="20" />
      <TableRow name="Soham Katlariwala" followers="2" points="20" />
      <TableRow name="Prince Dua" followers="1" points="10" />
      <TableRow name="Vignesh Naik" followers="1" points="10" />
      <TableRow name="Sahil Bandodkar" followers="1" points="10" />
      <TableRow name="Krishnasingh Thakur" followers="1" points="10" />

    </div>)
}