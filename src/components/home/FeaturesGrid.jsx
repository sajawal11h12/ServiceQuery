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
      cardContentPadding: "px-4 lg:px-6", // Adjust padding for small screens
      cardColSpan: "lg:col-span-3 col-span-full", // Keep col-span large for wide cards
      cardFlexCol: "flex-col md:flex-row", // Set flex-col on small screens and flex-row on medium and larger screens
    }
  ];

  return (
    <section className="py-[75px] text-white">
      <h2 className="text-center lg:text-3xl md:text-2xl text-xl font-semibold font-poppins max-w-[986px] mx-auto">
        Never waste more than a day handing over design requirements with these
        features:
      </h2>
      <div className="max-w-[1200px] mx-auto lg:mt-[65px] mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 xxl:gap-10 mt-10 lg:mt-[65px]">
          {FEATURES_GRID_DATA?.slice(1)?.map(({ id, description, image }, index) => {
            return (
              <motion.div
                key={id}
                className={`rounded-3xl overflow-hidden p-[1px] md:min-h-[444px] min-h-auto ${featuredGridSettings[index].cardColSpan}`}
              >
                <div className={`border border-gray-800 rounded-3xl flex ${featuredGridSettings[index].cardFlexCol}`}>
                  
                  {/* Image on top for smaller screens, left on larger */}
                  <div className="relative w-full md:w-[50%] h-[200px] sm:h-[250px] md:h-auto">
                    <img
                      className="h-full w-full object-cover"
                      src={image}
                      alt=""
                    />
                  </div>

                  {/* Text beside the image for larger screens */}
                  <div
                    className={`flex-1 flex flex-col justify-center items-start p-4 ${featuredGridSettings[index].cardContentPadding}`}
                  >
                    <h4 className="mt-4 lg:text-4xl md:text-2xl text-lg text-white font-montserrat text-left font-semibold">
                      Evolve Your Data <br />{" "}
                      <span className="text-3xl text-purple-700">with Capabilities</span>
                    </h4>

                    {/* Checkmark with description */}
                    <div className="mt-8 flex items-center">
                      <img src={check} alt="Checkmark" className="h-5 w-5" /> {/* SVG Checkmark */}
                      <p className="text-white lg:text-base text-sm ml-2">{description}</p>
                    </div>

                    <div className="w-full border-b border-gray-700 mt-2" />

                    <div className="mt-5 flex items-center">
                      <img src={check} alt="Checkmark" className="h-5 w-5 text-green-500 mr-2" /> {/* SVG Checkmark */}
                      <p className="text-white lg:text-base text-sm">Tailor our examples to fit your unique database needs.</p>
                    </div>

                    <Button className="mt-10 px-3 py-1 text-sm md:text-base lg:px-6 lg:py-3 lg:text-lg">
                      Get started
                    </Button>
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
