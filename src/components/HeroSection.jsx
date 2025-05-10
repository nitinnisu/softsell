import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="bg-gray-800 py-40 text-gray-200 overflow-hidden relative">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-8 tracking-tight leading-tight animate-fade-in-down">
          Unlock the True Value of Your Unused Software
        </h1>
        <p className="text-xl mb-12 opacity-80 animate-fade-in">
          Effortlessly resell your software licenses and maximize your returns with SoftSell.
        </p>
        <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-5 px-10 rounded-full shadow-lg transition duration-300 ease-in-out animate-bounce delay-500">
          Get a Free Quote
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-10 animate-pulse" style={{ animationDuration: '8s', animationIterationCount: 'infinite' }}></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gray-600 opacity-10 animate-pulse delay-200" style={{ animationDuration: '6s', animationIterationCount: 'infinite' }}></div>
    </div>
  );
}

export default HeroSection;