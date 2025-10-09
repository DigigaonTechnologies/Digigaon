import { Link, NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/logo.png";
import Sidebar from "./SubComponents/Sidebar";
import { hover } from "framer-motion";

const Nav = () => {
  return (
    <>
    
      <div className="nav fixed top-0 z-[999] w-[100vw] min-h-[15vh] bg-[#375f8836]  flex items-center backdrop-blur-lg  justify-between px-2 md:px-10">
        <div className=" relative w-[40vw] h-[18vw] md:w-[15vw] md:h-[12vh] hover:scale-120 transition-transform duration-200  ease-in-out  rounded-md "><img className="w-full h-full object-cover  relative top-0" src={logo} alt="logo.png" /></div>
        <div className="sec gap-6  h-10 text-xl font-semibold  hidden md:flex text-[#000000b8] ">
          <NavLink  className={hover ? "hover:text-[#FF6900] hover:scale-120 transition-all hover:border-b-2":""}
            to="/"
            // style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={hover ? "hover:text-[#FF6900] hover:scale-120 transition-all hover:border-b-2 ":""}
          >
            Services
          </NavLink>
           <NavLink
            to="/about"
            className={hover ? "hover:text-[#FF6900] hover:scale-120 transition-all hover:border-b-2":""}
          >
            AboutUs
          </NavLink>
          <NavLink
          className={hover ? "hover:text-[#FF6900] hover:scale-120 transition-all hover:border-b-2":""}
           to="/contect">ContactUs</NavLink>
        </div>
      </div>
      <Sidebar/>

    </>
  );
};

export default Nav;
