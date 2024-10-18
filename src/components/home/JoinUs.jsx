import Button from "../../button";
import stars from '../../assets/images/stars.svg';
import earth from '../../assets/images/earth.png';

const JoinUs = () => {
  return (
    <section
      className="py-[30px] lg:py-[50px] min-h-[500px] px-4 text-white relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${stars})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[900px] mx-auto text-center lg:text-left relative z-10">
        {/* Left content */}
        <div className="flex-1 lg:pr-8 mb-6 lg:mb-0">
          <h2 className="mt-16 font-poppins text-lg sm:text-3xl md:text-4xl lg:text-[30px] leading-tight mx-4">
            We offer robust sales and consulting services to help your business leverage the full potential of our products.
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-[44px] mb-4 sm:mb-6 md:mb-8 lg:mb-[46px] text-base sm:text-lg md:text-xl mx-4">
            Get early access to our free features.
          </p>

          <form className="w-full mx-4">
            <div className="flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your work email"
                className="min-h-[50px] lg:min-h-[56px] px-4 rounded-lg bg-transparent border border-white w-full placeholder:text-cadet-blue outline-none font-source-sans text-sm lg:text-base"
              />
            </div>
            <Button className="mt-6 md:mt-8 lg:mt-10 px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base mx-4">
              Get early access
            </Button>
          </form>
        </div>

        {/* Right content - Earth Image */}
        <div className="flex-1 flex justify-center lg:justify-end lg:max-w-[400px] md:max-w-[300px] w-full mt-6 lg:mt-0">
          <img
            className="max-w-full h-auto"
            src={earth}
            alt="earth"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
