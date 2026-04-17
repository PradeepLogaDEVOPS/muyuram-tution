import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CoursesSection from '../components/CoursesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import DemoClassSection from '../components/DemoClassSection';
import ResultsSection from '../components/ResultsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhatsAppSection from '../components/WhatsAppSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <DemoClassSection />
      <ResultsSection />
      <TestimonialsSection />
      <WhatsAppSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
