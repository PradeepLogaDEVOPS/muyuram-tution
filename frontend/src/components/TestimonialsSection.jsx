import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Class 12th Student',
      image: 'https://images.unsplash.com/photo-1577036421869-7c8d388d2123',
      rating: 5,
      text: 'The small batch size really helped me understand concepts better. Teachers give individual attention and clear every doubt patiently. My Physics score improved from 65 to 92!'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent of 10th Std Student',
      image: 'https://images.pexels.com/photos/4560148/pexels-photo-4560148.jpeg',
      rating: 5,
      text: 'Excellent coaching center! My son was struggling with Maths, but the personalized attention and clear teaching helped him gain confidence. Highly recommended for serious students.'
    },
    {
      name: 'Arun Raj',
      role: 'JEE Aspirant',
      image: 'https://images.unsplash.com/photo-1629360057380-18b15b42e650',
      rating: 5,
      text: 'Best decision I made for my JEE preparation. Only 10 students in class means I can ask questions freely. Faculty explains concepts from basics and focuses on problem-solving.'
    },
    {
      name: 'Lakshmi Devi',
      role: 'Parent of 11th Std Student',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      rating: 5,
      text: 'Very professional and result-oriented coaching. My daughter loves the teaching style and looks forward to classes. The free demo class gave us full confidence before joining.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Students & Parents Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from our students and their parents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-20 h-20 text-blue-600" />
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl px-8 py-6">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                ⭐ 4.9/5 Average Rating
              </p>
              <p className="text-gray-700">Based on 100+ student and parent reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
