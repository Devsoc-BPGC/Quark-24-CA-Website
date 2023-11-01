import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration"
import Leaderboard from './Components/Leaderboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/register" element={<Registration />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
    
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring persformance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
