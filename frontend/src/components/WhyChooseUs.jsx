import React from 'react';
import { Users, Heart, BookOpen, Target, ClipboardCheck, MessageSquare, Wifi, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Only 10 Students Per Batch',
      description: 'Small batch sizes ensure personalized attention to every student',
      color: 'bg-[#0f172a]'
    },
    {
      icon: Heart,
      title: 'Personal Attention',
      description: 'Individual focus on each student\'s learning pace and needs',
      color: 'bg-rose-600'
    },
    {
      icon: BookOpen,
      title: 'Concept Clarity',
      description: 'Deep understanding of concepts, not just rote learning',
      color: 'bg-emerald-600'
    },
    {
      icon: Target,
      title: 'Experienced Faculty',
      description: 'Highly qualified teachers with proven track record',
      color: 'bg-[#f59e0b]'
    },
    {
      icon: ClipboardCheck,
      title: 'Regular Tests & Revision',
      description: 'Continuous assessment and comprehensive revision sessions',
      color: 'bg-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Doubt Clarification',
      description: 'Instant doubt clearing without hesitation or waiting',
      color: 'bg-purple-600'
    },
    {
      icon: Wifi,
      title: 'Online & Offline Flexibility',
      description: 'Choose your preferred mode of learning',
      color: 'bg-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Exam-Oriented Preparation',
      description: 'Strategic preparation focused on scoring high in exams',
      color: 'bg-indigo-600'
    }
  ];

  return (
    <section id="why-choose" className="py-20 md:py-28 bg-[#fefdfb]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Why Choose Mayuram Tuition Centre?
          </h2>
          <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            We provide everything you need to achieve academic excellence and reach your goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="text-center">
          <div className="inline-block bg-[#0f172a] text-white rounded-3xl px-10 py-8 shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold mb-2">Limited Seats Available!</p>
            <p className="text-amber-300 text-lg font-semibold">Only 10 students per batch - Secure your spot today</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
