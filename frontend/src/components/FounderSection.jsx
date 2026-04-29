import React from 'react';
import { GraduationCap, Award, TrendingUp, BookOpen } from 'lucide-react';

const FounderSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
       title: 'Qualifications',
    details: 'B.Tech IT',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: BookOpen,
      title: 'Department',
      details: 'Academic Head & Founder',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: TrendingUp,
      title: 'Experience',
      details: '18+ Years in Teaching & Academic Leadership',
      color: 'from-amber-600 to-amber-700'
    },
    {
      icon: Award,
      title: 'Achievement',
      details: 'Consistent Top Results & Student Success',
      color: 'from-green-600 to-green-700'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#fefdfb] to-[#faf9f7]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
              Meet Our Founder
            </h2>
            <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Learn from an experienced educator dedicated to Physics excellence
            </p>
          </div>

          {/* Founder Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Image Section */}
              <div className="md:col-span-2 p-8 md:p-12">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-600/10 rounded-3xl blur-2xl"></div>
                  
                  {/* Profile Image */}
                  <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-2">
                    <img 
                       src="/madam.jpg"
  alt="Founder"
  className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Experience Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full shadow-xl">
                    <p className="font-extrabold text-sm whitespace-nowrap">Expert Faculty | Proven Results</p>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="md:col-span-3 p-8 md:p-12 md:pl-0">
                <div className="mb-8">
                  <h3 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-3">
                    
                    Mrs. J. Dhivya
                  </h3>
                  <p className="text-xl text-amber-600 font-bold mb-4">
                    B.Tech IT
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founder & Academic Head with 18+ years of experience in building strong academic foundations and delivering excellent results.
                  </p>
                </div>

                {/* Achievement Icons */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white p-5 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`bg-gradient-to-br ${item.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#0f172a] text-sm mb-1">{item.title}</p>
                        <p className="text-gray-600 text-xs leading-snug">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-8 bg-gradient-to-r from-amber-50 to-blue-50 border-l-4 border-amber-500 p-6 rounded-r-2xl">
                  <p className="text-[#0f172a] font-bold text-lg italic">
                    "My mission is to make Physics accessible, understandable, and enjoyable 
                    for every student, ensuring they achieve excellence in their academics."
                  </p>
                  <p className="text-gray-600 text-sm mt-2">— Mrs. J. Dhivya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badges */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <p className="text-2xl font-black text-[#0f172a] mb-2">1000+</p>
              <p className="text-gray-600 font-semibold text-sm">Successful Students</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <p className="text-2xl font-black text-[#0f172a] mb-2">95%+</p>
              <p className="text-gray-600 font-semibold text-sm">Score Improvement</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <p className="text-2xl font-black text-[#0f172a] mb-2">100%</p>
              <p className="text-gray-600 font-semibold text-sm">Dedication to Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
