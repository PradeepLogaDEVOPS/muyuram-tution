import React from 'react';
import { Calendar, Clock, Sun, Moon } from 'lucide-react';

const ClassTimingsSection = () => {
  const timings = [
    {
      day: 'Sunday',
      status: 'Working Day',
      time: '9:00 AM – 9:00 PM',
      icon: Sun,
      highlight: true,
      description: 'Full day classes available'
    },
    {
      day: 'Saturday',
      status: 'Working Day',
      time: '9:00 AM – 9:00 PM',
      icon: Sun,
      highlight: true,
      description: 'Full day classes available'
    },
    {
      day: 'Monday to Friday',
      status: 'Evening Classes',
      time: '6:00 PM – 9:00 PM',
      icon: Moon,
      highlight: false,
      description: 'Evening batch only'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#faf9f7] to-[#fefdfb]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-amber-50 border-2 border-blue-200 rounded-full px-6 py-3 mb-6">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-[#0f172a] font-bold text-sm">Flexible Class Schedule</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
              Class Timings
            </h2>
            <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Choose the schedule that works best for you. We offer both weekend and weekday batches.
            </p>
          </div>

          {/* Timings Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {timings.map((timing, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  timing.highlight 
                    ? 'border-amber-300 bg-gradient-to-br from-white to-amber-50' 
                    : 'border-gray-200'
                }`}
              >
                {/* Highlight Badge */}
                {timing.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${
                  timing.highlight 
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600' 
                    : 'bg-gradient-to-br from-blue-600 to-blue-700'
                }`}>
                  <timing.icon className="w-8 h-8 text-white" />
                </div>

                {/* Day */}
                <h3 className="text-2xl font-black text-[#0f172a] mb-2 text-center">
                  {timing.day}
                </h3>

                {/* Status */}
                <p className={`text-sm font-bold mb-4 text-center ${
                  timing.highlight ? 'text-amber-600' : 'text-blue-600'
                }`}>
                  {timing.status}
                </p>

                {/* Time */}
                <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-xl py-4 px-4 mb-4">
                  <Clock className="w-5 h-5 text-[#0f172a]" />
                  <p className="text-lg font-extrabold text-[#0f172a]">
                    {timing.time}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center">
                  {timing.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Info Card */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Flexible Scheduling Available
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Can't make these timings? We offer customized batch timings for groups. 
              Contact us to discuss your preferred schedule.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <p className="text-white font-bold">📞 Call for Custom Timings</p>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <p className="text-white font-bold">💬 WhatsApp for Quick Response</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-[#0f172a]">Note:</span> All timings are subject to batch availability. 
              Limited to 10 students per batch for optimal learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassTimingsSection;
