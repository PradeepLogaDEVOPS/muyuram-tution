import React from 'react';
import { TrendingUp, Award, Target, Users } from 'lucide-react';

const ResultsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Students Improve Scores',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Award,
      number: '90%+',
      label: 'High Scoring Students',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Concept Clarity Focus',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Users,
      number: '10',
      label: 'Students Per Batch',
      color: 'from-orange-600 to-orange-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud of our students' achievements and their academic growth
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Success Image & Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Building Confidence, Achieving Excellence
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  At Excellence Academy, success isn't just about marks—it's about building 
                  confidence, clarity, and a strong foundation for lifelong learning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our students don't just improve their scores; they develop problem-solving 
                  skills, critical thinking, and the confidence to tackle any academic challenge.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 p-5 rounded-r-lg">
                  <p className="text-blue-900 font-semibold mb-2">
                    🎯 Our Commitment
                  </p>
                  <p className="text-blue-800">
                    Every student receives personalized attention in our small batches of just 
                    10 students, ensuring no one is left behind.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1628887590815-2860da1c2900"
                alt="Student success"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Study Material</h4>
              <p className="text-gray-600 text-sm">Well-structured notes and practice questions</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Regular Assessment</h4>
              <p className="text-gray-600 text-sm">Weekly tests to track progress and improvement</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Experienced Mentors</h4>
              <p className="text-gray-600 text-sm">Dedicated faculty with years of teaching expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
