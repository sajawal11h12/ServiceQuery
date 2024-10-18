import React from 'react';
import Header from '../../layout/Header';
import Lottie from 'lottie-react';
import getstarted from '../../assets/images/getstarted.json'; // Path to your animation
import grid from '../../assets/images/grid.png'; // Path to your grid image
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';
import getstartedai from '../../assets/images/getstartedai.jpg';
import check from '../../assets/images/check.png';
import Footer from '../../layout/Footer';
import ScrollToTop from '../../components/Scrolltotop/Scrolltotop';

const Getstarted = () => {
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto pt-32">
        {/* Main Container for Text and Animation */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content on the Left */}
          <div className="md:w-1/2 w-full md:pr-8 mb-10 md:mb-0">
            {/* Open Source Section */}
            <div className="mt-10">
              <h2 className="lg:text-5xl text-2xl ml-5 font-bold text-white mb-4 font-poppins">Open Source</h2>
              <p className="text-lg ml-5  text-white font-poppins">
                ServiceQuery is open source software and is free to use for commercial purposes. 
                It is available under the{' '}
                <a
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-poppins text-purple-800 underline hover:text-purple-800 transition duration-300 ease-in-out"
                >
                  MIT permissive license
                </a>.
              </p>
            </div>

            {/* Example Applications Section */}
            <div className="mt-10">
              <h2 className=" font-poppins lg:text-5xl text-2xl ml-5 font-bold text-white mb-4">Example Applications</h2>
              <p className="font-poppins lg:text-lg ml-5 text-white">
                Explore all of our example applications. We have provided examples supporting 
                the most popular database engines, such as SqlServer, MongoDB, Azure Data Tables, 
                Cosmos, Sqlite, PostgreSQL, and more!{' '}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-800 underline hover:text-purple-800 transition duration-300 ease-in-out"
                >
                  View our GitHub repository
                </a>{' '}
                to view them all.
              </p>
        
              <Button  className="text-white mt-10 px-3 py-1 text-sm md:text-base lg:px-6 lg:py-3 lg:text-lg ml-5">View Github Repo</Button>
              <ButtonGradient />
              
            </div>
          </div>
          
                {/* Lottie Animation on the Right with Overlay */}
                <div className="md:w-1/2 w-full flex justify-center md:justify-end relative">
            <Lottie
              animationData={getstarted}
              className="md:h-[400px] w-full object-cover rounded-lg"
              loop={true}
              autoplay={true}
            />
            {/* Overlay Image */}
            <img
              src={grid}
              alt="Grid Overlay"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-35"
            />
          </div>
        </div>

        {/* Code Coverage Statistics */}
        <div className="mt-16 flex flex-col items-center">
          <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 font-poppins">Code Coverage Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* First Statistic Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-bold text-purple-800 text-center mb-2 font-poppins">Current via CI/CD Pipeline</h3>
              <p className="text-5xl font-bold text-white text-center mb-2 font-poppins">96.08%</p>
              <p className="text-lg text-white text-center font-poppins">
                We have thoroughly tested our product to ensure it is reliable and secure for everyone.
              </p>
            </div>
            {/* Second Statistic Card */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-bold text-purple-800 text-center mb-2 font-poppins">Unit Test Coverage</h3>
              <p className="text-5xl font-bold text-white text-center mb-2 font-poppins">96.08%</p>
              <p className="text-lg text-white text-center font-poppins">
                Ensuring reliability and security through extensive unit testing.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-20 pb-20">
          {/* Text Content on the Left */}
          <div className="md:w-1/2 w-full p-10">
            <h1 className="text-4xl text-white mb-6 font-poppins">Query Your Database with Artificial Intelligence</h1>
            
            {/* First Point with Check Image */}
            <div className="flex items-center mb-4">
              <img src={check} alt="Check Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white font-poppins">Query your database effortlessly using simple human language, no SQL required.</p>
            </div>
            <div className="w-full border-b border-gray-700 mb-4" />
            
            {/* Second Point with Check Image */}
            <div className="flex items-center mb-4">
              <img src={check} alt="Check Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white font-poppins">Utilize OpenAI's language models for intelligent, context-aware data retrieval.</p>
            </div>
            <div className="w-full border-b border-gray-700 mb-4" />
            
            {/* Third Point with Check Image */}
            <div className="flex items-center mb-4">
              <img src={check} alt="Check Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white font-poppins">Get started quickly with detailed setup instructions and examples available in our repository.</p>
            </div>
           
            <Button  className="text-white mt-10 px-3 py-1 text-sm md:text-base lg:px-6 lg:py-3 lg:text-lg">View ServiceQuery.openAI</Button>
          </div>
  {/* Image on the Right with Border */}
  <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
            <div className="border-2 border-purple-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 ml-16">
              <img
                src={getstartedai}
                alt="AI Querying"
                className="object-cover max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
         
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Getstarted;
