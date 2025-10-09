import React from 'react'
import { motion } from "framer-motion";
import ScrollToTop from './SubComponents/ScrollToTop';
import SlideBar from './SubComponents/SlideBar';
import data from '../../data.json'

const Services = () => {
  return (
    <>
    <section className="w-full bg-white flex  flex-col items-center py-16 px-5 md:px-16 overflow-hidden md:mb-[10vh] scroll-smooth">
      {/* ===== Section Header ===== */}
      <div className="text-center mb-10">
        <h3
          className=" relative  text-[#232121] text-2xl md:text-[4vw] tracking-tight leading-[1em] font-bold mb-[5vh] mt-[10vh] md:mt-[10vh] cursor-pointer"
          style={{
            lineHeight: "1",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Our Services
        </h3>
        <h2 className="text-2xl md:text-3xl md:mt-10 font-semibold text-gray-900" style={{fontFamily: 'sans-serif',  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",}}>
          What We Do
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
         Digigaon Technologies LLP provides IT solutions, software development, government procurement support, and financial compliance services, helping businesses and organizations operate efficiently, digitally, and in full regulatory compliance.
        </p>
      </div>

      {/* ===== Desktop Layout ===== */}
      <div className="hidden md:flex flex-col gap-20 w-full max-w-5xl">
        {data.services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row shadow-2xl p-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between gap-8`}
          >
            <div className='w-full overflow-hidden md:w-[40%] flex justify-center items-center'>
              <img
              src={service.image}
              alt={service.title}
              className=" w-full hover:scale-120 transition-transform duration-500 ease-in-out object-cover"
            />
            </div>
            <div className="w-full md:w-[60%] text-center md:text-left">
              <p className="text-orange-500 font-bold uppercase text-sm mb-2">
                {service.subtitle}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-shadow-2xs text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Mobile Side Scroll ===== */}
      <div className="md:hidden flex  overflow-x-auto space-x-8 snap-x snap-mandatory scrollbar-hide w-[100%] px-10 py-10">
        {data.services.map((service) => (
          <motion.div
            key={service.id}
            className=" w-[90%] bg-white shadow-2xl p-5 flex-shrink-0 flex flex-col items-center justify-center text-center snap-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-64 mb-5"
            />
            <p className="text-orange-500 font-bold uppercase text-sm mb-1">
              {service.subtitle}
            </p>
            <h3 className="text-xl font-bold shadow text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
        
    </section>
    <section className='px-5'>
           <div className="text-center mb-10">
        <h3
          className=" relative  text-[#232121] text-2xl md:text-[4vw] tracking-tight leading-[1em] font-bold mb-[5vh]  md:mt-[10vh] cursor-pointer"
          style={{
            lineHeight: "1",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Our Valued Clients
        </h3>
        
      </div>
        {/* ===== Mobile Side Scroll ===== */}
           <div className='w-[80%] h-[65vh] md:h-[90vh] md:mb-5  mx-auto'>
            <SlideBar  /></div>
    </section>
    <ScrollToTop/>
    </>
  )
}

export default Services