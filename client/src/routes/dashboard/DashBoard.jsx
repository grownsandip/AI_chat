import React, { useEffect } from 'react'
import "./DashBoard.css";
// import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DashBoard = () => {
  const queryClient=useQueryClient()
  const navigate=useNavigate()
  const mutation=useMutation({
    mutationFn:(text)=>{
     return  fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
      method: "POST",
      credentials:"include",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }).then((res)=>res.json());
    },
    onSuccess:(id)=>{
      queryClient.invalidateQueries({queryKey:['userChats']})
      navigate(`/dashboard/chats/${id}`)
    }
  })

  const handleSubmit= async (e)=>{
     e.preventDefault();
     const text=e.target.text.value;
     if(!text)return
     mutation.mutate(text)
  }
  // const navigate=useNavigate();
  // useEffect(()=>{
  //   if(isLoaded && !userId){
  //     navigate("/sign-in");
  //   }
  // },[userId,isLoaded,navigate]);
  // if(!isLoaded)return "Loading...";
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
        <form onSubmit={handleSubmit}>
          <input type='text' name="text" placeholder='Ask me anything'/>
          <button>
            <img src='./arrow.png' alt=''/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashBoard
