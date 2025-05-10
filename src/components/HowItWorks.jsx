import React from 'react';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';

function HowItWorks() {
  return (
    <div className="py-28 bg-gray-800 text-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-400 mb-16 animate-slide-in-left">How Our Simple Process Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="bg-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-lg transition duration-300 ease-in-out animate-slide-in-bottom delay-100">
            <div className="w-20 h-20 bg-indigo-600 text-indigo-200 rounded-full flex items-center justify-center mb-6 text-3xl">
              <FaUpload />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-4">List Your License</h3>
            <p className="text-gray-300 text-center">Easily list the software licenses you wish to sell on our secure platform.</p>
          </div>
          <div className="bg-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-lg transition duration-300 ease-in-out animate-slide-in-bottom delay-200">
            <div className="w-20 h-20 bg-indigo-600 text-indigo-200 rounded-full flex items-center justify-center mb-6 text-3xl">
              <FaSearchDollar />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Get a Valuation</h3>
            <p className="text-gray-300 text-center">Our system provides a fair and transparent valuation for your licenses.</p>
          </div>
          <div className="bg-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-lg transition duration-300 ease-in-out animate-slide-in-bottom delay-300">
            <div className="w-20 h-20 bg-indigo-600 text-indigo-200 rounded-full flex items-center justify-center mb-6 text-3xl">
              <FaMoneyBillWave />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Receive Payment</h3>
            <p className="text-gray-300 text-center">Once sold, receive your payment quickly and securely.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;