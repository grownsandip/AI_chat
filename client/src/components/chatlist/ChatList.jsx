import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repodata"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  return (
    <div className="chatlist">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">create a new chat</Link>
      <Link to="/">Explore AGI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "loading..."
          : error
          ? "Something went wrong"
          : data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <img src="./logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to pro plan</span>
          <span>get access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
