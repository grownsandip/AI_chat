import React, { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="./orbital.png" alt="" className="orbital"></img>
      <div className="left">
        <h1>AGI</h1>
        <h2>Leverage your creativity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          explicabo dicta ullam debitis,
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "./human1.jpeg"
                  : typingStatus === "human2"
                  ? "./human2.jpeg"
                  : "./bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Human1:We produce food for Mice",
                1000,
                () => {
                  setTypingStatus("human1");
                },
                "Bot:We produce food for Hamsters",
                1000,
                () => {
                  setTypingStatus("bot");
                },
                "Human2:We produce food for Guinea Pigs",
                1000,
                () => {
                  setTypingStatus("human2");
                },
                "Bot:We produce food for Chinchillas",
                1000,
                () => {
                  setTypingStatus("bot");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="./logo.png" alt=""/>
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
