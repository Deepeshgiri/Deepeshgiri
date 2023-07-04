import { useState,useContext,createContext  } from "react";

const AuthContext = createContext()

const AuthProvider =({children}) =>{

const [Auth,setAuth]=useState({
    user:null,
    token:""
})

return(
    <AuthContext.Provider value={[Auth,setAuth]}>
        {children}
    </AuthContext.Provider>
)}

//custom hook

const useAuth = ()=> useContext(AuthContext)

export {useAuth,AuthProvider}