import { FEATURES_DATA } from "../../data/mockData";
import { motion } from "framer-motion";
import useGradientUpdater from "../../hooks/useGradientUpdater";
import { GradientLight } from "../../Gradlight";
import check from '../../assets/icons/check.svg'
import { collabContent ,collabApps,collabText} from "../../data/mockData";
import Button from '../../button'
import { LeftCurve,RightCurve } from "../../collaborationscurve";
import brickslogomini from '../../assets/images/brickslogomini.png'
import {Link} from 'react-router-dom';

const Features = () => {
  const gradientRefs = useGradientUpdater();

  return (
    <section className="px-4 lg:py-[65px] py-10">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-center text-white font-montserrat lg:text-xl md:text-lg text-base font-semibold">
          Why Use ServiceQuery?
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
          {FEATURES_DATA?.map(({ id, title, image, description }, index) => {
            return (
              <motion.div
                key={id}
                className="rounded-3xl p-[3px] md:min-h-[444px] min-h-auto relative overflow-hidden"
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
                  scale: 1.05,
                }}
              >
                {/* Gradient effect */}
                <div className="absolute inset-0 z-0">
                  <GradientLight />
                </div>

                <div className="relative z-10 rounded-3xl bg-[#15131d] flex flex-col justify-between items-center h-full">
                  <h4 className="lg:mt-8 md:mt-6 mt-4 mb-4 lg:text-2xl md:text-xl text-lg text-white font-montserrat text-center font-semibold px-4">
                    {title}
                  </h4>
                  <img
                    className={`px-4 ${index === 1 && "mb-5"} ${
                      index === 2 && "mb-8"
                    }`}
                    src={image}
                    alt=""
                  />
                  <p className="text-center text-white px-4 mb-6 lg:mb-8 md:mb-7 text-sm lg:text-base">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>


 





    </section>





  
  );
};

export default Features;
