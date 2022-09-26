import React, { useEffect } from 'react'
import logo from "../assets/images/logo6.png"
import {useNavigate} from "react-router-dom";

export default function Splash() {
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("home");
    },3000 )
  },[])
  return (
    <div 
    className="items-center justify-center flex flex-col" 
    style={{height:"100vh"}}>
      <img src={logo}  className="w-32 h-32" />
      <button className="animate-spin">
        <ion-icon name="refresh-outline"></ion-icon>
      </button>
      

    </div>
  )
}
