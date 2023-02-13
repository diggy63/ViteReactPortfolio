import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button";

import * as ReservationServices from "../utils/ReservationServices"

export default function ReaservationForm(){
    const [reservationPostform,setReservationPost] = useState({
        "name":"",
        "number":"",
        "dateAndTime":"",
        "guests": "",
        "body":"",
        "email":""
    })
    const [reservations,setReservations] = useState([])

    function handleChange(e){
        setReservationPost({...reservationPostform,
            [e.target.name]:e.target.value
        })
    }

    function sendReservation(){
        // console.log(reservationPostform)
        ReservationServices.postReservation(reservationPostform)
    }

    return(
        <Container className="" fluid="sm">
        <Row>
        <Col>
        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
            <Form.Control
                type="text"
                id="name"
                name="name"
                value={reservationPostform.name}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
         </Col>
         <Col>   
        <Form.Label htmlFor="inputPassword5">PhoneNumber</Form.Label>
            <Form.Control
                type="text"
                id="number"
                name="number"
                value={reservationPostform.number}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
        </Col>
        <Col>
        <Form.Label htmlFor="inputPassword5">Date and Time</Form.Label>
            <Form.Control
                type="text"
                id="dateAndTime"
                name="dateAndTime"
                value={reservationPostform.dateAndTime}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
            </Col>
            </Row>
            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
            <Form.Control
                type="text"
                id="email"
                name="email"
                value={reservationPostform.email}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
        <Form.Label htmlFor="inputPassword5">Number of Guests</Form.Label>
            <Form.Control
                type="text"
                id="guests"
                name="guests"
                value={reservationPostform.guests}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
        <Form.Label htmlFor="inputPassword5">Special Requests</Form.Label>
            <Form.Control
                type="text"
                id="body"
                name="body"
                value={reservationPostform.body}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
            />
            <Button variant="primary" onClick={sendReservation}>Make Reservation</Button>
            </Container>
        

    )

}