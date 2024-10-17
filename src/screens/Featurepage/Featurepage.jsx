import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { React } from 'react';
import Header from '../../layout/Header';
import useGradientUpdater from "../../hooks/useGradientUpdater";
import featurebg from '../../assets/images/featurebg.svg';
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';
import Lottie from 'lottie-react';
import featureanimation from '../../assets/images/featureanimation.json';
import check from '../../assets/images/check.png';  // Assuming the checkIcon is imported here
import Arrow from '../../Arrow';
import { benefits } from '../../data/mockData';
import ClipPath from '../../Clippath';
import { AiOutlineCheck } from 'react-icons/ai';
import Group from '../../assets/images/Group.png';
import BgVector from '../../assets/images/BgVector.webp';
import Footer from '../../layout/Footer';
import ReactPlayer from 'react-player'; // Import ReactPlayer for video embedding
import ScrollToTop from '../../components/Scrolltotop/Scrolltotop';


const Featurepage = () => {
  const [viewAll, setViewAll] = useState(false); // State for showing all cards

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
    });
  }, []);

  const toggleViewAll = () => {
    setViewAll(!viewAll); // Toggle between View All and View Less
  };

  const operationsData = [
    {
      category: "Aggregate Operations",
      operations: ["Average", "Count", "Maximum", "Minimum", "Sum"],
    },
    {
      category: "Comparison Operations",
      operations: [
        "Between", "Equal", "Not Equal", "Less Than", "Less Than or Equal", 
        "Greater Than", "Greater Than or Equal", "In Set", "Not In Set",
      ],
    },
    {
      category: "Comparison Operations (String)",
      operations: ["StartsWith", "Contains", "EndsWith"],
    },
    {
      category: "Grouping Expressions",
      operations: ["Begin", "End", "And", "Or"],
    },
    {
      category: "Nullability Expressions",
      operations: ["Is Null", "Is Not Null"],
    },
    {
      category: "Select Operations",
      operations: ["Select", "Distinct"],
    },
    {
      category: "Paging Operations",
      operations: ["Page Number", "Page Size", "Include Count"],
    },
    {
      category: "Sorting Operations",
      operations: ["Ascending", "Descending"],
    },
  ];

  const displayedBenefits = viewAll ? benefits : benefits.slice(0, 9); // Show first 9 cards initially

  return (
    <section className="min-h-screen bg-cover bg-center text-gray-200">
      <Header />
      <>
        {/* Main content section */}
        <div className="max-w-10xl mx-auto flex flex-col md:flex-row items-center justify-center p-10 gap-10">
          {/* Left side text content */}
          <div className="md:w-1/2 w-full space-y-6 text-center md:text-left" data-aos="fade-right">
            <h4 className="mt-24 ml-9 text-4xl font-bold text-white leading-tight">
              Defining Qualities <br /><span className="text-2xl text-purple-800">That Enhance User Experience</span>
            </h4>
            <div className="text-gray-300 space-y-4">
              <p className="mt-12 flex items-center justify-center md:justify-start">
                <img src={check} alt="Check Icon" className="mr-3 w-6 h-6" /> {/* Check icon image */}
                <span className="text-lg relative inline-block">
                  ServiceQuery simplifies data querying over REST APIs, supporting a variety of SQL and NoSQL databases while ensuring security against injection attacks.
                  <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
                </span>
              </p>
              <div className="w-full border-b border-gray-700" />

              <p className="flex items-center justify-center md:justify-start">
                <img src={check} alt="Check Icon" className="mr-3 w-6 h-6" /> {/* Check icon image */}
                <span className="text-lg relative inline-block">
                  The library provides powerful querying capabilities, including aggregate functions and advanced comparisons, along with comprehensive documentation for easy integration across applications.
                  <span className="absolute left-0 bottom-0 h-1 w-full bg-purple-500 transition-all duration-300 transform scale-x-0 origin-left hover:scale-x-100"></span>
                </span>
              </p>
              <div className="w-full border-b border-gray-700" />
            </div>
            <div className="flex justify-center">
              <Button>Get Started</Button>
            </div>
          </div>

          {/* Right side Lottie animation content */}
          <div className="md:w-2/3 w-full flex justify-center md:justify-end" data-aos="fade-left">
            <Lottie
              animationData={featureanimation}
              className="mt-20 w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              loop={true}
              autoplay={true}
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto">
          <h1 className="mt-12 text-center text-3xl font-bold" data-aos="fade-up">What We Bring to You!</h1>
          <p className="text-center text-gray-500 text-base mt-2 mb-20" data-aos="fade-up" data-aos-delay="100">Explore our core capabilities</p>
          <div className="flex flex-wrap gap-10 justify-center lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {displayedBenefits.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
                style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={item.delay || 0}
              >
                <div className="relative z-2 flex flex-col h-[350px] p-[2.4rem] pointer-events-none">
                  <img src={item.iconUrl} alt={`${item.title} icon`} className="w-12 h-12 mb-4" /> {/* Icon */}
                  <h5 className="text-lg tracking-wider font-bold h5 mb-5">{item.title}</h5>
                  
                  <p className="text-lg  text-[#ffffffc4] mt-5 body-2  text-n-3">{item.text}</p>
                </div>
                <ClipPath />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button 
              onClick={toggleViewAll} 
              className="px-6 py-3 text-lg font-medium text-white bg-purple-500 rounded-md hover:bg-purple-500"
            >
              {viewAll ? "View Less" : "View All"}
            </button>
          </div>
        </div>

        <ButtonGradient />

        {/* Case Studies Section */}
        <section className="relative border mt-6 border-[#9c9a9a38] rounded-lg shadow-xl flex items-center justify-between h-screen p-5" data-aos="fade-up">
          <div className="absolute inset-0">
            <img src={BgVector} alt="Background Vector" className="w-full h-full object-cover opacity-20" />
          </div>

          <div className="relative z-10 w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">Explore Our Case Studies</h1>
            <p className="text-lg text-gray-300 mb-6">
              We have developed case studies utilizing leading database storage providers. Discover how straightforward it is to begin querying your data effectively!
            </p>
            <Button>Explore Now</Button>
          </div>

          <div className="relative z-10 w-1/2">
            <img src={Group} alt="Case Studies" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Query Operations Section */}
        <div className="container mx-auto mt-20">
          <h2 className="text-center text-4xl font-bold white mb-8" data-aos="fade-up">Query Operations</h2>
          <p className="text-center text-gray-500 text-base mb-10" data-aos="fade-up" data-aos-delay="100">
            Note: Not all database providers support all operations or data types. View our documentation for each provider to know what is available.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {operationsData.map((group, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#6e4b8a3a] to-[#7f63b42a] p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <h3 className="text-xl font-bold mb-4">{group.category}</h3>
                <ul className="list-disc ml-6 text-[#ffffffc4]">
                  {group.operations.map((op, idx) => (
                    <li key={idx}>{op}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

         {/* Video Section */}
         <div className="mb-36 container mx-auto mt-24 px-6" data-aos="fade-up">
  <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
    <div className="w-full lg:w-1/2 shadow-lg rounded-lg overflow-hidden border border-gray-300 mb-8 lg:mb-0">
      <ReactPlayer
        url='https://www.youtube.com/watch?v=RzDMVJBXdRs' // Replace with your tutorial video URL
        className='react-player'
        width='100%'
        height='400px'
        controls={true}
      />
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl font-extrabold mb-6 text-[white] tracking-wide">
      Learn More About Artificial Intelligence Integration
      </h2>
      <p className="text-lg mb-4 text-gray-500">
        Artificial Intelligence is transforming industries by automating tasks 
        and driving smarter decision-making. Learn how AI can enhance your business.
      </p>
      <p className="text-lg mb-6 text-gray-500">
        Watch our tutorial to explore the key steps to integrating AI and its benefits.
      </p>
      <Button>Try it now</Button>
    </div>
  </div>
</div>
<ScrollToTop/>
        <Footer />
      </>
    </section>
  );
};

export default Featurepage;
