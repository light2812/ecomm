import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth.js";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner.js";
export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const adminCheck = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}/admin-auth`);
      console.log(res);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) adminCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
