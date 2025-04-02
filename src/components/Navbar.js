import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for mobile menu
import Favicon from '../assets/favicon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img className="w-12 h-12" src={Favicon} alt="SignVision AI Logo" />
          <span className="text-2xl font-semibold tracking-wide text-gray-900">SignVision AI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-[1.2rem] font-medium tracking-wider">
          <Link to="/home" className="hover:text-gray-900 hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">Home</Link>
          <Link to="/about" className="hover:text-gray-900 hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">About</Link>
          <Link to="/developer" className="hover:text-gray-900 hover:font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">Developer</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4 text-center">
          <Link to="/home" className="block py-2 text-lg font-medium hover:text-gray-900 transition">Home</Link>
          <Link to="/about" className="block py-2 text-lg font-medium hover:text-gray-900 transition">About</Link>
          <Link to="/developer" className="block py-2 text-lg font-medium hover:text-gray-900 transition">Developer</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
