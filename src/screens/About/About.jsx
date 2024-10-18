import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { FaBeer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import holoicon from '../../assets/images/holoicon.png'
import mit from '../../assets/images/mit.png'
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';



const About = () => {
    
        const newsItems = [
          {
            title: "Query Databases using Artificial Intelligence",
            description:
              "We have added a new feature that allows you to query your database using artificial intelligence using OpenAI GPT LLMs. Start building secure, AI-enabled query applications with ServiceQuery today. Visit our repository for more information.",
          },
          {
            title: "ServiceQuery v2.1.1 Release",
            description:
              "Our latest release supports sorting nullable data types and we have rebuilt our unit tests. Code coverage for the library is now at 96.08%",
          },
          {
            title: "ServiceQuery v2.0 Release",
            description:
              "Our latest release removes all external NuGet package references from our library and is pure .NET C# framework code. We are also now supporting all new .NET 8.0 data types including: DateOnly, TimeOnly and UInt128",
          },
          {
            title: "Introducing ServiceQuery",
            description:
              "It is with great pleasure that we are announcing the official release of ServiceQuery on GitHub! ServiceQuery is a powerful open source for data querying over REST APIs supporting polyglot, multi-engine database access. We can't wait to see what you build with it!",
          },
        ];
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0c15] via-[#0e0c15] to-[#0f3460] bg-fixed text-white">
      <Header />
      
      {/* Add padding to the top to avoid navbar overlap */}
      <div className=" pt-32"> {/* Adjusted the padding to ensure content is below the navbar */}
        
        {/* License Section */}
        <motion.div 
          className="container mx-auto px-10 py-8 shadow-2xl rounded-lg bg-opacity-10 backdrop-blur-lg border border-gray-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-poppins text-3xl font-bold text-center mb-6 text-white hover:text-gray-300 transition-all duration-300">
            The MIT License (MIT)
          </h1>
          <p className=" font-poppins mb-4 text-gray-200 text-lg">
            <h1>Copyright © 2024 HoloModular LLC</h1>
          </p>
          <p className="mb-4 text-justify text-gray-200  lg:text-lg text-base leading-relaxed font-poppins">
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
          </p>
          <p className="mb-4 text-gray-200 lg:text-lg text-base  text-justify leading-relaxed font-poppins">
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
          </p>
          <p className="mb-4 text-justify text-gray-200 lg:text-lg text-base leading-relaxed font-poppins">
            THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>
        </motion.div>


        <div className="min-h-screen text-white py-12 px-4">
  <h1 className="text-4xl font-bold text-center mb-12 font-poppins">Latest News</h1>
  <div className="space-y-8">
    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-2 font-poppins">Query Databases using Artificial Intelligence</h1>
      <p className="text-gray-200 lg:text-lg text-base text-justify leading-relaxed mb-2 font-poppins">
        We have added a new feature that allows you to query your database using artificial intelligence using OpenAI GPT LLMs. Start building secure, AI-enabled query applications with ServiceQuery today. Visit our repository for more information.
      </p>
      <p className="text-gray-400 font-poppins">Date: October 16, 2024</p>
      <p className="text-blue-400 hover:underline">
        <a href="https://your-repo-link.com font-poppins">View ServiceQuery.OpenAI</a>
      </p>
    </div>

    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-2 font-poppins">ServiceQuery v2.1.1 Release</h1>
      <p className="text-gray-200 leading-relaxed mb-2 lg:text-lg text-base font-poppins text-justify">
        Our latest release supports sorting nullable data types and we have rebuilt our unit tests. Code coverage for the library is now at 96.08%.
      </p>
      <p className="text-gray-400 font-poppins">Date: October 10, 2024</p>
    </div>

    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-2 font-poppins">ServiceQuery v2.0 Release</h1>
      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2 font-poppins text-justify">
        Our latest release removes all external NuGet package references from our library and is pure .NET C# framework code. We are also now supporting all new .NET 8.0 data types including: DateOnly, TimeOnly, and UInt128.
      </p>
      <p className="text-gray-400 font-poppins">Date: October 5, 2024</p>
    </div>

    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-2 font-poppins">Introducing ServiceQuery</h1>
      <p className="text-gray-200 lg:text-lg text-base leading-relaxed mb-2 font-poppins">
        It is with great pleasure that we are announcing the official release of ServiceQuery on GitHub! ServiceQuery is a powerful open-source tool for data querying over REST APIs supporting polyglot, multi-engine database access. We can't wait to see what you build with it!
      </p>
      <p className="text-gray-400 font-poppins">Date: September 28, 2024</p>
    </div>
  </div>
</div>

        {/* Free as in Beer Section */}
        <motion.div 
          className="mb-12 container mx-auto p-10 shadow-2xl rounded-lg mt-12 bg-opacity-10 backdrop-blur-lg border border-gray-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="font-poppins text-3xl font-bold text-center mb-6 text-white hover:text-yellow-500 transition-all duration-300">
            Free as in Beer <FaBeer className="inline ml-2 text-yellow-500 hover:text-yellow-300 transition-all duration-300" />
          </h2>
          <p className=" text-justify lg:text-lg text-base font-poppins mb-4 text-gray-200  leading-relaxed">
            Richard Stallman originally came up with the phrase "Free as in Beer" to describe software that is free as a matter of liberty, not price. We believe in this philosophy and have made our core software platforms free to use as well.
          </p>
          <p className="text-justify font-poppins mb-4 text-gray-200 lg:text-lg text-base leading-relaxed">
            The recipe for beer is free. You can brew any type of beer you want, made from wheat, apples, honey, or whatever you like. You can share your beer with your friends and family, or even sell the beer. The recipe for beer is free, you just have to add the water, ingredients, and put in the work to follow the recipe.
          </p>
          <p className="text-justify font-poppins mb-4 text-gray-200 lg:text-lg text-base leading-relaxed">
            We have developed technology that is the recipe for building microservices. You can use it to build any type of software you want. ServiceBricks and ServiceQuery are our brands that allow you to create microservices in seconds, instead of days or weeks. We are giving away the underlying recipe for building microservices for free, so that everyone may use it. Free as in liberty, free as in beer.
          </p>
        </motion.div>
      </div>

    
      <div className="flex flex-col md:flex-row justify-between items-start p-6 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
  {/* Left Section */}
  <div className="flex flex-col items-start w-full md:w-[60%] p-4 rounded-lg border border-gray-500 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h1 className="text-xl md:text-2xl font-bold text-purple-800 font-poppins">
      Owned and Maintained by:
    </h1>
    <img src={holoicon} alt="Holographic Software logo" className="my-2 w-32" />
    <h1 className="text-lg md:text-xl">Holographic Software for the Metaverse</h1>
    <p className="text-justify font-poppins mt-2 lg:text-lg text-base text-white">
      Our goal is to develop new and innovative technologies to complement an augmented and virtual reality world.
    </p>
    <Button className='mt-5 font-poppins'>Visit our website</Button>
  </div>

  {/* Right Section */}
  <div className="flex flex-col items-start w-full md:w-[35%] p-5 rounded-lg border border-gray-500 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h1 className="text-2xl font-bold text-purple-800 font-poppins">Open Source Software</h1>
    <img src={mit} alt="MIT license logo" className="mt-2 w-32" />
    <p className="mt-2 text-white font-poppins lg:text-lg text-base text-justify">
      ServiceQuery is FREE, open-source, enterprise-grade software that enables developers to query databases easily. It is available under the MIT permissive software license.
    </p>
  </div>
</div>





<ButtonGradient/>
      <Footer/>
    </div>

  );
};

export default About;
