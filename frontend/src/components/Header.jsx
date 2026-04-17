import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Excellence Academy
              </h1>
              <p className="text-xs text-gray-600">Mayuram's Premier Coaching</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('demo')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6"
            >
              Book Free Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t pt-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('demo')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full"
            >
              Book Free Demo
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
