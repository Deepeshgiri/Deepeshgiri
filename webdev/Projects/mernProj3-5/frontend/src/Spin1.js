import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap'
import {  useLocation, useNavigate } from 'react-router-dom';

function Spin1() {

    const [count,setCount]= useState(7)

    const location = useLocation()
    const navigate=useNavigate()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((count)=>--count)},1000
        )
        count===0 && navigate('/login',{state:location.pathname})
        return()=>clearInterval(interval)
    },[count, navigate,location])

  return (
    
    <>
        
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh" }}>
    <h1>Redirecting you in <h1 className="d-flex flex-column justify-content-center align-items-center" style={{fontSize:50 }}>{count}</h1></h1>
      <div className="spinner-border" role="status">

        <span className="sr-only"></span>
        
      </div>
    </div>
    </>
  )
}

export default Spin1