import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { createContext, useContext, useEffect, useState } from "react";
import { VisibilityContext } from "../Root/Root";



const Navbar = () => {

  const [length , setLength] = useState(0)
  const {location} = useContext(VisibilityContext)

  const styleColor ={
    backgroundColor: location.pathname  === "/" || location.pathname  === "/home" || location.pathname  === "/upcoming" ? "#9538E2" : "white",
    color: location.pathname === "/" || location.pathname === "/home" || location.pathname === "/upcoming" ? "white" : "black",
    
  }
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("dashboard"))
    if (data === null) {
      return
    }
    else{
      setLength(data)
    }
  },[])


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
              <span className="badge badge-sm indicator-item">{length.length}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-gray-600"> Items</span>
              <span className="text-info">Subtotal: </span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-ghost btn-circle">
        <FontAwesomeIcon className="text-3xl" icon={faHeart} />
      </a>
    </>
  );

  return (
    <div style={styleColor} className="navbar   mb-0 rounded-t-3xl text-white p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-2"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-3xl">Gears</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      <div className="navbar-end">{cart}</div>
    </div>
  );
};

export default Navbar;
