import React from 'react';
import '../index.css';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-indigo-500">SoftSell</div>
            <div>
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#how-it-works" // Keep the href for accessibility fallback
                    className="text-gray-700 hover:text-indigo-500"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default jump
                      scrollToSection('how-it-works');
                    }}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#why-choose-us"
                    className="text-gray-700 hover:text-indigo-500"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('why-choose-us');
                    }}
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-indigo-500"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-16">
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;