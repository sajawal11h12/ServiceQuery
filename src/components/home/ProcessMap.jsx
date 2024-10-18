import { Images } from "../../assets/images";
import { motion } from "framer-motion";
import Button from "../../button";
import getstarted from '../../assets/images/getstarted.json';
import Lottie from "lottie-react";

const ProcessMap = () => {
  return (
    <section className="border border-gray-800 max-w-[1200px] mx-auto py-[60px] text-white px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Responsive layout: Column for small screens, Row for large screens */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-start mx-4"
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {/* Lottie Animation positioned above text and button on small screens */}
          <div className="lg:hidden">
            <Lottie
              animationData={getstarted}
              className="md:h-[400px] h-[300px] object-cover rounded-lg"
              loop={true}
              autoplay={true}
            />
          </div>

          <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold font-montserrat">
            Open Source
          </h3>
          <p className=" mb-2 font-source-sans lg:text-xl md:text-lg text-base">
            ServiceQuery is open source software and is free to use for commercial purposes. It is available under the MIT permissive license.
          </p>
          <Button  className="mt-10 px-3 py-1 text-sm md:text-base lg:px-6 lg:py-3 lg:text-lg">
            Try it Now For Free
          </Button>
        </motion.div>

        {/* Lottie Animation positioned to the right on large screens */}
        <motion.div
          className="hidden lg:flex justify-center lg:justify-end mx-4"
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Lottie
            animationData={getstarted}
            className="md:h-[400px] h-[300px] object-cover rounded-lg"
            loop={true}
            autoplay={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessMap;
