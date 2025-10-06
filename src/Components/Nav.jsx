import { Link, NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";
import Sidebar from "./SubComponents/Sidebar";

const Nav = () => {
  return (
    <>
    
      <div className="nav fixed top-0 z-10 w-[100vw] min-h-[15vh] bg-[#D5DDE6] shadow-2xl shadow-[#D5DDE6]  flex items-center   justify-between px-2 md:px-10">
        <div className=" relative w-[40vw] h-[18vw] md:w-[15vw] md:h-[12vh]  rounded-md "><img className="w-full h-full object-cover  relative top-0" src={logo} alt="logo.png" /></div>
        <div className="sec gap-4 text-xl  font-semibold hidden md:flex text-[#000000b8] " >
          <NavLink 
            to="/"
            // style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>
           <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            AboutUs
          </NavLink>
          <NavLink to="/contect">ContectUs</NavLink>
        </div>
      </div>
      <Sidebar/>

    </>
  );
};

export default Nav;
