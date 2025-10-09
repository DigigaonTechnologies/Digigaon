import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);



   useEffect(() => {
    
    const toggleVisibility =()=>{
       const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);

      // visible after 300px
      if(window.pageYOffset>300){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", toggleVisibility);
    return()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            bahavior:"smooth"
        })
    }

     const radius = 20;
     const circumference = 2 * Math.PI * radius;
     const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
        {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "5vh",
            right: "2vw",
            cursor: "pointer",
            zIndex: 1000,
          }}
          onClick={scrollToTop}
        >
          <svg width="60" height="60">
            {/* Background Circle */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="#ddd"
              strokeWidth="5"
              fill="none"
            />
            {/* Progress Circle */}
            <circle
              cx="30"
              cy="30"
              r={radius}
              stroke="#007bff"
              strokeWidth="5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.25s linear", mixBlendMode: "difference" }}
            />
            {/* Arrow Icon */}
            <text
              x="30"
              y="35"
              textAnchor="middle"
              fontSize="20"
              fontWeight="bold"
              fill="#FF6900"
            >
              ↑
            </text>
          </svg>
        </div>
      )}
    </>
     
  )
}

export default ScrollToTop