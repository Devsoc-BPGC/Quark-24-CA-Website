import React, { useState, useEffect } from 'react';
import "./Leaderboard.css"
import Profile from "./Profiles"
 import data from "./database";
 import {length} from "./database";






export default function Leader() {

  

   
  const [tdata, setTdata] = useState([data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sheet.best/api/sheets/1559505e-569c-4527-ad0f-0d0c7ce65c37?_raw=1");
        const data = await response.json();
       
        const sortedData = data.sort((a, b) => b.Points - a.Points);
        setTdata(sortedData);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData(); 
  }, []); 
  

  const tlength = tdata.length;
  
    

     

    
   




  return (
    <div className="Leader">
      <header style={{ position: 'relative' }}>
        <h1 style={{ textAlign: 'center' }}>Leaderboard</h1>
        <a href='/' style={{ marginLeft: 'auto', textDecoration: 'none', color: 'black', fontSize: '2rem', position: 'absolute', right: '2rem', top: '0rem' }}>X</a>
      </header>
      <div className="basic">
        <div className="rank">
          <b>Ranking</b>
          <p><div className="move1">{rank(tlength)}</div></p>
        </div>
        <div className="college">
          <div className="end">
            <b>College</b>
          </div>
          <p><div className="move2">{namae( tdata )}</div></p>
        </div>
        <div className="pts">
          <b>Points</b>
          <div className="idk">
            <div className="ptset">
              <p><div>{pt(tdata )}</div></p>

            </div>
          </div>
        </div>
      </div>

      {/* <div className="Profiles">
                <Profile data={data}></Profile>
                </div> */}


    </div>
  )
}

function pt( data ) {
  return (
    data.map((value, index) => (
      <div className="finally">
        <p>{value.Points}</p>
      </div>
    )))
};

function namae( data ) {
  return (
    data.map((value, index) => (
      <div className="finally2">
        <p>{value.College}</p>
      </div>
    )))
};

// function rank(length) {
//   const rankno=[]
//   for(let i=1; i<=length; i++){
//    rankno.push(<li key={i}>Item {i + 1}</li>);
//   }
//   return rankno;
// };


  const rank = (length) => {
    const rankno = [];
    for (let i = 1; i <= length; i++) {
      rankno.push(<li key={i}>{i}</li>);
    }
  
    return (
      rankno.map((value,index)=>(
        <div className="betterwork">
          <p>{value}</p>
        </div>
      ))
    )
    } 

