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
          <div className="flex items-center gap-4">
            <div className="relative group">
              {/* Premium Logo Container with Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Main Logo Box */}
              <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-4 rounded-2xl shadow-2xl border border-amber-500/20 group-hover:scale-105 transition-all duration-300">
                {/* Peacock Feather Pattern - Top Right */}
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                </div>
                
                {/* Peacock Feather Pattern - Bottom Left */}
                <div className="absolute -bottom-1 -left-1">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                
                {/* Layered Icon Design - Peacock Feather + Book Concept */}
                <div className="relative">
                  {/* Background Decorative Element (Feather representation) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-sm"></div>
                  </div>
                  
                  {/* Main Book Icon with Gold Gradient */}
                  <BookOpen className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-3" 
                    style={{
                      stroke: 'url(#goldGradient)',
                      strokeWidth: 2.5,
                      filter: 'drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3))'
                    }} 
                  />
                  
                  {/* SVG Gradient Definition */}
                  <svg width="0" height="0" style={{position: 'absolute'}}>
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Peacock Eye Pattern Dots */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full"></div>
                <div className="absolute top-1/2 left-0 w-1 h-1 bg-amber-400/60 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                Mayuram Tuition Centre
              </h1>
              <p className="text-xs md:text-sm text-amber-600 font-bold tracking-wide leading-tight">
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
              onClick={() => window.open('https://wa.me/918778690834?text=Hi%2C%20I%20want%20to%20book%20a%20demo%20class%20at%20Mayuram%20Tuition%20Centre', '_blank')}
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
              onClick={() => window.open('https://wa.me/918778690834?text=Hi%2C%20I%20want%20to%20book%20a%20demo%20class%20at%20Mayuram%20Tuition%20Centre', '_blank')}
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
