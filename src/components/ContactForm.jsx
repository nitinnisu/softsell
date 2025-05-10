import React from 'react';

function ContactForm() {
  return (
    <div className="py-28 bg-gray-800 text-gray-200 animate-slide-in-right">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-indigo-400 mb-12 text-center animate-fade-in-down delay-200">Get In Touch</h2>
        <form className="max-w-lg mx-auto rounded-xl shadow-md p-12 bg-gray-700">
          <div className="mb-6">
            <label htmlFor="name" className="block text-indigo-300 text-sm font-bold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-indigo-300 text-sm font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="company" className="block text-indigo-300 text-sm font-bold mb-2">Company (Optional)</label>
            <input
              type="text"
              id="company"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              placeholder="Your company name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="licenseType" className="block text-indigo-300 text-sm font-bold mb-2">License Type</label>
            <select
              id="licenseType"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
            >
              <option value="">Select License Type</option>
              <option value="perpetual">Perpetual</option>
              <option value="subscription">Subscription</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-indigo-300 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center animate-bounce delay-700">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;