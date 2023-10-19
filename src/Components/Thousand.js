import React from "react"
import "./Thousand.css"
import guy from './images/guy.png'
import cap from './images/cap.png'

export default function Th() {
  return (
    <div className="th">

      <img class="imgg" src={guy} alt="Guy" />

      <h1 className="thFont">1000+</h1>

      <div className="space"></div>

      <img class="imgg" src={cap} alt="Cap" />
      <h1 className="thFont">1000+</h1>

    </div>


  )
}