import React, { useEffect } from 'react';
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';
import headerearth from '../../assets/images/headerearth.json';
import Lottie from 'lottie-react';
import BgVector from '../../assets/images/BgVector.webp';
import { Gradient } from '../../Gradient';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heropage = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 600 }); // Initialize AOS with duration
  }, []);

  return (
    <header
      className="relative bg-center h-[500px] md:h-[600px]"
      style={{
        backgroundImage: `url(${BgVector})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%', // Adjust this value to move it down
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center h-full text-white">
        <div 
          className="md:w-1/2 flex flex-col items-center text-center md:text-left md:pr-8" 
          data-aos="fade-up" // AOS animation for fade up
        >
          <h1 className="text-5xl font-bold">
            Revolutionize Data Access
            <span className="gradi-theme-text block text-[#00FFCC] text-6xl lg:text-[50px]">
              With Query Service
            </span>
          </h1>
          <p className="mx-auto lg:max-w-[600px] lg:text-xl md:text-lg text-base my-6 text-gray-100">
            This open-source library provides a robust solution for querying data over REST APIs, facilitating seamless access to a diverse range of database engines. It supports polyglot architectures, allowing developers to interact efficiently with multiple databases through a unified interface, thereby enhancing data retrieval and management capabilities.
          </p>
          <form className="w-full mt-4">
            <div className="flex flex-col justify-center md:flex-row md:max-w-[610px] mx-auto space-y-4 md:space-y-0 md:space-x-4">
              <Gradient /> {/* Added Gradient component here */}
              <Button>Get Started</Button>
            </div>
            <ButtonGradient />
          </form>
        </div>

        <div 
          className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0" 
          data-aos="fade-up" // AOS animation for fade up
          data-aos-delay="200" // Delay for the animation
        >
          <Lottie
            animationData={headerearth}
            className="w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </header>
  );
};

export default Heropage;
