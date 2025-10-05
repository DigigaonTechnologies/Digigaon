import React from "react";
import imageUrl from "../Galary/home.png";
import imageUr2 from "../Galary/mouse.png";
import line1 from "../Galary/Line6.png";
import line2 from "../Galary/Line7.png";
import Scard from "./Scard"; // Ensure you have an image at this path or update the path accordinglyimport line1 from "../Galary/Line6.png";
import data1 from "../../data.json";
import PlanAnDev from "./PlanAnDev";
import CountL from "./SubComponents/CountL";
import ScrollToTop from "./SubComponents/ScrollToTop";
import ContectCard from "./SubComponents/ContectCard";


const Home = () => {
  // const isEven = steps.id % 2 === 0;

  
   

  return (
    <div className=" relative min-w-full min-h-[100vh]  bg-white text-center">
      {/* Hero Section */}
      <section
      >
         <div
         className="relative w-full min-h-[100vh] md:h-[140vh]  bg-cover bg-center py-20 flex flex-col items-center after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:opacity-30"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover", // cover ya contain
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></div>
        <div className=" absolute top-[35vh] left-1/2 -translate-x-1/2 ">
          <h3
            className="text-white text-[10vw] md:text-[3rem] font-semibold "
            style={{
              lineHeight: "1",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              // stroke: "black"
              WebkitTextStroke: "1px black",
              // background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to
          </h3>
          <h1
            className="text-[16vw] text-[#1F2732] tracking-normal  font-bold "
            style={{
              lineHeight: "1",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              // background:"#3F4E63",
              // WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
            }}
          >
            DIGIGAON
          </h1>
          <h2
            className=" text-[10vw] md:text-[3rem] font-bold text-white "
            style={{
              lineHeight: "1",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              WebkitTextStroke: "1px black",
              // background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              
            }}
          >
            TECHNOLOGIES LLP
          </h2>
        </div>
        {/* Center circle (0) */}
        <div className="absolute md:top-[130vh] top-[94vh] z-10  gap-10 flex flex-col items-center left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-1  shadow-lg flex items-center justify-center text-lg font-bold">
            <img src={imageUr2} alt="" />
          </div>
          <div className=" h-15 md:h-20 relative top-5 border-l-2 border-dashed border-black"></div>
        </div>
      </section>

      <section className="bg-white relative py-16 px-4 md:px-8 text-center flex-col items-center justify-center">
        <h3
          className=" relative  text-xl text-[#232121] md:text-[5vw]  mt-4 tracking-tight  font-bold mb-5"
          style={{
            lineHeight: "1",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Services we offer to <br /> transform your business
        </h3>
        <div className="md:h-20 h-15 w-0 relative left-[50%] border-l-2 border-dashed border-black mb-5 "></div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* UI/UX Design */}
          {data1.service.map((item) => (
            <Scard
              key={item.id}
              imageUr={item.imageUr}
              title={item.title}
              description={item.description}
            ></Scard>
          ))}
        </div>
      </section>
      <section className=" relative bg-[#1F2732]   flex flex-col items-center justify-center ">
        <h3
          className=" relative mt-10 text-xl text-[#ffffff] md:text-[5vw]  tracking-tight font-bold mb-5"
          style={{
            lineHeight: "1.2",
            textShadow: "0 1px 3px rgba(255, 255, 255, 0.6)",
          }}
        >
          Our 4 Step Process to <br /> Deliver Excellence
        </h3>
        <div className="absolute z-10 left-[33%]  top-[27%] ">
          <img src={line1} className=" relative h-[16vw]" alt="" />
        </div>
        <div className="absolute z-10 left-[65%]  top-[48.5%] ">
          <img src={line2} className=" relative h-[16vw]" alt="" />
        </div>
        <div className="absolute z-10 left-[33%]  top-[70.3%] ">
          <img src={line1} className=" relative h-[16vw]" alt="" />
        </div>
        {data1.steps.map((step) => (
          <div
            className={`w-full relative  bg-[#1F2732]   flex  items-center ${
              step.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } `}
          >
            <CountL
              className="w-[40%] flex-shrink-0"
              key={step.id}
              id={step.id}
              title={step.title}
              accent={step.accent}
            ></CountL>
            <PlanAnDev
              className="w-[60%] flex-1"
              key={step.id}
              id={step.id}
              image={step.image}
              description={step.description}
              accent={step.accent}
            >
              {" "}
            </PlanAnDev>
          </div>
        ))}
      </section>
      <section className="flex flex-col items-center justify-center py-16 px-6">
        {/* Title */}
        <h3
          className=" relative   text-xl text-[#232121] md:text-[5vw]  tracking-tight leading-[1em] font-bold mb-[15vh] cursor-pointer"
          style={{
            lineHeight: "1",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Get in Toch
        </h3>

        {/* Cards Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-10 relative mb-[15vh]">
          {/* Divider line with dashes */}
          <div className="hidden md:block absolute border-l-2 border-dashed border-gray-400 h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Call Us Card */}
          <div className="w-56 md:w-72">
         <ContectCard key={1} id={1} text1={"Call us"} text2={"+918989898"} paths={"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5V18a1.5 1.5 0 00-1.5-1.5h-2.25A11.25 11.25 0 016.75 6.75V4.5A1.5 1.5 0 005.25 3h-2.25A1.5 1.5 0 001.5 4.5v2.25z"} />
          </div>

          {/* Write Us Card */}
          <div className="w-56 md:w-72">
          <ContectCard key={2} id={2} text1={"Write Us"} text2={"Gmail:- digigaontechnologies@gmail.com"} paths={"M16.862 4.487l1.687-1.688a2.25 2.25 0 113.182 3.182L10.5 17.213 6.75 18l.787-3.75L16.862 4.487z"} />
          </div>
        </div>
      </section>
      <ScrollToTop />
    </div>
  );
};

export default Home;
