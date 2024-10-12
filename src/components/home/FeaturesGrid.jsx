import { FEATURES_GRID_DATA } from "../../data/mockData";
import useGradientUpdater from "../../hooks/useGradientUpdater";
import { motion } from "framer-motion";
import logo from '../../assets/icons/logo.png';
import check from '../../assets/images/check.png'; // Import the check SVG
import Button from '../../button'
const FeaturesGrid = () => {
  const gradientRefs = useGradientUpdater();

  const featuredGridSettings = [
    {
      cardContentPadding: "px-8 pb-1",
      cardColSpan: "lg:col-span-3 col-span-full", // Increased col-span for wider card
      cardFlexCol: "flex-row", // Ensure this is set to flex-row for left/right alignment
    }
  ];

  return (
    <section className="py-[75px] text-white px-4">
      <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold font-montserrat max-w-[986px] mx-auto">
        Never waste more than a day handing over design requirements with these
        features:
      </h2>
      <div className="max-w-[1200px] mx-auto lg:mt-[65px] mt-10">
        <div className="grid grid-cols-3 xxl:gap-10 xl:gap-8 lg:gap-6 gap-4 lg:mt-[65px] mt-10">
          {FEATURES_GRID_DATA?.slice(1)?.map(({ id, title, description, image }, index) => {
            return (
              <motion.div
                key={id}
                className={`rounded-3xl overflow-hidden p-[1px] md:min-h-[444px] min-h-auto ${featuredGridSettings[index].cardColSpan}`} // Wider card with col-span-3
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
                <div
                  className={`rounded-3xl flex overflow-hidden bg-[#15131d] relative justify-between items-center h-full`}
                >
                  <div className={`mb-36 flex-1 flex flex-col justify-center items-start p-4 ${featuredGridSettings[index].cardContentPadding}`}>
                    <h4 className=" mt-4 lg:text-4xl md:text-xl text-lg text-white font-montserrat text-left font-semibold">
                    Evolve Your Data <br/> <span className="text-3xl text-purple-700"> with Capabilities</span>
                    </h4>
                    
                    {/* Checkmark with duplicated description */}
                    <div className="mt-16 flex items-center ">
                      <img src={check} alt="Checkmark" className="h-5 w-5 text-green-500 mr-2" /> {/* SVG Checkmark */}
                      <p className="text-white lg:text-base text-sm">{description}</p>
                    </div>

                    <div className=" w-full border-b border-gray-700 mt-2" />
                    {/* Duplicated description */}
                    <div className=" mt-7 flex items-center ">
                      <img src={check} alt="Checkmark" className="     h-5 w-5 text-green-500 mr-2" /> {/* SVG Checkmark */}
                      <p className="text-white lg:text-base text-sm">Tailor our examples to fit your unique database needs.</p>
                    </div>


                    <Button className=' mt-10'>Get started</Button>


                    {/* Bottom line */}
                    
                  </div>
                  
                  <div className="relative h-[500px] w-[700px]">
  <img
    className=" blur-sm h-full w-full object-cover z-0" // Ensures the image covers the full area
    src={image}
    alt=""
  />
  <div className="absolute inset-0 bg-purple-700 opacity-15 z-10" /> {/* Change color and opacity as needed */}
</div>


                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
