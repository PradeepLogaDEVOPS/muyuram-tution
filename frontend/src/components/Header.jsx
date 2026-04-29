import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, BookOpen, Sparkles } from 'lucide-react';

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
          <div className="flex items-center gap-3 md:gap-4">
            {/* Premium Peacock + Book Logo - Prominent Size */}
            <div className="relative group flex-shrink-0">
              {/* Subtle glow effect for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-900/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Logo - Clean, No Container */}
              <img 
                src="https://customer-assets.emergentagent.com/job_premium-tuition-pro/artifacts/1xbu5h9c_ChatGPT%20Image%20Apr%2026%2C%202026%2C%2002_06_42%20PM.png"
                alt="Mayuram Tuition Centre - Premium Education"
               className="w-20 h-auto md:w-32 lg:w-36 object-contain transition-all duration-300 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(15, 23, 42, 0.12))',
                  maxHeight: '120px'
                }}
              />
            </div>
            
            {/* Text Branding - Properly Spaced */}
            <div className="flex flex-col justify-center">
              <h1 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                Mayuram Tuition Centre
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-amber-600 font-bold tracking-wide leading-tight mt-0.5">
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
              onClick={() => {
                const message = "Hi, I want to book a free demo class for Mayuram Tuition Centre";
                window.open(`https://wa.me/918778690834?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-7 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border-2 border-amber-500"
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
              onClick={() => {
                const message = "Hi, I want to book a free demo class for Mayuram Tuition Centre";
                window.open(`https://wa.me/918778690834?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white w-full rounded-full shadow-lg font-semibold border-2 border-amber-500"
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
