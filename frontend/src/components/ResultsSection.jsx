import React from 'react';
import { TrendingUp, Award, Target, Users } from 'lucide-react';

const ResultsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Students Improve Scores',
      color: 'bg-green-600'
    },
    {
      icon: Award,
      number: '90%+',
      label: 'High Scoring Students',
      color: 'bg-[#0f172a]'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Concept Clarity Focus',
      color: 'bg-purple-600'
    },
    {
      icon: Users,
      number: '10',
      label: 'Students Per Batch',
      color: 'bg-[#f59e0b]'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#fefdfb] to-[#faf9f7]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
              Our Success Story
            </h2>
            <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              We're proud of our students' achievements and their academic growth
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-5xl font-extrabold text-[#0f172a] mb-3">{stat.number}</h3>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Success Image & Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6">
                Real Results. Real Student Success.
              </h3>
              <div className="space-y-5">
                <p className="text-gray-700 leading-relaxed text-lg">
                  At Mayuram Tuition Centre, our students consistently improve their marks through focused teaching, regular practice, and personal attention.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We help students build confidence, clear concepts, and perform better in board exams, JEE, and NEET.
                </p>
                <div className="bg-amber-50 border-l-4 border-[#f59e0b] p-6 rounded-r-xl">
                 <p className="text-[#0f172a] font-bold text-lg mb-2">
  Our Small Batch Advantage
</p>
<p className="text-gray-700 leading-relaxed">
  Only 10 students per batch ensures every student gets individual attention, doubt clearing, and better results.
</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
   <img 
  src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
  alt="Happy Indian students"
  className="rounded-3xl shadow-2xl"
/>
            </div>
          </div>

          {/* Bottom Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="text-xl font-bold text-[#0f172a] mb-3">Comprehensive Study Material</h4>
              <p className="text-gray-600">Well-structured notes and practice questions</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h4 className="text-xl font-bold text-[#0f172a] mb-3">Regular Assessment</h4>
              <p className="text-gray-600">Weekly tests to track progress and improvement</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#0f172a] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h4 className="text-xl font-bold text-[#0f172a] mb-3">Experienced Mentors</h4>
              <p className="text-gray-600">Dedicated faculty with years of teaching expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
