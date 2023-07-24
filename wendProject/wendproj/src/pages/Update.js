import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";

function Update() {


  const [id,setId]=useState()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()
  

   useEffect(()=>{
      setId(localStorage.getItem("id"))
      setName(localStorage.getItem("name"))
      setEmail(localStorage.getItem("email"))  
   },[])

   function handleSubmit(e)
   {
      e.preventDefault()
      axios.put(`http://localhost:3333/users/${id}`,{
          name:name,
          email:email,
          password:password
      }).then(()=> navigate('/allusers'))
   }

  
      
  return (
    <div className="row">
     <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                id="exampleName"
                placeholder="Enter name..."
              />
            </FormGroup>

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
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                id="examplePassword"
                placeholder="Enter password..."
              />
            </FormGroup>

            <Button color="success" style={{ width: "100%" }}>
              Update
            </Button>
          </Form>
        </div>
        <div className="col-md-3"></div>
  </div></div>
  )
}

export default Update