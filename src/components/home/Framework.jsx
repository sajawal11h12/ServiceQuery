import { FRAMEWORK_DATA } from "../../data/mockData";
import useGradientUpdater from "../../hooks/useGradientUpdater";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import query from "../../assets/images/query.json"; // replace with actual path
 import database from "../../assets/images/database.json"; // replace with the second animation path

const Framework = () => {
  const gradientRefs = useGradientUpdater();

  const frameworkGridSettings = [
    {
      cardGradientBefore:
        " ",
    },
    {
      cardGradientBefore:
        "",
    }
  ];

  return (
    <section className="lg:py-[65px] py-10 text-white px-4">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="lg:text-3xl md:text-2xl text-xl text-center font-semibold max-w-[767px] mx-auto">
          Transform work practices forever. <br /> Our Framework for the future:
        </h3>
        <div className="grid xxl:gap-y-[30px] xl:gap-y-6 gap-y-4 items-start lg:mt-[65px] mt-10">
          {FRAMEWORK_DATA?.map(({ id, title, description }, index) => {
            return (
              <motion.div
                key={id}
                className="bg-transparent rounded-3xl p-[3px] h-full"
                ref={(el) => (gradientRefs.current[index] = el)}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div
                  className={`rounded-3xl bg-jet h-full grid items-center md:grid-cols-2 ${
                    FRAMEWORK_DATA?.length - 1 === index
                      ? "lg:ps-10 ps-6"
                      : "  px-6"
                  } xxl:gap-20 xl:gap-16 lg:gap-12 gap-10 relative overflow-hidden ${
                    frameworkGridSettings[index].cardGradientBefore
                  } ${frameworkGridSettings[index].cardGradientAfter}`}
                >
                  <div
                    className={`relative z-10 ${
                      FRAMEWORK_DATA?.length - 1 === index &&
                      "lg:py-10 pt-6 pe-6"
                    }`}
                  >
                    <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mb-3">
                      {title}
                    </h3>
                    <p className="lg:text-xl md:text-lg text-base font-source-sans font-normal">
                      {description}
                    </p>
                  </div>
                  <Lottie
                    animationData={index === 0 ? query : query} // Use different animations based on index
                    style={{ height: "400px", width: "400px" }} // Adjust dimensions accordingly
                    className=" z-10 md:order-2"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Framework;
