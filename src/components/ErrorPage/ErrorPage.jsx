import React from "react";
import "./error.css";
import { NavLink } from "react-router-dom";
import errorPic from "../../assets/404.png";

const ErrorPage = () => {
  return (
    <section className="container555">
      <div className="error">
        <h1>Uh Ohh!</h1>
        <p>We couldn't find the page that you're looking for :(</p>
        <div className="cta">
          <NavLink className="cta-back" to="/home">
            Home
          </NavLink>
        </div>
      </div>
      <img src={errorPic} alt="home image" className="hero-img" />
    </section>
  );
};

export default ErrorPage;
