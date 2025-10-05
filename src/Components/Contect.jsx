import React from "react";
import ContectCard from "./SubComponents/ContectCard";
import Form from "./SubComponents/Form";
import ScrollToTop from "./SubComponents/ScrollToTop";

const Contect = () => {
  return (
    <>
      <section className="relative  flex-col w-[100vw] min-h-[100vh] flex justify-center items-center py-16 px-6">
        <h3
          className=" relative  text-[#232121] text-2xl md:text-[4vw] tracking-tight leading-[1em] font-bold mb-[5vh] mt-[10vh] md:mt-[10vh] cursor-pointer"
          style={{
            lineHeight: "1",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Contect US
        </h3>
        <p className="relative text-sm text-black w-[70vw] md:w-[30vw] text-center leading-5 ">
          We are here to help and answer any question you might here. We look
          forward to hearing from you.
        </p>
        <div className="w-[85%] mt-10 grid grid-cols-1 lg:grid-cols-2 border-1 shadow-2xl border-black">
          <div className=" w-full flex flex-col items-center justify-center p-5 bg-[#1C2430] ">
            <ContectCard
             className="object-cover"
              key={1}
              id={1}
              text1="Call us"
              text2="+918989898"
              paths="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5V18a1.5 1.5 0 00-1.5-1.5h-2.25A11.25 11.25 0 016.75 6.75V4.5A1.5 1.5 0 005.25 3h-2.25A1.5 1.5 0 001.5 4.5v2.25z"
            />
          </div>

          <div className="bg-white flex items-center justify-center ">
            <img src="/c1.jpeg" alt="Image 1" />
          </div>

          <div className="bg-white flex items-center justify-center rounded shadow">
            <img  className=" object-cover w-full h-full " src="/c2.jpeg" alt="Image 2" />
          </div>
          <div className=" w-full flex flex-col items-center justify-center p-5 bg-[#1C2430] ">
            <ContectCard
              key={2}
              id={2}
              text1="Write Us"
              text2="Gmail:- digigaontechnologies@gmail.com"
              paths="M16.862 4.487l1.687-1.688a2.25 2.25 0 113.182 3.182L10.5 17.213 6.75 18l.787-3.75L16.862 4.487z"
            />
          </div>
        </div>
        <div className="h-10 md:h-25 relative top-5 border-l-2 border-dashed border-black"></div>
        <h3
          className=" relative  text-[#232121] text-2xl md:text-[4vw] tracking-tight leading-[1em] font-bold  mt-7 md:mt-[7vh] cursor-pointer"
          style={{
            lineHeight: "1",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Get in Toch
        </h3>
         <div className="h-10 md:h-25 relative top-5 border-l-2 border-dashed border-black"></div>

         {/* form */}
            <div className="w-[98%] overflow-hidden mt-10 grid grid-cols-1 md:grid-cols-2 shadow-2xl  justify-around items-center rounded-xl">
                <div className=" w-full overflow-hidden   h-full"><img className=" md:h-[85vh]  h:[50vh] " src="/Rectangle 22.png" alt="" /></div>
                <div className="md:h-[85vh] h:[50vh]"><Form/></div>
            </div>
         <div className="h-10 md:h-25 relative top-5 border-l-2 border-dashed border-black"></div>
      </section>
      <ScrollToTop/>
    </>
  );
};

export default Contect;
