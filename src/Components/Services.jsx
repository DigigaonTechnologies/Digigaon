import React from 'react'
import { motion } from "framer-motion";
import ScrollToTop from './SubComponents/ScrollToTop';

const services = [
  {
    id: 1,
    title: "UI/UX DESIGN",
    subtitle: "WE DESIGN",
    description:
      "We provide reliable IT services, specializing in software development and cloud solutions. Our expertise ensures secure, scalable, and innovative systems that empower businesses to achieve digital transformation and long-term growth.",
    image: "/s1.png", // put your image in public folder
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    subtitle: "WE DEVELOP",
    description:
      "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You.",
    image: "/s1.png", // put your image in public folder
  },
   {
    id: 3,
    title: "WEB DEVELOPMENT",
    subtitle: "WE DEVELOP",
    description:
      "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You.",
    image: "/s1.png", // put your image in public folder
  },
   {
    id: 4,
    title: "WEB DEVELOPMENT",
    subtitle: "WE DEVELOP",
    description:
      "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You.",
    image: "/s1.png", // put your image in public folder
  },
];


const OurClients=[
  {
    "id": 1,
    "name": "Tajne Construction",
    "industry": "Construction & Infrastructure",
    "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "logo": "s1.png"
  },
  {
    "id": 2,
    "name": "Elite Housekeeping Services",
    "industry": "Facility Management",
    "description": "Providing professional housekeeping and maintenance solutions for corporate, residential, and industrial clients with a focus on hygiene and efficiency.",
    "logo": "s1.png"
  },
  {
    "id": 3,
    "name": "Bobde Electricals",
    "industry": "Electrical & Energy Solutions",
    "description": "Experts in electrical installation, maintenance, and industrial automation, delivering reliable and safe power solutions.",
    "logo": "s1.png"
  },
  {
    "id": 4,
    "name": "Farmico Pvt. Ltd.",
    "industry": "Agriculture & AgroTech",
    "description": "Empowering farmers through technology-driven agriculture solutions and sustainable farming practices for a better tomorrow.",
    "logo": "s1.png"
  }
]

const Services = () => {
  return (
    <>
    <section className="w-full bg-white flex flex-col items-center py-16 px-5 md:px-16 overflow-hidden md:mb-[10vh]">
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
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row shadow-2xl p-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between gap-8`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-[80%] md:w-[30%] top-0 rounded-xl"
            />
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
        {services.map((service) => (
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
        <div className=" flex overflow-x-auto  md:ml-[10vw] space-x-8 snap-x snap-mandatory scrollbar-hide w-[100%] md:w-[80%]  px-10 py-10 mb-10 md:mb-[25vh]">
        {OurClients.map((service) => (
          <motion.div
            key={service.id}
            className="w-[80%] bg-white shadow-2xl p-5 flex-shrink-0 flex flex-col items-center justify-center text-center snap-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={service.logo}
              alt={service.logo}
              className="w-64 md:w-52 mb-5"
            />
            <p className="text-orange-500 font-bold uppercase text-sm mb-1 md:mb-3">
              {service.industry}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-5">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm md:hidden block">{service.description.slice(0,service.description.length/2)}...</p>
             <p className="text-gray-600 text-sm md:block hidden">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <ScrollToTop/>
    </>
  )
}

export default Services