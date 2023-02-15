import React, { useState } from "react"
import { Table, Button, Container, Row } from "react-bootstrap"
import * as ReservationServices from "../Api/ReservationServices"

export default function ReservationList(){
    const [reservationList,setResverationList] = useState([])
    async function getReservations(){
        const getReservationList = await ReservationServices.getReservations()
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

    const viewList = reservationList.map(item =>{
        return(
        <tr>
            <td>{item.name}</td>
            <td>{item.number}</td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.guests}</td>
            <td>{item.body}</td>
        </tr>
        )
    })


    return(
        <Container className="" fluid="sm">
        <Button variant="primary" onClick={getReservations}>Get Reservations</Button>
        <Button variant="primary" onClick={scanEmail}>Manuel Scan For New Reservations</Button>
        <Row>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Requests</th>
          </tr>
        </thead>
        <tbody>
            {viewList}
        </tbody>
      </Table>
      </Row>
      </Container>

    )
}