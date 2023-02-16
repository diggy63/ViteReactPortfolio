import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as ReservationServices from "../Api/ReservationServices"

export default function ReservationModel({ show, closeModal, onHide, resId, resUpdate }) {

  const [reservations, setReservations] = useState([]);
  const [reservationPostform, setReservationPost] = useState({
    name: "",
    number: "",
    date: "",
    guests: "",
    body: "",
    email: "",
    time: "",
  });
  if(resUpdate.id){
    setReservationPost(resUpdate)
  }


  function handleChange(e) {
    setReservationPost({
      ...reservationPostform,
      [e.target.name]: e.target.value,
    });
  }

  function sendReservation() {
    // console.log(reservationPostform)
    if(resId == 0){
      ReservationServices.postReservation(reservationPostform);
    }else{
      console.log(reservationPostform)
    }
    
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading{resId}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              <Form.Label htmlFor="inputPassword5">Email</Form.Label>
              <Form.Control
                type="text"
                id="email"
                name="email"
                value={reservationPostform.email}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label htmlFor="inputPassword5">Number of Guests</Form.Label>
              <Form.Control
                type="text"
                id="guests"
                name="guests"
                value={reservationPostform.guests}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5">Date</Form.Label>
              <Form.Control
                type="text"
                id="date"
                name="date"
                value={reservationPostform.date}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="inputPassword5">Time</Form.Label>
              <Form.Control
                type="text"
                id="time"
                name="time"
                value={reservationPostform.time}
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Form.Label htmlFor="inputPassword5">Special Requests</Form.Label>
          <Form.Control
            type="text"
            id="body"
            name="body"
            value={reservationPostform.body}
            aria-describedby="passwordHelpBlock"
            onChange={handleChange}
          />
          
        </Container>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={sendReservation}>
            Make Reservation
          </Button>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
