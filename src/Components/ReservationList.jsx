import React, { useState } from "react"
import { Table, Button, Container } from "react-bootstrap"
import * as ReservationServices from "../utils/ReservationServices"

export default function ReservationList(){
    const [reservationList,setResverationList] = useState([])
    async function getReservations(){
        const getReservationList = await ReservationServices.getReservations()
        setResverationList(getReservationList)
    }

    const viewList = reservationList.map(item =>{
        console.log(item)
        return(
        <tr>
            <td>{item.name}</td>
            <td>{item.number}</td>
            <td>{item.email}</td>
            <td>{item.dateAndTime}</td>
            <td>{item.guests}</td>
            <td>{item.body}</td>
        </tr>
        )
    })
    console.log(viewList)

    return(
        <Container className="" fluid="sm">
        <Button variant="primary" onClick={getReservations}>Get Reservations</Button>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Date and Time</th>
            <th>Guests</th>
            <th>Requests</th>
          </tr>
        </thead>
        <tbody>
            {viewList}
        </tbody>
      </Table>
      </Container>

    )
}