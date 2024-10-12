import Button from "../../button";
import BgVector from '../../assets/images/Bg-Vector.webp';
import earth from '../../assets/images/earth.png';

const JoinUs = () => {
  return (
    <section
      className="py-[65px] lg:min-h-[680px] min-h-auto px-4 text-white relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${BgVector})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[900px] mx-auto text-center relative z-10">
        {/* Left content */}
        <div className="lg:text-left text-center flex-1 lg:pr-8">
          <h2 className="font-semibold font-montserrat lg:text-[40px] md:text-4xl sm:text-3xl text-lg">
            We offer Robust sales and consulting services to help your business leverage the full potential of our products.
          </h2>
          <p className="text-xl lg:mt-[44px] md:mt-8 sm:mt-6 mt-4 lg:mb-[46px] md:mb-8 sm:mb-6 mb-4">
            Get early access to our free features.
          </p>
          <form className="w-full">
            <div className="flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your work email"
                className="lg:min-h-[56px] min-h-[50px] px-4 rounded-lg bg-transparent border border-white w-full placeholder:text-cadet-blue outline-none font-source-sans lg:text-base text-sm"
              />
            </div>
            <Button className="mt-10">Get early access</Button>
          </form>
        </div>

        {/* Right content */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img className="h-[300px] lg:mr-0 mr-auto lg:ml-auto" src={earth} alt="earth" />
        </div>
      </div>

      {/* Removed gradient circles */}
    </section>
  );
};

export default JoinUs;
