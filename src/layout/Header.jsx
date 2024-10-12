import routesConstants from "../constants/routeConstants";
import { Link , useLocation } from "react-router-dom";
import { Icons } from "../assets/icons";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";
import Button from "../button";
import ButtonGradient from "../buttonGrad";
import { Gradient } from "../Gradient";
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
        className={`max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto h-9 w-full fixed top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-[#0e0c15e0] shadow-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="flex items-center gap-x-9">
          <Link
            to={routesConstants.ROOT}
            className="max-w-[120px] lg:max-w-[300px] md:max-w-[140px]"
          >
            <img src={Icons.logo} alt="site logo" />
          </Link>
          <nav
            className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
              isNavbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
                <IoMdClose size={32} />
              </button>
            </div>
            <ul className="flex lg:flex-row lg:items-center xl:gap-x-12 lg:gap-x-10 gap-x-8 flex-col gap-y-5 text-center">
            <li className="nav-item">
  <Link
    to="/"
    className="ml-80 text-white text-base font-source-sans hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
  >
    Home
  </Link>
</li>
<li className="nav-item">
  <Link
    to={routesConstants.FEATURES}
    className="text-white text-base font-source-sans hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
  >
    Features
  </Link>
  <Link
    to=""
    className="ml-10 text-white text-base font-source-sans hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
  >
    Get Started
  </Link>
  <Link
    to=""
    className="ml-10 text-white text-base font-source-sans hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
  >
    Documentation
  </Link>
  <Link
    to=""
    className="ml-10 text-white text-base font-source-sans hover:opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out border-b-2 border-transparent hover:border-purple-500 font-normal whitespace-nowrap"
  >
    About
  </Link>
</li>

            </ul>

          </nav>
        </div>

        <button
          type="button"
          className="lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all"
          onClick={toggleNavbar}
        >
          <MdMenu size={32} />
        </button> 
      </div>

    </header>
  );
};

export default Header;
