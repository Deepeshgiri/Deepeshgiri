import React, { useState } from "react";
import Layout from "../../componets/Layout";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { toast } from "react-toastify";
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate= useNavigate()
  let [data , setData]= useState({
    name:"",
    email:'',
    phone:'',
    password:'',
    address:""
  })
  function handleInput(e){
    setData({...data, [e.target.name]:e.target.value})
  }
  async function handlesubmit(e){
    e.preventDefault()
    try{
      const res = await axios.post(`http://localhost:8500/api/v1/auth/register` ,data)
      if(res.data.success){

        
        toast.success("registration succesful")
        setTimeout(() => {
          navigate('/login')
        }, 2000);
        
        
      }else{
        toast.error(
          res.data.error
        )
      }
      
    }catch (error){
      console.log(error)
      toast.error("something went wrong")
    }
    
    
   
    console.log(data)
   
  }




  return (
    <Layout>
      <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Form style={{border:"green"}} onSubmit={handlesubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInput}
              autoComplete="off"
              id="name"
              placeholder="please enter your name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              onChange={handleInput}
              value={data.phone}
              id="phone"
              autoComplete="off"
              placeholder="please enter your phone number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={handleInput}
              value={data.email}
              id="email"
              autoComplete="off"
              placeholder="please enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={handleInput}
              value={data.password}
              id="password"
              placeholder="please enter your password"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label for="addres">address</Label>
            <Input type="text" name="address" id="address" onChange={handleInput} value={data.address} autoComplete="off"/>
          </FormGroup>

          <Button color="success" style={{fontSize:"20px", width:"100%"}}>Register</Button>
        </Form>
      </div>
      <div className="col-md-3"></div>
      </div>
    </Layout>
  );
}

export default Register;
