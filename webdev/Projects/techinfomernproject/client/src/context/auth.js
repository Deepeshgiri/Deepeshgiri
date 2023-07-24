import { useState,useContext,createContext, useEffect  } from "react";
import axios from "axios";

const AuthContext = createContext()

const AuthProvider =({children}) =>{

const [Auth,setAuth]=useState({
    user:null,
    token:""
})
//default axiosS
axios.defaults.headers.common['Authorization']= Auth?.token
useEffect(()=>{
    const data = localStorage.getItem('auth')
    if (data){
        const parseData = JSON.parse(data)
        setAuth({
            ...Auth, user:parseData.user, token:parseData.token
        })
    }
},[])
return(
    <AuthContext.Provider value={[Auth,setAuth]}>
        {children}
    </AuthContext.Provider>
)}

//custom hook

const useAuth = ()=> useContext(AuthContext)

export {useAuth,AuthProvider}