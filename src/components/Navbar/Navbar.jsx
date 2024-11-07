import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { createContext, useContext, useEffect, useState } from "react";
import { VisibilityContext } from "../Root/Root";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { location } = useContext(VisibilityContext);
  const { navCart, setNavCart } = useContext(VisibilityContext);
  const {navWish, setNavWish} = useContext(VisibilityContext);
  const { number, setNumber } = useContext(VisibilityContext);

  const styleColor = {
    backgroundColor:
      location.pathname === "/" ||
      location.pathname === "/home" ||
      location.pathname === "/upcoming" ||
      location.pathname === "/category/phones" ||
      location.pathname === "/category/tablets" ||
      location.pathname === "/category/laptops" ||
      location.pathname === "/category/smartWatches" ||
      location.pathname === "/category/accessories" ||
      location.pathname === "/category/speaker" ||
      location.pathname === "/category/All%20Products"
        ? "#9538E2"
        : "white",
    color:
      location.pathname === "/" ||
      location.pathname === "/home" ||
      location.pathname === "/upcoming" ||
      location.pathname === "/category/phones" ||
      location.pathname === "/category/tablets" ||
      location.pathname === "/category/laptops" ||
      location.pathname === "/category/smartWatches" ||
      location.pathname === "/category/accessories" ||
      location.pathname === "/category/speaker" ||
      location.pathname === "/category/All%20Products"
        ? "white"
        : "black",
  };



  const links = (
    <>
      <li className="text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="./upcoming">Upcoming</NavLink>
      </li>
    </>
  );


  const cart = (
    <>
      <div className="flex-none mr-3">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{navCart}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card dropdown-content z-[1] mt-3 h-[15em] w-[15em] shadow flex-row justify-between items-center text-[#202020] backdrop-blur-md bg-[#ffffff4b]"
          >
            <div className="card-body w-full">
              <span className="text-lg font-bold text-gray-700">
                {" "}
                Items: {navCart}
              </span>
              <span className="font-semibold text-[#8423df]">
                Subtotal: {number}{" "}
              </span>
              <div className="card-actions">
                <NavLink
                  className="btn btn-primary btn-block text-lg text-white"
                  to="home/dashboard"
                >
                  View Cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-ghost btn-circle">
        <div className="indicator">
          <FontAwesomeIcon className="text-3xl" icon={faHeart} />
          <span className="badge badge-sm indicator-item">{navWish}</span>
        </div>
      </a>
    </>
  );

  return (
    <div
      style={styleColor}
      className="navbar mb-0 rounded-t-3xl text-white p-8"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FontAwesomeIcon className="text-2xl" icon={faBars} />
          </div>
          <ul
            tabIndex={0}
            className="menu  dropdown-content rounded-box z-[100] mt-3 w-[18em] h-[20em] justify-evenly items-center 
                      p-2 shadow space-x-2  text-[#202020] backdrop-blur-md bg-[#ffffff4b] border-2 border-gray-600"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-3xl">Gears</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-2 ">{links}</ul>
      </div>
      <div className="navbar-end">{cart}</div>
    </div>
  );
};

export default Navbar;
