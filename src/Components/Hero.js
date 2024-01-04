import React from "react"
import './Hero.css';
import groupofpeople from "./images/group.png"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
export default function Hero(){
    return(
        <section className="hero-section">
            <div className="section-one">
                <h1 className="hero-h1">Quark’24 Campus Ambassador Program</h1>
                <a href="/leaderboard"><button className="hero-button">Leaderboard</button></a>
            </div>
            <div className="sec-two">
                <img className="Groupp" src={groupofpeople} alt="group of people"/>
            </div>
        </section>
    )
}