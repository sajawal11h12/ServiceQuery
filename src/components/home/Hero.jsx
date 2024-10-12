import React from 'react';
import { Gradient } from '../../Gradient';
import Button from '../../button';
import ButtonGradient from '../../buttonGrad';
import headerbg from '../../assets/images/headerbg.svg'


const Heropage = () => {
  return (
    <header
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${headerbg})` }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]">
          Revolutionize Data Access{" "}
          <span className="gradi-theme-text">With Query Service</span>
        </h1>
        <p className="lg:text-xl md:text-lg text-base my-[46px]">
          The open source library for data querying over REST APIs supporting polyglot, multi-engine database access.
        </p>
        <form className="w-full">
          <div className="flex flex-col justify-center md:flex-row md:max-w-[610px] mx-auto">
            <Gradient />
            <Button>Get started</Button>
          </div>
          <ButtonGradient />
        </form>
      </div>
    </header>
   
    
  );
};

export default Heropage;
