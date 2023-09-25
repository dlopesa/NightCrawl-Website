import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? 'bg-black bg-opacity-50' : 'bg-transparent'
      } fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-2xl font-bold text-white">NightCrawl</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-white hover:text-yellow-500">
            Features
          </a>
          <a href="#how-it-works" className="text-white hover:text-yellow-500">
            How It Works
          </a>
          <a href="#contact" className="text-white hover:text-yellow-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
