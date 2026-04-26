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
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-gradient-to-br from-[#fefdfb] via-[#faf9f7] to-[#f5f3ef]">
      {/* Premium Curved Gold Design Background */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#f59e0b" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <svg className="absolute bottom-0 right-0 w-full h-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#f59e0b" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge - 18+ Years */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-300 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-[#0f172a] font-extrabold text-sm md:text-base">18+ Years of Excellence in Physics Coaching</span>
            </div>

            {/* Main Headline - More Luxury Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0f172a] mb-6 md:mb-8 leading-tight tracking-tight">
              Best Tuition Centre in Mayuram for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700">10th, 11th, 12th, JEE & NEET</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-10 md:mb-12 font-bold">
              Only 10 Students Per Batch | Personal Attention | High Score Focus
            </p>

            {/* Key Highlights Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5 mb-12 md:mb-14">
              <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-[#0f172a] font-semibold">Free Demo Class Available</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <Wifi className="w-5 h-5 text-[#0f172a]" />
                <span className="text-[#0f172a] font-semibold">Online & Offline Classes</span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <Users className="w-5 h-5 text-[#f59e0b]" />
                <span className="text-[#0f172a] font-semibold">Limited Seats Per Batch</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-10">
              <Button 
                onClick={scrollToDemo}
                size="lg"
                className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-extrabold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
              >
                Book Free Demo Class
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-extrabold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm md:text-base text-gray-600 font-semibold">
              ⭐ Trusted by parents for 18+ years | Limited seats available
            </p>
          </div>

          {/* Right Side - Founder Image with Glow */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-blue-600/20 rounded-3xl blur-3xl"></div>
              
              {/* Image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-amber-100">
                <img 
                  src="https://images.unsplash.com/photo-1629360021730-3d258452c425"
                  alt="Founder - Expert Physics Teacher"
                  className="rounded-2xl w-full h-auto"
                />
                {/* Founder Quick Info Overlay */}
                <div className="absolute bottom-12 left-8 right-8 bg-gradient-to-r from-[#0f172a]/95 to-[#1e293b]/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-amber-400/30">
                  <p className="text-amber-400 font-bold text-sm mb-1">Founder & Lead Faculty</p>
                  <p className="text-white font-extrabold text-xl mb-1">A. Rajaguruparan</p>
                  <p className="text-gray-300 text-sm">M.Sc, M.Ed, M.Phil | 18+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators - Bottom Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center pt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-4xl md:text-5xl font-black text-[#0f172a] mb-1">10</p>
            <p className="text-sm text-gray-600 font-semibold">Students Per Batch</p>
          </div>
          <div className="bg-white rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-4xl md:text-5xl font-black text-[#0f172a] mb-1">18+</p>
            <p className="text-sm text-gray-600 font-semibold">Years Experience</p>
          </div>
          <div className="bg-white rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-4xl md:text-5xl font-black text-[#0f172a] mb-1">95%</p>
            <p className="text-sm text-gray-600 font-semibold">Score Improvement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
