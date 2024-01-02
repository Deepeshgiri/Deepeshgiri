import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../Spinner";

export default function PrivateRoute() {
  
  const [ok, setOk] = useState(false);
  const [Auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`/api/v1/auth/user-auth`, {
        headers:{
          "Authorization": Auth?.token
        }
      });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (Auth?.token) authCheck();
  }, [Auth?.token]);

  return ok ? <Outlet></Outlet> :<Spinner/>;
}