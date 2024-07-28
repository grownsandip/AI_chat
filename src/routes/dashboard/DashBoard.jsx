import React, { useEffect } from 'react'
import "./DashBoard.css";
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
const DashBoard = () => {
  const {userId,isLoaded}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    if(isLoaded && !userId){
      navigate("/sign-in");
    }
  },[userId,isLoaded,navigate]);
  if(!isLoaded)return "Loading...";
  return (
    <div className='dashboard'>
      Dashboard
    </div>
  )
}

export default DashBoard
