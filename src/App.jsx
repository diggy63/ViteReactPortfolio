import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './Pages/Homepage'
import Header from './Components/Header';
import { Navigate, Route, Routes } from "react-router-dom";
import AboutMe from './Pages/AboutMe';
import Reservations from './Pages/Reservations';
import Login from './Pages/Login';
import TabsNav from './Nav/TabsNav';


export default function App() {


  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </>
  )
}


