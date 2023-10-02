import Navbar from "./Components/Navbar.js"
import Hero from "./Components/Hero.js"
import About from "./Components/About.js"
import WhyApply from './Components/WhyApply';
import Roles from './Components/Roles.js'
import Contact from './Components/Contact.js'
import Thousand from './Components/Thousand.js'
import WhoApply from './Components/WhoApply.js';
import WithLove from './Components/WithLove.js';
import React from "react";
import './App.css';
import Th from "./Components/Thousand.js";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="thousand"><Thousand /></section>
      <section id="benefits"><WhyApply /></section>
      <section id="love"><WithLove /></section>
      <section id="roles"><Roles /></section>
      <section id="responsibilities"><WhoApply /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}