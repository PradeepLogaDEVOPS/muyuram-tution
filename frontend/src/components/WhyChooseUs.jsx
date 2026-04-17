import React from 'react';
import { Users, Heart, BookOpen, Target, ClipboardCheck, MessageSquare, Wifi, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Only 10 Students Per Batch',
      description: 'Small batch sizes ensure personalized attention to every student',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Heart,
      title: 'Personal Attention',
      description: 'Individual focus on each student\'s learning pace and needs',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: BookOpen,
      title: 'Concept Clarity',
      description: 'Deep understanding of concepts, not just rote learning',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Target,
      title: 'Experienced Faculty',
      description: 'Highly qualified teachers with proven track record',
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: ClipboardCheck,
      title: 'Regular Tests & Revision',
      description: 'Continuous assessment and comprehensive revision sessions',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: MessageSquare,
      title: 'Doubt Clarification',
      description: 'Instant doubt clearing without hesitation or waiting',
      color: 'from-cyan-600 to-cyan-700'
    },
    {
      icon: Wifi,
      title: 'Online & Offline Flexibility',
      description: 'Choose your preferred mode of learning',
      color: 'from-teal-600 to-teal-700'
    },
    {
      icon: TrendingUp,
      title: 'Exam-Oriented Preparation',
      description: 'Strategic preparation focused on scoring high in exams',
      color: 'from-indigo-600 to-indigo-700'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Excellence Academy?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to achieve academic excellence and reach your goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-2xl font-bold mb-2">Limited Seats Available!</p>
            <p className="text-blue-100">Only 10 students per batch - Secure your spot today</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
