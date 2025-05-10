import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaChartLine, FaBolt } from 'react-icons/fa';

function WhyChooseUs() {
  return (
    <div className="py-28 bg-gray-800 text-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-400 mb-16 animate-fade-in">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-xl transition duration-300 ease-in-out animate-zoom-in delay-100">
            <div className="w-16 h-16 bg-indigo-600 text-indigo-200 rounded-full flex items-center justify-center mb-6 text-2xl">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Maximize Returns</h3>
            <p className="text-gray-300 text-center">Get the best possible value for your unused software licenses.</p>
          </div>
          <div className="bg-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-xl transition duration-300 ease-in-out animate-zoom-in delay-200">
            <div className="w-16 h-16 bg-indigo-600 text-indigo-200 rounded-full flex items-center justify-center mb-6 text-2xl">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Simple Process</h3>
            <p className="text-gray-300 text-center">Our platform is designed for ease of use, from upload to payout.</p>
          </div>
          <div className="bg-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-xl transition duration-300 ease-in-out animate-zoom-in delay-300">
            <div className="w-16 h-16 bg-indigo-600 text-indigo-200 rounded-full flex items-center justify-center mb-6 text-2xl">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Secure Transactions</h3>
            <p className="text-gray-300 text-center">We ensure all transactions are safe and your data is protected.</p>
          </div>
          <div className="bg-gray-700 rounded-xl shadow-md p-10 flex flex-col items-center hover:shadow-xl transition duration-300 ease-in-out animate-zoom-in delay-400">
            <div className="w-16 h-16 bg-indigo-600 text-indigo-200 rounded-full flex items-center justify-center mb-6 text-2xl">
              <FaBolt />
            </div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Fast Payments</h3>
            <p className="text-gray-300 text-center">Receive your earnings quickly once your licenses are successfully sold.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;