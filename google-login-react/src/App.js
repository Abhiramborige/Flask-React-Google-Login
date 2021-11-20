import React, { Fragment, useEffect, useState } from "react";
import Signin from "./components/SignIn/Signin";
import Loggedin from "./components/Loggedin";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const nav=useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    Axios.get(`${BACKEND_URL}/auth/google`, {
      headers: {
        "Access-Control-Allow-Origin": "* ",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    })
      .then((res) => {
        window.location.assign(res.data.auth_url);
      })
      .catch((err) => console.log(err));
    console.log(BACKEND_URL);
  };

  useEffect(()=>{
    if(localStorage.getItem('JWT')==null){
      const query = new URLSearchParams(window.location.search);
      const token=query.get('jwt')
      if(token){
        localStorage.setItem('JWT',token);
        return nav('/home')
      }
    }
  })

  return (
    <Routes>
      <Route
        exact
        path="/login"
        element={<Signin login={handleClick}></Signin>}
      />
      <Route exact path="/home" element={<Loggedin></Loggedin>} />
    </Routes>
  );
}

export default App;
