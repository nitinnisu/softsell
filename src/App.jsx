import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import ContactForm from './components/ContactForm';
import './index.css';

function App() {
  return (
    <Router>
      <nav  >
        <div className="container mx-auto py-5 flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold tracking-tight">SoftSell</Link>
          <div className="flex justify-center">
            <ul className="flex space-x-10 items-center">
              <li><Link to="/" className="hover:text-indigo-400 transition duration-300 text-lg">Home</Link></li>
              <li><Link to="/how-it-works" className="hover:text-indigo-400 transition duration-300 text-lg">How It Works</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-indigo-400 transition duration-300 text-lg">Why Choose Us</Link></li>
              <li><Link to="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 text-lg">Contact Us</Link></li>
            </ul>
          </div>
          <div />
        </div>
      </nav>

      <div style={{ paddingTop: '70px' }} className="bg-gray-800 text-gray-200 min-h-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-choose-us" element={
            <>
              <WhyChooseUs />
              <div className="py-16 bg-gray-900 text-gray-200">
                <div className="container mx-auto text-center">
                  <h2 className="text-3xl font-bold text-indigo-400 mb-12">Testimonials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300 ease-in-out">
                      <p className="text-gray-300 italic mb-6">"SoftSell made selling our unused licenses incredibly easy. The process was smooth and the payout was quick!"</p>
                      <p className="text-sm font-semibold text-indigo-400">- Rohan Sharma, Tech Innovations Ltd.</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition duration-300 ease-in-out">
                      <p className="text-gray-300 italic mb-6">"I was surprised by how much value we recovered from our dormant software. SoftSell is a game-changer for us!"</p>
                      <p className="text-sm font-semibold text-indigo-400">- Priya Verma, Global Solutions Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
