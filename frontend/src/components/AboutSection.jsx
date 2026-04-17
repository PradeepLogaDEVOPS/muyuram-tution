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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Excellence Academy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Excellence Academy, we believe every student has unique potential. Our mission is to 
              unlock that potential through personalized coaching, concept clarity, and dedicated mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1629360021730-3d258452c425"
                alt="Personal tutoring"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Why We're Different
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional coaching centers with crowded classrooms, we maintain a strict 
                limit of <span className="font-bold text-blue-600">only 10 students per batch</span>. 
                This ensures every student receives the personal attention they deserve.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our experienced faculty focuses on building strong fundamentals, clearing doubts 
                instantly, and preparing students not just for exams, but for academic excellence 
                in their future.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <p className="text-blue-900 font-semibold">
                  "Our goal is not just to improve marks, but to build confidence and 
                  create lifelong learners."
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
