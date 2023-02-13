import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import ReaservationForm from "../Components/ReservationForm";
import ReservationList from "../Components/ReservationList";

export default function Reservations(){
    const [reservationPostform,setReservationPost] = useState({
        "name":"",
        "number":"",
        "dateAndTime":"",
        "guests": "",
        "body":"",
    })
    const [reservations,setReservations] = useState([])
    return(
        <>
        <h1>Reservations Page</h1>
        <ReaservationForm />
        <ReservationList />

        </>

        
  

    )
}