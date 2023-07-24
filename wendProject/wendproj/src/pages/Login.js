import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Toast } from 'reactstrap'

function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    var [data, setData]=useState({})

    

    useEffect(()=>{
        
    },[])
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        async function getData(){
            data =await axios.get(`http://localhost:3333/users/?email=${email}&password=${pass}`)
            
          }
        getData()
        console.log(data.user)
        
        // if(Validate()){
        //     console.log("proceed")
        // let data= fetch(`http://localhost:3333/users/${email}`)

        console.log(data)
        // }
        // function Validate(){
        //     if (email===''||email===null){
        //         Toast.warning("please enter email")
        //     }
        //     if(pass ===''||pass===null){
        //         Toast.warning("please enter valid password")
        //     }
        // }
    }
  return (
    <div className="row">
     <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id="exampleEmail"
                placeholder="Enter email id..."
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                id="examplePassword"
                placeholder="Enter password..."
              />
            </FormGroup>

            <Button color="success" style={{ width: "100%" }}>
              Login
            </Button>
          </Form>
        </div>
        <div className="col-md-3"></div>
  </div></div>
  )
}

export default Login