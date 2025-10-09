import React from "react";
import { FaBrain, FaLightbulb, FaClock } from "react-icons/fa";
import StrategCard from "./SubComponents/StrategCard";
import data from "../../data.json";
import Button from "./SubComponents/Button";
import ScrollToTop from "./SubComponents/ScrollToTop";
import AnimatedText from "./SubComponents/AnimatedText";
import AnimatedText2 from "./SubComponents/AnimatedText2";
import AnimatedText3 from "./SubComponents/AnimatedText3";

const About = () => {
  return (
    <>
      <section className="w-full flex flex-col scroll-smooth items-center justify-center py-12 px-4 md:px-16 bg-white text-center">
        {/* ABOUT US HEADER */}
        <AnimatedText>
        <h2
          className="text-3xl text-black md:mt-[10vh] md:text-4xl font-extrabold mb-2 tracking-tight"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          ABOUT US
        </h2>
        </AnimatedText>
        <AnimatedText3>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          CipherEleven– Committed to Creating Successful <br /> Entrepreneurs
          and Brands!!!
        </p>
        </AnimatedText3>

        {/* Divider Line */}
        <div className="h-10 md:h-15 md:mb-5 relative  border-l-2 border-dashed border-black"></div>

        {/* INTRODUCTION CARD */}
        <div className="relative bg-white w-full md:w-[80%] rounded-xl overflow-hidden shadow-2xl">
          <img
            src="/office-bg.jpg" // 👈 replace with your image in public folder
            alt="Office Background"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-6 text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              A brief introduction what we do
            </h3>
            <p className="max-w-3xl text-sm md:text-base leading-relaxed mb-6">
              We offer full-funnel digital marketing, web design & development
              services to help businesses gain a competitive edge. We leverage
              data-driven digital marketing and UX/UI solutions to nurture
              customer journeys and enable enterprises to augment their brand
              reach and engagement while achieving growth in quality demand
              generation.
            </p>
            <Button type1={"submit"} text1={"View portfolio"}/>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-10 md:h-15 md:mt-5 md:mb-5 relative  border-l-2 border-dashed border-black"></div>

        {/* WHY WE ARE HERE SECTION */}
        <div className="max-w-4xl text-center">
          <AnimatedText2>
          <h3
            className="text-2xl text-black md:text-3xl font-bold mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Why are we here ?
          </h3>
          </AnimatedText2>
          <p className="text-gray-700 text-sm md:text-base leading-5.5 mb-4">
            Launched in 2018 by a seasoned and close-knit team of technocrats,
            marketing gurus, and sales professionals, CipherEleven has assisted
            150+ SMEs, Startups, and Enterprises across the globe to build,
            strengthen, and transform their digital footprints in the
            competitive marketplace.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-5.5">
            We specialize in designing customer-centric, data-driven, and
            growth-oriented marketing and software solutions to help businesses
            improve their brand presence and reach, achieve growth in quality
            demand generation, nurture their customer journey, improve
            conversion, sales & revenues, and gain a competitive edge.
          </p>
        </div>
      </section>
      {/* OUR VISION & WHY CHOOSE US SECTION */}
      <section className="w-full flex flex-col items-center justify-center bg-white">
        {/* OUR VISION */}
        <div className="relative w-full flex flex-col items-center justify-center py-10 px-4 md:px-16">
          <div className="relative bg-white w-full md:w-[80%] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/office-bg.jpg" // 👈 replace with your image
              alt="Office background"
              className="w-full h-[100px] md:h-[200px] object-cover"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col justify-center px-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-800 text-sm md:text-base max-w-3xl leading-relaxed">
                We seek to create innovative yet profitable solutions for
                businesses that spell SUCCESS.
              </p>
            </div>
          </div>
        </div>
        {/* OUR MISSION */}
        <div className="relative w-full flex flex-col items-center justify-center py-10 px-4 md:px-16">
          <div className="relative bg-white w-full md:w-[80%] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/office-bg.jpg" // 👈 replace with your image
              alt="Office background"
              className="w-full h-[100px] md:h-[200px] object-cover"
            />
            <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col justify-center px-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-800 text-sm md:text-base max-w-3xl leading-relaxed">
                We seek to create innovative yet profitable solutions for
                businesses that spell SUCCESS.
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-10 md:h-15 md:mt-5 md:mb-5 relative  border-l-2 border-dashed border-black"></div>

        {/* WHY CHOOSE SECTION */}
        <div className="w-full bg-[#1F2732] text-white py-12 px-6 md:px-16 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Why choose Digigaon ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl">
            {/* Cards  */}
            {data.StrategicCard.map(
              ({ id, image, title, description, accent }) => (
                <StrategCard
                  key={id}
                  image={image}
                  title={title}
                  description={description}
                  accent={accent}
                />
              )
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-12 px-4 md:px-16 bg-white text-center">
          <AnimatedText2>
          <h2
            className="text-2xl text-black md:text-3xl font-bold mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Life At Digigaon
          </h2>
          </AnimatedText2>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            We believe in thinking outside the box. The Team comes up with a
            brand-new vision and creative solution to every new study of the
            requirement. We believe in thinking outside the box. The Team comes
            up with a brand-new vision and creative solution to every new study
            of the requirement
          </p>
        </div>
      </section>
      <ScrollToTop/>
    </>
  );
};

export default About;
