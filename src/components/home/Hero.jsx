import React, { useEffect } from 'react';
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';
import headerearth from '../../assets/images/headerearth.json';
import Lottie from 'lottie-react';
import BgVector from '../../assets/images/BgVector.webp';
import { Gradient } from '../../Gradient';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Arrow from '../../assets/images/Arrow.json'

const Heropage = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 600 }); // Initialize AOS with duration
  }, []);

  return (
    <header
      className="relative bg-center h-[500px] md:h-[500px]"
      style={{
        backgroundImage: `url(${BgVector})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%', // Adjust this value to move it down
      }}
    >
      <div className=" pt-32 flex flex-col md:flex-row items-center  justify-center h-full text-white">
      <div 
  className="  ml-28 md:w-1/2 flex flex-col  mt-12 text-left md:pr-8" 
  data-aos="fade-up" // AOS animation for fade-up
>
  <h1 className="text-lg font-bold  text-gray-50 md:text-6xl lg:text-5xl mb-4">
    Revolutionize Data Access 
    <span className="gradi-theme-text block text-[#00FFCC] text-6xl lg:text-[50px]">
    with Query Service
    </span>
  </h1>
  <p className="mx-auto lg:max-w-[600px] lg:text-lg md:text-base text-sm text-gray-300 my-6 leading-relaxed">
  The open-source library for efficient data querying over REST APIs facilitates seamless integration with various SQL and NoSQL databases. It supports polyglot, multi-engine database access, allowing developers to perform secure and flexible queries tailored to their specific needs.
  </p>




        
          <form className="w-full mt-4">
            <div className="flex flex-col justify-start md:flex-row md:max-w-[610px] mx-auto space-y-4 md:space-y-0 md:space-x-4">
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
            className="mt-8 w-full h-[400px] md:h-[450px] object-cover rounded-lg shadow-lg"
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
      <Lottie
            animationData={Arrow}
            className="mt-16 w-full h-[50px] md:h-[50px] object-cover rounded-lg shadow-lg"
            loop={true}
            autoplay={true}
          />

    </header>
  );
};

export default Heropage;
