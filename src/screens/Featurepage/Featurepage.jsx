import React from 'react';
import Header from '../../layout/Header';
import featurebg from '../../assets/images/featurebg.svg'
import Button from '../../button';
import check from '../../assets/images/check.png'
import ButtonGradient from '../../buttonGrad';
import Lottie from 'lottie-react'; // Import Lottie
import featureanimation from '../../assets/images/featureanimation.json';


const Featurepage = () => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center text-gray-200" 
      style={{ backgroundImage: `url(${featurebg})` }}
    >
      <Header />

      {/* Main content section */}
      <section className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-center p-10 gap-10">
        {/* Left side text content */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h4   className=" mt-24 ml-9 text-4xl font-bold  text-white leading-tight">
            Defining Qualities  <br/><span className='text-2xl'> That Enhance User Experience</span>
          </h4>
          <div className=" text-gray-300 space-y-4">
            <p className="mt-12 flex items-center justify-center md:justify-start">
              <img src={check} alt="Check" className="mr-3 w-6 h-6" />
              <span className="relative inline-block">
                ServiceQuery simplifies data querying over REST APIs, supporting a variety of SQL and NoSQL databases while ensuring security against injection attacks.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
            
            <p className="flex items-center justify-center md:justify-start">
              <img src={check} alt="Check" className="mr-3 w-6 h-6" />
              <span className="relative inline-block">
                The library provides powerful querying capabilities, including aggregate functions and advanced comparisons, along with comprehensive documentation for easy integration across applications.
                <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
              </span>
            </p>
            <div className="w-full border-b border-gray-700" />
          </div>
          <div className="flex justify-center">
            <Button>
              Get Started
            </Button>
          </div>
        </div>

        {/* Right side Lottie animation content */}
        <div className="md:w-2/3 w-full flex justify-center md:justify-end">
          <Lottie 
            animationData={featureanimation} // Use Lottie animation here
            className=" mt-20 w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg" // Decreased height to 300px and 400px
            loop={true} // Set loop to true if you want the animation to repeat
            autoplay={true} // Set autoplay to true to start playing automatically
          />
        </div>
      </section>

      <ButtonGradient />
      {/* <Footer /> */}
    </section>
  );
};

export default Featurepage;
