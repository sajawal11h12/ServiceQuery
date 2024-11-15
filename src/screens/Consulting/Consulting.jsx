import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import consultant from '../../assets/images/consultant.png';
import Button from "../../button";
import ButtonGradient from "../../buttonGrad";
import ScrollToTop from "../../components/Scrolltotop/Scrolltotop";

const Consulting = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-poppins">
      <Header />

      {/* LampContainer positioned closer to the Header */}
      <LampContainer className="absolute -top-20 left-0 z-0 opacity-75" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-center p-6 md:p-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent"
        >
          <div className="flex flex-col items-center mt-10 md:mt-20">
            {/* Heading */}
            <h1 className="font-bold text-3xl md:text-5xl mt-10 text-white font-poppins text-center">
              How Can We Help You?
            </h1>

            {/* Description */}
            <p className="font-poppins text-center mt-4 max-w-3xl md:max-w-5xl text-white text-sm md:text-base">
             
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-between mt-10 md:mt-16 space-y-10 lg:space-y-0">
              {/* Text Section */}
              <div className="flex-1 lg:max-w-md text-center lg:text-left">
                <h2 className="font-bold text-2xl md:text-3xl text-white font-poppins">
                  Consulting Services
                </h2>
                <p className="font-poppins  text-white text-sm md:text-base mt-2 lg:w-[100%]">
                  We offer comprehensive sales and consulting services to help your business leverage the full potential of our products. Our dedicated team is committed to delivering tailored solutions that drive growth and efficiency, ensuring your success in today's competitive landscape.
                  <br />
                  <br />
                  For inquiries or to discuss how we can assist you, please contact our sales staff at <a href="mailto:Support@HoloModular.com" className="underline text-purple-800 hover:text-blue-300">Support@HoloModular.com</a>.
                </p>
                <Button className="mt-5 text-white font-poppins">Contact us</Button>
                <ButtonGradient className="mt-3" />
              </div>

              {/* Illustration Section */}
              <div className="flex-1 flex justify-center">
                <img
                  src={consultant}
                  alt="Consulting"
                  className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-lg transition-transform transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer className="relative bottom-0 w-full" />
      <ScrollToTop />
    </div>
  );
};

export default Consulting;
