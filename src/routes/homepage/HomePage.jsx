import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage">
      <img src="./orbital.png" alt="" className="orbital"></img>
      <div className="left">
        <h1>AGI</h1>
        <h2>Leverage your creativity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          explicabo dicta ullam debitis, corrupti at dolores molestiae assumenda
          deserunt, reprehenderit voluptatibus culpa amet repudiandae, voluptate
          quas nihil mollitia eaque nostrum.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.png" alt="" className="bot"></img>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
