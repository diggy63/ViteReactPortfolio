import React, { useState } from "react"
import { Table, Button, Container, Row } from "react-bootstrap"
import * as ReservationServices from "../Api/ReservationServices"

export default function ReservationList({reservationList, getReservations, handleShow}){

  async function handleDelte(id){
    const ans = await ReservationServices.deleteReservation(id)
    getReservations()
    
  }

  async function handleFind(id){
    const ans  = await ReservationServices.getOne(id)
    handleShow(ans)
  }


    const viewList = reservationList.map(item =>{
        return(
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.number}</td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.guests}</td>
            <td>{item.body}</td>
            <td><Button onClick={() => handleDelte(item.id)}>X</Button><Button onClick={() => handleFind(item.id)}>Update</Button></td>
        </tr>
        )
    })


    return(
        <Container className="" fluid="sm">
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
            <th>Options</th>
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