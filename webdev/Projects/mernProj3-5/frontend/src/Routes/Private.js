import { useEffect, useState } from "react"

import { useAuth } from "../context/auth"
import { Outlet } from "react-router-dom"
import axios from "axios"
import Spin1 from "../Spin1"
import { Spinner } from "reactstrap"
import Layout from "../componets/Layout"

export function Private(){
    let [ok,setOk] = useState()
    let[auth,setAuth]= useAuth()

    useEffect(()=>{
        const authcheck = async ()=>{
            let result = await axios.get(`http://localhost:8500/api/v1/auth/register` ,{
                headers:{
                    "Authorization":auth?.token
                }
            })
            if(result.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token){
            authcheck()
        }

    },[])

    return(
        <div>
            {ok?<Outlet/>:<Layout><Spin1/></Layout>}
        </div>
    )
}