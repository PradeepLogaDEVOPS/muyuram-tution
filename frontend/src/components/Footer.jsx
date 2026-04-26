import React from 'react';
import { BookOpen, Facebook, Instagram, Youtube, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-16 md:pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* Custom Premium Logo for Footer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                
                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-xl border border-white/10">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_premium-tuition-pro/artifacts/7ltriqny_ChatGPT%20Image%20Apr%2026%2C%202026%2C%2001_52_05%20PM.png"
                    alt="Mayuram Tuition Centre Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-extrabold leading-tight">Mayuram Tuition Centre</h3>
                <p className="text-xs text-amber-400 font-bold leading-tight">Premium Coaching</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Mayuram's most trusted coaching institute for 10th, 11th, 12th, JEE & NEET preparation.
            </p>
            <div className="space-y-2">
              <p className="text-amber-400 font-bold">
                Only 10 Students Per Batch
              </p>
              <p className="text-green-400 font-bold">
                18+ Years of Excellence
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-choose')}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('demo')}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Free Demo Class
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-amber-400">Our Courses</h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li>10th Standard - All Subjects</li>
              <li>11th Standard - PCM</li>
              <li>12th Standard - PCM</li>
              <li>JEE Preparation</li>
              <li>NEET Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-amber-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  [Your Address]<br />
                  Mayuram, Tamil Nadu
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">+91 877 869 0834</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <p className="text-gray-400 text-sm">[email protected]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Mayuram Tuition Centre. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-xl hover:bg-pink-600 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-xl hover:bg-red-600 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
