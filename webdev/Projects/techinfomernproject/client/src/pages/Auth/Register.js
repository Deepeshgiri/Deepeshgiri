import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios'


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
const navigate = useNavigate()
  

// form submit function
const handleSubmit= async (e)=>{
    e.preventDefault()
   try {
    const res = axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,phone,address,password})
    if((await res).data.success){
        toast.success((await res).data.message)
        navigate('/login')
    }else{
        toast.error((await res).data.error)
    }
    
   } catch (error) {
    console.log(error)
    toast.error("something went wrong")
    
   }
}

  return (
    <Layout className="container">
      <div className="row">
        <div className="col md-3"></div>
        <div className="col  md-3">
          <form className="row mt-3 g-3" onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Name: </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="please enter your name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Email: </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  value={email}
                  required
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="please enter your email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Password: </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="please enter your password"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">
                Address: 
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="addresss"
                  placeholder="please enter your address"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label  className="col-sm-2 col-form-label">
                Phone: 
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  placeholder="please enter your phone number"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label className="form-check-label">
                  By checking tick mark you agree our{" "}
                  <Link to="policy">Policy</Link>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="col md-3"></div>
      </div>
    </Layout>
  );
}

export default Register;
