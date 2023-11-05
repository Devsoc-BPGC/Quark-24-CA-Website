import React from "react"
import "./Leaderboard.css"
import Profile from "./Profiles"
import data from "./database"

export default function Leader(){
    return(
        <div className="Leader">
            <header style={{position:'relative'}}>
            <h1 style={{textAlign:'center'}}>Leaderboard</h1>
            <a href='/' style={{marginLeft:'auto', textDecoration:'none',color:'black', fontSize:'2rem', position:'absolute', right:'2rem', top:'0rem'}}>X</a>
            </header>
            <div className="basic">
                <div className="rank">
                <b>Ranking</b>
                </div>
                <div className="college">
                <b>College</b>
                
                </div>
                <div className="pts">
                <b>Points</b>
                 <div className="idk">
                   <div className="ptset">
                   <p><div>{pt({data})}</div></p>
                   
                   </div>
                </div>
                </div>
            </div>

            <div className="Profiles">
                <Profile data={data}></Profile>
                </div>


        </div>
    )
}

function pt({data}){
  return(
    data.map((value,index)=>(
    <div className="finally">
        <p>{value.points}</p>
    </div>
  )))
};