import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, CheckCircle, Users, Wifi, Award } from 'lucide-react';

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
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
          alt="Students learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
            <Award className="w-4 h-4 text-yellow-300" />
            <span className="text-white font-medium text-sm">Mayuram's Most Trusted Coaching Institute</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Best Tuition Centre in Mayuram for{' '}
            <span className="text-yellow-300">10th, 11th, 12th, JEE & NEET</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
            Only 10 Students Per Batch | Personal Attention | High Score Focus
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/20">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="text-white font-medium">Free Demo Class Available</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/20">
              <Wifi className="w-5 h-5 text-blue-300" />
              <span className="text-white font-medium">Online & Offline Classes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/20">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">Limited Seats - Batch Filling Fast</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToDemo}
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Book Free Demo Class
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              variant="outline"
              className="bg-green-500 text-white border-green-400 hover:bg-green-600 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Bottom highlight */}
          <div className="mt-12 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-full text-lg shadow-lg">
            🔥 Only 10 Students Per Batch - Register Now!
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
