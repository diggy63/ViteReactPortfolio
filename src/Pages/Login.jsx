import React, {useState} from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import * as AuthServices from "../Api/AuthServices"
import userServices from "../Utils/UserServices"
import Alert from 'react-bootstrap/Alert';


export default function Login({findUserAfterLogin}){
    const [message,setMessage] = useState("")
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
        if(token.error){
          setMessage("Email or Password is not valid")
        }else{
          findUserAfterLogin()
        }
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
      {message === '' ? null : 
        <Alert variant='danger'>{message}</Alert>
        }
    </Form>
                </Col>
                
            </Row>
        </Container>
    )
}