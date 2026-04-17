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
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white/98 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-3.5 rounded-2xl shadow-lg">
                <GraduationCap className="w-7 h-7 text-amber-400" strokeWidth={2.5} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-[#0f172a] tracking-tight">
                Mayuram Tuition Centre
              </h1>
              <p className="text-xs md:text-sm text-amber-600 font-bold tracking-wide">
                Premium Coaching for Academic Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#0f172a] font-semibold transition-colors text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-[#0f172a] font-semibold transition-colors text-sm"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-gray-700 hover:text-[#0f172a] font-semibold transition-colors text-sm"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#0f172a] font-semibold transition-colors text-sm"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('demo')}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-7 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
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
              <X className="w-6 h-6 text-[#0f172a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0f172a]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-[#0f172a] font-semibold py-2 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-left text-gray-700 hover:text-[#0f172a] font-semibold py-2 transition-colors"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('why-choose')}
              className="text-left text-gray-700 hover:text-[#0f172a] font-semibold py-2 transition-colors"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-700 hover:text-[#0f172a] font-semibold py-2 transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('demo')}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white w-full rounded-full shadow-lg font-semibold"
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
