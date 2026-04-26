import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';
import { Users, Wifi, CheckCircle } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: '10th Standard Coaching',
      subtitle: 'All Subjects',
      image: 'https://images.unsplash.com/photo-1758685734312-5134968399a8',
      description: 'Complete preparation for 10th board exams with focus on all subjects. Build strong foundation for higher studies.',
      benefits: [
        'Complete syllabus coverage',
        'Regular tests & assessments',
        'Doubt clearing sessions',
        'Study material provided'
      ]
    },
    {
      title: '11th Standard',
      subtitle: 'Physics, Chemistry, Maths',
      image: 'https://images.unsplash.com/photo-1667912100232-a457b313ec18',
      description: 'Strong conceptual clarity in PCM subjects. Perfect foundation for competitive exams and 12th standard.',
      benefits: [
        'Concept-based learning',
        'Problem-solving techniques',
        'Regular practice tests',
        'Competitive exam prep'
      ]
    },
    {
      title: '12th Standard',
      subtitle: 'Physics, Chemistry, Maths',
      image: 'https://images.pexels.com/photos/9158769/pexels-photo-9158769.jpeg',
      description: 'Comprehensive coaching for board exams and entrance test preparation with expert guidance.',
      benefits: [
        'Board exam focused',
        'Previous year papers',
        'Mock tests & revision',
        'Individual attention'
      ]
    },
    {
      title: 'JEE / NEET Coaching',
      subtitle: 'Entrance Exam Preparation',
      image: 'https://images.pexels.com/photos/6684506/pexels-photo-6684506.jpeg',
      description: 'Specialized coaching for JEE and NEET aspirants with proven teaching methodology and success track record.',
      benefits: [
        'Comprehensive coverage',
        'Topic-wise tests',
        'Doubt resolution',
        'Performance analysis'
      ]
    }
  ];

  const handleBookDemo = () => {
    window.open('https://wa.me/918778690834?text=Hi, I want to book a FREE Demo Class', '_blank');
  };

  const handleEnquire = () => {
    window.open('https://wa.me/918778690834?text=Hi, I want to enquire about Mayuram Tuition Academy classes', '_blank');
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-gradient-to-b from-[#faf9f7] to-[#fefdfb]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Our Courses
          </h2>
          <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Choose from our range of specialized courses designed to help you achieve academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 bg-white rounded-3xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{course.title}</h3>
                  <p className="text-amber-300 font-semibold">{course.subtitle}</p>
                </div>
              </div>
              
              <CardHeader className="pb-4 pt-6">
                <CardDescription className="text-gray-700 leading-relaxed text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-3">
                  {course.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Batch Info */}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#f59e0b]" />
                    <span className="text-sm font-bold text-[#0f172a]">Only 10 Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-[#0f172a]" />
                    <span className="text-sm font-bold text-[#0f172a]">Online & Offline</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    onClick={handleBookDemo}
                    className="flex-1 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-2 border-amber-500"
                  >
                    Book Demo
                  </Button>
                  <Button 
                    onClick={handleEnquire}
                    variant="outline"
                    className="flex-1 border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white rounded-full transition-all duration-300"
                  >
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
