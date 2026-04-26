import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

const WhatsAppSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918778690834?text=Hi, I want to enquire about Mayuram Tuition Academy classes', '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-green-600 via-green-700 to-green-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <MessageCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Have Questions? Let's Chat!
          </h2>
          <p className="text-xl md:text-2xl text-green-50 mb-12">
            Get instant answers to all your queries on WhatsApp
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 mb-12">
            <div className="grid sm:grid-cols-3 gap-8 text-white">
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <p className="text-4xl">💬</p>
                </div>
                <p className="font-bold text-lg mb-2">Quick Response</p>
                <p className="text-green-100">Get replies within minutes</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <p className="text-4xl">📞</p>
                </div>
                <p className="font-bold text-lg mb-2">Direct Contact</p>
                <p className="text-green-100">Talk to our team directly</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <p className="text-4xl">🎯</p>
                </div>
                <p className="font-bold text-lg mb-2">Personalized Help</p>
                <p className="text-green-100">Get guidance for your needs</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50 font-bold px-12 py-8 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Chat with Us on WhatsApp
          </Button>

          <p className="text-green-100 mt-8 text-lg font-medium">
            Available Monday to Saturday, 9 AM - 7 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
