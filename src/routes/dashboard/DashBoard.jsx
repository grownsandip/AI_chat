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
      <div className="texts">
        <div className="logo">
          <img src="./logo.png" alt=''/>
          <h1>AGI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src='./chat.png' alt=''/>
            <span>create a new chat</span>
          </div>
          <div className="option">
            <img src='./image.png' alt=''/>
            <span>analyze image</span>
          </div>
          <div className="option">
            <img src='./code.png' alt=''/>
            <span>help me with the code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type='text' placeholder='Ask me anything'/>
          <button>
            <img src='./arrow.png' alt=''/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashBoard
