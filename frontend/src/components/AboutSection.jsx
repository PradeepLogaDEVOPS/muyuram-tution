import React from 'react';
import { Target, TrendingUp, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Concept Clarity',
      description: 'Deep understanding of fundamentals'
    },
    {
      icon: Heart,
      title: 'Individual Attention',
      description: 'Personalized learning approach'
    },
    {
      icon: Target,
      title: 'Result Oriented',
      description: 'Focused on achieving high scores'
    },
    {
      icon: TrendingUp,
      title: 'Confidence Building',
      description: 'Empowering students to excel'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#fefdfb]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
              About Mayuram Tuition Centre
            </h2>
            <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Mayuram Tuition Centre, we believe every student has unique potential. Our mission is to 
              unlock that potential through personalized coaching, concept clarity, and dedicated mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1629360021730-3d258452c425"
                alt="Personal tutoring"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
                Why We're Different
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Unlike traditional coaching centers with crowded classrooms, we maintain a strict 
                limit of <span className="font-bold text-[#f59e0b]">only 10 students per batch</span>. 
                This ensures every student receives the personal attention they deserve.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our experienced faculty focuses on building strong fundamentals, clearing doubts 
                instantly, and preparing students not just for exams, but for academic excellence 
                in their future.
              </p>
              <div className="bg-amber-50 border-l-4 border-[#f59e0b] p-6 rounded-r-xl">
                <p className="text-[#0f172a] font-semibold text-lg italic">
                  "Our goal is not just to improve marks, but to build confidence and 
                  create lifelong learners."
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0f172a] w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                  <feature.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h4 className="text-xl font-bold text-[#0f172a] mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
