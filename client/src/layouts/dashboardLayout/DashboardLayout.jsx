import React, { useEffect } from 'react'
import"./dashboardLayout.css";
import { Outlet, useNavigate } from 'react-router-dom';
import ChatList from '../../components/chatlist/ChatList';
import { useAuth } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

  return (
    <QueryClientProvider client={queryClient}>
    <div className='dashboardLayout'>
      <div className="menu"><ChatList/></div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
    </QueryClientProvider>
  )
}

export default DashboardLayout
