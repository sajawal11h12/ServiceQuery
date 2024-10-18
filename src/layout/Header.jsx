import routesConstants from "../constants/routeConstants";
import { Link, useLocation } from "react-router-dom";
import { Icons } from "../assets/icons";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";
import Button from "../button"; // Ensure you have a Button component
import ButtonGradient from "../buttonGrad"; // Ensure you have a ButtonGradient component
import { Gradient } from "../Gradient"; // If used, ensure import is valid
import headerbg from '../assets/images/headerbg.svg';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Track scroll event to add/remove 'scrolled' class for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="top-0">
      <div
        className={`max-w-full px-8 flex items-center justify-between py-[30px] mx-auto h-9 w-full fixed top-0 z-50 bg-[#09030c67]`}
       
        
      >
        <div className="flex items-center gap-x-9">
          <Link
            to={routesConstants.ROOT}
            className="max-w-[120px] lg:max-w-[300px] md:max-w-[140px]"
          >
            <img className="h-6 w-[300px]" src={Icons.logo} alt="site logo" />
          </Link>
          <nav
            className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
              isNavbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
                <IoMdClose size={32}  color="white"/>
              </button>
            </div>
            <ul className="flex flex-col lg:flex-row lg:items-center text-center gap-y-5 lg:gap-x-10 xl:gap-x-12">
  <li className="nav-item lg:ml-20 ml-0">
    <Link
      to="/"
      className="font-poppins text-white text-base hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
    >
      Home
    </Link>
  </li>

  <li className="nav-item">
    <Link
      to={routesConstants.FEATURES}
      className="text-white text-base font-poppins hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
    >
      Features
    </Link>
  </li>

  <li className="nav-item">
    <Link
      to={routesConstants.GET_STARTED}
      className="text-white text-base font-poppins hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
    >
      Get Started
    </Link>
  </li>

  <li className="nav-item">
    <Link
      to={routesConstants.CONSULTING}
      className="text-white text-base font-poppins hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
    >
      Consulting
    </Link>
  </li>

  <li className="nav-item">
    <Link
      to={routesConstants.ABOUT}
      className="text-white text-base font-poppins hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
    >
      About
    </Link>
  </li>

  {/* Login and Register Buttons */}
  <li className="nav-item lg:ml-20 ml-0">
    <Link to={routesConstants.REGISTER}>
      <Button className='text-white'>
        Register
      </Button>
    </Link>
  </li>

  <li className="nav-item">
    <Link
      to={routesConstants.LOGIN}
      className="text-white text-base font-poppins hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
    >
      Login
    </Link>
  </li>
</ul>

          </nav>
        </div>

        <button
          type="button"
          className=" lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all"
          onClick={toggleNavbar}
        >
          <MdMenu size={32} color="white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
