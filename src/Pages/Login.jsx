import React, {useState} from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import * as AuthServices from "../utils/AuthServices"

export default function Login(){
    const [loginInfo, setLoginInfo] = useState({
        "email":"",
        "password":"",
    })

    function handleChange(e){
        setLoginInfo({...loginInfo,
            [e.target.name]:e.target.value
        })
    }

    async function handleLogin(e){
        e.preventDefault()
        const token = await AuthServices.login(loginInfo)
        
    }


    return(
        <Container className="" fluid="sm">
            <Row className="centerText fill">
                <Col className="centerText">
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={loginInfo.email} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={loginInfo.password} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>
    </Form>
                </Col>
            </Row>
        </Container>
    )
}