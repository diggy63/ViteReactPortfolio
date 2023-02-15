import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Homepage'
import Header from './Components/Header';
import { Navigate, Route, Routes } from "react-router-dom";
import AboutMe from './Pages/AboutMe';
import Reservations from './Pages/Reservations';
import Login from './Pages/Login';
import userServices from './Utils/UserServices';
import { useNavigate } from "react-router-dom";



export default function App() {
  const navigate = useNavigate();
  const [user,setUser] = useState([])
  useEffect(() =>{
    findUser()
  }, []);

  async function findUserAfterLogin(){
    const userFound = await userServices.findUser()
    console.log(userFound + "<<<<---------user handle login")
    setUser(user)
    navigate("/")
    

  }
  
  async function findUser(){
    const userFound = await userServices.findUser()
    setUser(userFound)
  }

  return (
    <>
    <Header user={user} />
      <Routes>
        <Route path="/" element={<Homepage user={user}/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/login" element={<Login findUserAfterLogin={findUserAfterLogin}/>} />
      </Routes>
      </>
  )
}


