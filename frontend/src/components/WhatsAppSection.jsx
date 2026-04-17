import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

const WhatsAppSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hi, I have a question about the courses', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-500 via-green-600 to-green-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions? Let's Chat!
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Get instant answers to all your queries on WhatsApp
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-3 gap-6 text-white">
              <div>
                <p className="text-3xl font-bold mb-2">💬</p>
                <p className="font-semibold">Quick Response</p>
                <p className="text-green-100 text-sm">Get replies within minutes</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">📞</p>
                <p className="font-semibold">Direct Contact</p>
                <p className="text-green-100 text-sm">Talk to our team directly</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">🎯</p>
                <p className="font-semibold">Personalized Help</p>
                <p className="text-green-100 text-sm">Get guidance for your needs</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-green-600 hover:bg-green-50 font-bold px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Chat with Us on WhatsApp
          </Button>

          <p className="text-green-100 mt-6">
            Available Monday to Saturday, 9 AM - 7 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
