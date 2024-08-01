import React from 'react'
import"./dashboardLayout.css";
import { Outlet } from 'react-router-dom';
import ChatList from '../../components/chatlist/ChatList';
const DashboardLayout = () => {
  return (
    <div className='dashboardLayout'>
      <div className="menu"><ChatList/></div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout
