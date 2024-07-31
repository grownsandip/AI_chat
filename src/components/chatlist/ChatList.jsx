import React from 'react'
import "./chatList.css";
import { Link } from 'react-router-dom';
const ChatList = () => {
  return (
    <div className='chatlist'>
      <span className='title'>DASHBOARD</span>
      <Link to="/dashboard">create a new chat</Link>
      <Link to="/">Explore AGI</Link>
      <Link to="/">Contact</Link>
      <hr/>
      <div className="list">
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
        <Link to="/">My chat title</Link>
      </div>
      <hr/>
      <div className="upgrade">
        <img src='./logo.png' alt=""/>
        <div className="texts">
            <span>Upgrade to pro plan</span>
            <span>get access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList
