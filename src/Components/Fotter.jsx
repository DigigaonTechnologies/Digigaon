import { FaFacebookF, FaTwitter,FaPhoneAlt, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";


import image from "../assets/logo.png";

import React from 'react'

const Fotter = () => {
  return (
    <div className="relative w-full text-white">
      {/* Floating Logo */}
      <div className="absolute z-10 hover:scale-120 transition-all -top-5 left-1/2 -translate-x-1/2 w-[130px] h-[60px] rounded bg-white flex justify-center items-center">
        <img className=" object-cover"  src={image} alt="logo" />
      </div>

      {/* Footer Container */}
      <div className="relative w-full bg-[#1c2430] clip-slant flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 pt-16 pb-6">
        
        {/* Company Name */}
        <h2 className="font-semibold hidden md:block text-lg sm:text-xl lg:text-2xl mt-6 hover:scale-110 transition-all cursor-pointer text-center "  >
          DIGIGAON TECHNOLOGIES LLP
        </h2>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[7vw] mt-10 w-full lg:w-auto justify-center items-center lg:items-start">
          
          {/* About Company */}
          <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[22vw] text-center lg:text-left">
            <h1 className="font-bold p-1 border-[#FF6900]   border-b-2 w-max mx-auto lg:mx-0 text-base sm:text-lg lg:text-[1.5vw]">
              ABOUT COMPANY
            </h1>
            <p className="text-[0.8rem] relative  leading-4 font-light mt-10 md:mt-3 text-gray-300">
             Digigaon Technologies LLP is a dynamic IT solutions and service provider dedicated to delivering innovative and reliable digital solutions. Established with the vision of bridging technology with everyday needs, we offer a diverse range of services tailored to businesses, individuals, and government sectors.
            </p>
          </div>

          {/* Contact / Number */}
          <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[15vw] text-center lg:text-left">
            <h1 className="font-bold p-1 border-[#FF6900] border-b-2 w-max mx-auto lg:mx-0 text-base sm:text-lg lg:text-[1.5vw]">
              CONTECT
            </h1>
            <h1 className="mt-3 flex gap-2 "><span className="bg-[#FF6900] p-1"><FaPhoneAlt/></span><span className="hover:scale-110 transition-all hover:text-orange-400">+91 9131957450</span> </h1>
            <h1 className="mt-1.5 flex gap-2"><span className="bg-[#FF6900] p-1"><SiGmail/></span> <a className="hover:scale-110 transition-all hover:text-orange-400" href="mailto:digigaontechnologies@gmail.com">digigaontechnologies@gmail.com</a></h1>
            <h1 className="mt-1.5 w-max flex gap-2"><span className="bg-[#FF6900] p-1"><FaLocationDot/></span> <span className="hover:scale-110 transition-all hover:text-orange-400">Sausar , Madhyapradesh 480106, IN</span></h1>
            {/* digigaontechnologies@gmail.com */}
          </div>

          {/* Social Links */}
          <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[15vw] text-center lg:text-left">
            <h1 className="font-bold p-1 border-b-2 border-[#FF6900] w-max mx-auto lg:mx-0 text-base sm:text-lg lg:text-[1.5vw]">
              SOCIAL CONNECTS
            </h1>
            <div className="flex justify-center lg:justify-start gap-5 mt-3 text-sm">
              <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-120 transition" />
              <FaTwitter className="text-sky-400 cursor-pointer hover:scale-120 transition" />
              <FaGoogle className="text-red-500 cursor-pointer hover:scale-120 transition" />
              <FaLinkedinIn className="text-blue-500 cursor-pointer hover:scale-120 transition" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs mt-10 text-center text-gray-400 px-4">
          © 2021 DigiGaon Technologies LLP. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  )
}

export default Fotter