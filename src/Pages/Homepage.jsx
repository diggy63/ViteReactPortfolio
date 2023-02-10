import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Button } from "react-bootstrap";
import * as ApiService from "../utils/ApiServices"

export default function Homepage(){
    const [msg,setMsg] = useState("")
    
    async function changeState(){
        const ans = await ApiService.getJson()
        if(msg == ""){
            setMsg(ans.message)
        }else{
            setMsg("")
        }
    }

    return(
        <Container className="" fluid="sm">
            <Button variant="primary" onClick={changeState}>Primary</Button>
            <Row className="centerText fill">
                <Col className="centerText"><h1>Daniel Kanczugowski</h1></Col>
                <Col>{msg}</Col>
            </Row>
        </Container>
    )
}