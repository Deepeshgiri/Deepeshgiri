import react, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  const [Auth,setAuth] = useAuth()
 
  const handleSubmit = async (e) => {

    e.preventDefault()
    try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
    if(res && res.data.success){
      setAuth({
        user: res.data.user,
        token:res.data.token
      })
        toast.success("logged in success")
        navigate('/')
    
    }else{
        toast.error(res.data.error)
        console.log(res.data.error)
    }
    
        
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong")
        
    }
  };

  return (
    <Layout className="container">
      <div className="row">
        <div className="col md-3"></div>
        <div className="col  md-3">
          <h2 className="p-2">LOG IN FORM</h2>
          <form
            className="row mt-3 p-5  g-3"
            onSubmit={handleSubmit}
            style={{ border: "2px solid black" }}
          >
            <div className="row mb-3">
              <label className="col-sm-3 col-form-label">Email: </label>
              <div className="col-sm-9">
                <input
                name="email"
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
              <label className="col-sm-3 col-form-label">Password: </label>
              <div className="col-sm-9">
                <input
                name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="please enter your password"
                />
              </div>
            </div>
            
              <div className="mx-auto" >
               
                <button className="btn btn-secondary col-sm-3" onClick={handleSubmit}>Login</button>

              
              
            </div>
          </form>
        </div>
        <div className="col md-3"></div>
      </div>
    </Layout>
  );
};

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login
