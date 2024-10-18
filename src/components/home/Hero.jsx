import React, { useEffect } from 'react';
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';
import headerearth from '../../assets/images/headerearth.json';
import Lottie from 'lottie-react';
import BgVector from '../../assets/images/BgVector.png';
import { Gradient } from '../../Gradient';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heropage = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 600 }); // Initialize AOS with duration
  }, []);

  return (
    <header className="relative bg-center max-h-[80%] w-[110%]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${BgVector})`,
          backgroundSize: 'cover',
          backgroundPosition: '30%',
        }}
      ></div>

      <div className="relative lg:pt-32 pt-10 flex flex-col md:flex-row items-center justify-center h-full text-white">
        {/* Lottie animation section, moved to the top for small screens */}
        <div
          className="md:hidden flex justify-center " // Hidden on medium screens and above
          data-aos="fade-up"
        >
          <Lottie
            animationData={headerearth}
            className="w-full lg:h-[250px] h-[250px] lg:mt-0 mt-5 lg:mr-0 mr-10 object-cover rounded-lg shadow-lg" // Adjust height for small screens
            loop={true}
            autoplay={true}
          />
        </div>

        <div 
          className="mb-64 lg:ml-16 mr-20 lg:mr-0 md:w-1/2 flex flex-col mt-12 text-left md:pr-8" 
          data-aos="fade-up"
        >
          <h1 className="font-poppins text-lg font-bold lg:ml-9 ml-5 text-gray-50 md:text-6xl lg:text-4xl mb-4">
            Revolutionize Data Access 
            <span className="font-poppins gradi-theme-text block text-[#00FFCC] sm:text-[20px] md:text-[300px] text-2xl lg:text-[50px]">
              with Query Service
            </span>
          </h1>
          <p className="text-justify lg:ml-10 ml-5 font-poppins mx-auto lg:max-w-[600px]  lg:text-lg md:text-base text-base text-white ">
            The open-source library for efficient data querying over REST APIs facilitates seamless integration with various SQL and NoSQL databases. It supports polyglot, multi-engine database access, allowing developers to perform secure and flexible queries tailored to their specific needs.
          </p>

          <form className="w-full mt-4">
            <div className="flex flex-col justify-start md:flex-row md:max-w-[610px] mx-auto space-y-4 md:space-y-0 md:space-x-4">
              <Gradient /> {/* Added Gradient component here */}
              <Button  className="mt-10 ml-5 text-sm md:text-base lg:px-6 lg:py-3 lg:text-lg">Get started</Button>
            </div>
            <ButtonGradient />
          </form>
        </div>

        {/* Lottie animation section, shown on medium screens and above */}
        <div 
          className="hidden md:flex md:w-1/2 justify-center md:justify-end mt-8 md:mt-0" 
          data-aos="fade-up" 
          data-aos-delay="200" 
        >
          <Lottie
            animationData={headerearth}
            className="mb-48 mr-36 w-full h-[450px] object-cover rounded-lg shadow-lg"
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Heropage;
