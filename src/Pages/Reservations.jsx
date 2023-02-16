import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReaservationForm from "../Components/ReservationForm";
import ReservationList from "../Components/ReservationList";
import ReservationModel from "../Components/ReservationModal";
import * as ReservationServices from "../Api/ReservationServices"
import { Col, Container, Row } from "react-bootstrap";

export default function Reservations(){
    useEffect(() =>{
        getReservations()
    }, [])
    const [resId, setResId] = useState(0)
    const [resUpdate, setResUpdate] = useState({
            name: "",
            number: "",
            date: "",
            guests: "",
            body: "",
            email: "",
            time: "",
          });
    const [reservationList,setResverationList] = useState([])
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false)

    async function handleShow(res){
        if(res.id){
            setResId(res.id)
            setResUpdate(res)
        }else{
            console.log("there")
            setResId(0)
            setResUpdate({
                name: "",
                number: "",
                date: "",
                guests: "",
                body: "",
                email: "",
                time: "",
            })
        }
        setShow(true)
        
        
    }
    
    async function getReservations(){
        const getReservationList = await ReservationServices.getReservations()
        setResverationList(getReservationList)
        setResverationList(getReservationList)
    }

    async function scanEmail(){
        const scanResult = await ReservationServices.scanEmail()
        console.log(scanResult.msg);
        if(scanResult.msg == "Missing Authorization Header"){
          alert("not authorized")
        }else if(scanResult.msg == "scan succesfull"){
          alert("scan successful")
        }else{
          alert("error auth ok, Its something else")
        }
      }
    return(
        <Container>
        <h1>Reservations Page</h1>
        <Row>
            <Col>
        <Button variant="primary" onClick={() => handleShow(0)}>
         Make New Reservation
        </Button>
        </Col>
        <Col>
        <Button variant="primary" onClick={getReservations}>Get Reservations</Button>
        </Col>
        <Col>
        <Button variant="primary" onClick={scanEmail}>Manuel Scan For New Reservations</Button>
        </Col>
        </Row>
        <ReservationModel resUpdate={resUpdate} show={show} closeModal={closeModal} resId={resId} onHide={() => setShow(false)}/>
        <ReservationList reservationList={reservationList} getReservations={getReservations} handleShow={handleShow}/>

        </Container>

        
  

    )
}