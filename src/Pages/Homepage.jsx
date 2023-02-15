import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
import * as ApiService from "../Api/ApiServices"

export default function Homepage(){
    const [msg,setMsg] = useState('')
    const [name,setName] = useState({"name":""})
    
    function handleNameChange(e){
        setName({
            [e.target.name]:e.target.value
        })
    }


    async function getTest(){
        const ans = await ApiService.getJson()
        console.log(ans)
        if(msg == ""){
            setMsg(ans[0].name)
        }else{
            setMsg("")
        }
    }

    async function postTest(){

        await ApiService.postTest(name)
    }

    return(
        <Container className="" fluid="sm">
            <Row className="centerText fill">
                <Col className="centerText"><h1>Daniel Kanczugowski</h1></Col>
            </Row>
        </Container>
    )
}