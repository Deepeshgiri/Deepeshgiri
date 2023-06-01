import React from "react";
import Layout from "../../componets/Layout";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function Register() {
  return (
    <Layout>
      <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Form style={{border:"green"}}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
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
              id="password"
              placeholder="please enter your password"
              autoComplete="off"
            />
          </FormGroup>
          <FormGroup>
            <Label for="addres">address</Label>
            <Input type="textarea" name="address" id="address"  autoComplete="off"/>
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
