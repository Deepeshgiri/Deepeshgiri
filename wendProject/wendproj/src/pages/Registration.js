import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios'

export default function Registration() {
  const [data,setData] = useState(
    {
      name:"",
      email:"",
      password:""
    }
  )
  function handleInput(e)
  {
      setData({...data,[e.target.name]:e.target.value})
  }
  function handleSubmit(e)
  {
    
    e.preventDefault()
    
  axios.post(`http://localhost:3333/users`, {
    name:data.name,
    email:data.email,
    password:data.password
  }).then(()=>{
    console.log(data)
    setData({name:"",email:"",password:""})
  })
    
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
          <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInput}
                id="exampleName"
                placeholder="Enter name..."
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                id="exampleEmail"
                placeholder="Enter email id..."
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={handleInput}
                value={data.password}
                id="examplePassword"
                placeholder="Enter password..."
              />
            </FormGroup>

            <Button color="success" style={{width:"100%"}}>Submit</Button>
          </Form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}