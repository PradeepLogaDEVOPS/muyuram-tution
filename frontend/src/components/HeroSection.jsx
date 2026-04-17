import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, CheckCircle, Users, Wifi } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi, I want to know more about the courses', '_blank');
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-gradient-to-br from-[#fefdfb] via-[#faf9f7] to-[#f5f3ef]">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0f172a] mb-6 md:mb-8 leading-tight">
            Best Tuition Centre in Mayuram for{' '}
            <span className="text-[#f59e0b]">10th, 11th, 12th, JEE & NEET</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-10 md:mb-12 font-semibold">
            Only 10 Students Per Batch | Personal Attention | High Score Focus
          </p>

          {/* Key Highlights Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 mb-12 md:mb-14">
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-[#0f172a] font-semibold">Free Demo Class Available</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
              <Wifi className="w-5 h-5 text-[#0f172a]" />
              <span className="text-[#0f172a] font-semibold">Online & Offline Classes</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
              <Users className="w-5 h-5 text-[#f59e0b]" />
              <span className="text-[#0f172a] font-semibold">Limited Seats Per Batch</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
            <Button 
              onClick={scrollToDemo}
              size="lg"
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              Book Free Demo Class
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center pt-6">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#0f172a]">10</p>
              <p className="text-sm text-gray-600 font-medium">Students Per Batch</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#0f172a]">100%</p>
              <p className="text-sm text-gray-600 font-medium">Personal Attention</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-[#0f172a]">95%</p>
              <p className="text-sm text-gray-600 font-medium">Score Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
