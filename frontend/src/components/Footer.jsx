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
              {/* Premium Peacock Logo for Footer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-900/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <img 
                  src="https://customer-assets.emergentagent.com/job_premium-tuition-pro/artifacts/1xbu5h9c_ChatGPT%20Image%20Apr%2026%2C%202026%2C%2002_06_42%20PM.png"
                  alt="Mayuram Tuition Centre Logo"
                  className="w-16 md:w-20 lg:w-24 object-contain"
                  style={{
                    filter: 'drop-shadow(0 2px 8px rgba(245, 158, 11, 0.2))'
                  }}
                />
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
  27, Tiruveedhi Amman Koil St,<br />
  SVP Nagar, Janakiraman Colony,<br />
  Arumbakkam, Chennai - 600107
</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
  href="tel:+918778690834"
  className="text-gray-400 text-sm hover:text-white"
>
  +91 87786 90834
</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
  href="mailto:mayuramtuition@gmail.com"
  className="text-gray-400 text-sm hover:text-white"
>
  mayuramtuitioncentre@gmail.com
</a>
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
