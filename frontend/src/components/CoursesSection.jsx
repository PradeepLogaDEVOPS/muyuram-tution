import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Users, Wifi, BookOpen, CheckCircle } from 'lucide-react';

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

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Courses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of specialized courses designed to help you achieve academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{course.title}</h3>
                  <p className="text-blue-200 font-medium">{course.subtitle}</p>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardDescription className="text-gray-700 leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-3">
                  {course.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Batch Info */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-900">Only 10 Students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">Online & Offline</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    onClick={scrollToDemo}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  >
                    Book Demo
                  </Button>
                  <Button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
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
