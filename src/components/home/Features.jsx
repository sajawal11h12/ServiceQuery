import { FEATURES_DATA } from "../../data/mockData";
import { motion } from "framer-motion";
import useGradientUpdater from "../../hooks/useGradientUpdater";
import { GradientLight } from "../../Gradlight";
import logos from '../../assets/images/logos.png'
import check from '../../assets/images/check.png'
import { Gradient } from "../../Gradient";
import curve1 from '../../assets/icons/curve1.svg'
import Button from "../../button";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Features = () => {
  const gradientRefs = useGradientUpdater();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="px-4  lg:py-[65px]" data-aos="fade-up"> {/* AOS added to full section */}
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <h3 className="text-center text-white font-montserrat lg:text-xl md:text-lg text-base font-semibold">
          Why Use ServiceQuery?
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px]" data-aos="fade-up">
          {FEATURES_DATA?.map(({ id, title, image, description }, index) => {
            return (
              <motion.div
                key={id}
                className="rounded-3xl p-[3px] md:min-h-[444px] min-h-auto relative overflow-hidden"
                ref={(el) => (gradientRefs.current[index] = el)}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
                data-aos="fade-up" // AOS added here
              >
                {/* GradientLight effect for each card */}
                <div className="absolute inset-0 z-0">
                  <GradientLight />
                </div>

                <div className="relative z-10 rounded-3xl bg-[#15131d] flex flex-col justify-between items-center h-full">
                  <h4 className="lg:mt-8 md:mt-6 mt-4 mb-4 lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold px-4">
                    {title}
                  </h4>
                  <img
                    className={`px-4 ${index === 1 && "mb-5"} ${index === 2 && "mb-8"}`}
                    src={image}
                    alt=""
                  />
                  <p className="text-center text-white px-4 mb-6 lg:mb-8 md:mb-7 text-sm lg:text-base">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Additional Section with Gradient Effects */}
      <section className="mt-24 border border-gray-700 p-12 md:p-32 flex flex-col md:flex-row justify-between items-start" data-aos="fade-up">
        <div className="md:w-1/2 w-full">
          <h4 className="mb-9 text-white text-3xl">
            Relational and Document<br />Database Engine Support
          </h4>
          <div className="text-white space-y-6">
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-5 h-5 filter hue-rotate-260" />
              <span className="relative inline-block">
                Seamless multi-database compatibility with SQL Server, MongoDB, PostgreSQL, and more.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-5 h-5 filter hue-rotate-260" />
              <span className="relative inline-block">
                Effortless scalability for lightweight databases like SQLite to enterprise systems.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-5 h-5 filter hue-rotate-260" />
              <span className="relative inline-block">
                Hybrid data management combines the strengths of relational and document databases.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-5 h-5 filter hue-rotate-260" />
              <span className="relative inline-block">
                Future-ready integration with modern platforms like Cosmos DB and Azure Data Tables.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-5 h-5 filter hue-rotate-260" />
              <span className="relative inline-block">
                Unified query interface simplifies development across diverse database engines.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
          </div>
          <Button className='text-white mt-10 ml-52'>Get Started</Button>
        </div>

        {/* Logos and Information */}
        <div className="md:w-1/2 w-full flex flex-col items-center mt-12 md:mt-0" data-aos="fade-left">
          <p className="text-white mb-3 text-center md:text-left">
            ServiceQuery is FREE to use for commercial purposes.<br/> It is available under the MIT license.
          </p>
         
          <img src={logos} alt="Logos" className="mt-6 max-w-full h-auto ml-16" />
          <img className="mr-[300px] mt-12" src={curve1} alt=""/>
        </div>
      </section>

      {/* Add main Gradient component for the overall section */}
      <Gradient />
    </section>
  );
};

export default Features;
