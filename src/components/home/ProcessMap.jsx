import { Images } from "../../assets/images";
import { motion } from "framer-motion";
import Button from "../../button";
import getstarted from '../../assets/images/getstarted.json'
import Lottie from "lottie-react";

const ProcessMap = () => {
  return (
    <section  className=" border  border-gray-800 max-w-[1200px] mx-auto py-[65px] text-white px-4">
      <div className="ml-28 grid lg:grid-cols-2 gap-6 items-center">
        <motion.div
          className="max-w-[584px] flex flex-col items-center lg:items-start text-center lg:text-start"
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
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold font-montserrat">
          Open Source
          </h3>
          <p className="mt-3 mb-10 font-source-sans lg:text-xl md:text-lg text-base">
          ServiceQuery is open source software and is free to use for commercial purposes. It is available under the MIT permissive license.
          </p>
          <Button >
            Try it Now For Free
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-center lg:justify-end"
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
              className="md:h-[400px]  object-cover rounded-lg"
              loop={true}
              autoplay={true}
            />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessMap;
