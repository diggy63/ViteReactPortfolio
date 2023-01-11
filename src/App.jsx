import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './Pages/Homepage'
import Header from './Components/Header';
import { Navigate, Route, Routes } from "react-router-dom";
import AboutMe from './Pages/AboutMe';


export default function App() {


  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
      </Routes>
      </>
  )
}


