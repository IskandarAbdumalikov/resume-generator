import React from "react";
import "./home.scss";
import Users from "../../components/users/Users";

const Home = () => {
  return (
    <div className="home">
      <div className="container hero">
        <div className="hero__left">
          <h1>
            Welcome to our website. You can easily download your favorite
            resume. "Click the button" to get started.
          </h1>
          <button>Get started</button>
        </div>
        <div className="hero__right">
          <img
            src="https://www.theladders.com/wp-content/uploads/resume-190916.jpg"
            alt=""
          />
        </div>
      </div>
      <Users/>
    </div>
  );
};

export default Home;
