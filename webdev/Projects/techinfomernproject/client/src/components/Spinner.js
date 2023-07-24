import React, { useEffect, useState } from 'react'
import {useNavigate, useLocation}  from 'react-router-dom';

export const Spinner = () => {

    const location = useLocation()

    const [count,setCount]= useState(3)
    const navigate = useNavigate()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue)=> --prevValue)
        },1000)
        count ===0 && navigate('/login',{
            state:location.pathname
        })
        return()=> clearInterval(interval)
    },[count,navigate, location])
  return (
    <div className=' d-flex justify-content-center' style={{marginTop:"50vh"}}>
        <h3>redirecting ...!</h3><br/>
    <div className="spinner-grow text-primary" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="sr-only"></span>
</div>
    </div>
  )
}
