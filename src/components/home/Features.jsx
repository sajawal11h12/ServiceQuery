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
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="px-4 lg:px-8 py-8 lg:py-[65px]" data-aos="fade-up"> {/* Adjust padding for responsiveness */}
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <h3 className="font-poppins text-center text-white text-lg sm:text-xl md:text-2xl font-semibold">
          Why Use ServiceQuery?
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-8 lg:mt-[65px]" data-aos="fade-up">
          {FEATURES_DATA?.map(({ id, title, image, description }, index) => (
            <motion.div
              key={id}
              className="rounded-3xl p-[3px] relative overflow-hidden"
              ref={(el) => (gradientRefs.current[index] = el)}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up" // AOS added here
            >
              {/* GradientLight effect for each card */}
              <div className="absolute inset-0 z-0"></div>
              <div className="relative z-10 rounded-3xl bg-[#15131d] flex flex-col justify-between items-center h-full p-4 sm:p-6">
                <h4 className="font-poppins mt-4 lg:mt-8 text-lg sm:text-xl lg:text-2xl text-white text-center font-semibold">
                  {title}
                </h4>
                <img
                  className={`mt-4 mb-4 ${index === 1 && "mb-5"} ${index === 2 && "mb-8"}`}
                  src={image}
                  alt=""
                />
                <p className="font-poppins text-center text-white text-sm sm:text-base lg:text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Section with Gradient Effects */}
      <section className="mt-16 lg:mt-24 border border-gray-700 p-8 md:p-16 lg:p-32 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0" data-aos="fade-up">
        <div className="md:w-1/2 w-full">
          <h4 className="font-poppins mb-4 lg:mb-9 text-white text-xl sm:text-2xl lg:text-3xl">
            Relational and Document<br />Database Engine Support
          </h4>
          <div className="text-white space-y-4 lg:space-y-6">
            <p className="font-poppins flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="relative inline-block">
                Seamless multi-database compatibility with SQL Server, MongoDB, PostgreSQL, and more.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="relative inline-block">
                Effortless scalability for lightweight databases like SQLite to enterprise systems.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            <Gradient />
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="relative inline-block">
                Hybrid data management combines the strengths of relational and document databases.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="relative inline-block">
                Future-ready integration with modern platforms like Cosmos DB and Azure Data Tables.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            <p className="flex items-center" data-aos="fade-right">
              <img src={check} alt="Check" className="mr-3 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="relative inline-block">
                Unified query interface simplifies development across diverse database engines.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
          </div>
          <Button className="font-poppins text-white mt-6 lg:mt-10 px-3 py-1 text-sm md:text-base lg:px-6 lg:py-3 lg:text-lg">
  Get Started
</Button>

        </div>

        {/* Logos and Information Section */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start mt-8 md:mt-0" data-aos="fade-left">
          <p className="font-poppins text-white mb-3 text-center md:text-left text-sm sm:text-base lg:text-lg">
            ServiceQuery is FREE to use for commercial purposes.<br /> It is available under the MIT license.
          </p>
          <img src={logos} alt="Logos" className="mt-4 md:mt-6 max-w-full h-auto" />
          <img className="hidden md:block mt-8" src={curve1} alt="" />
        </div>
      </section>

      {/* Main Gradient Component */}
      <Gradient />
    </section>
  );
};

export default Features;
