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
    <section className="py-20 md:py-28 bg-[#fefdfb]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
              What Students & Parents Say
            </h2>
            <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Real feedback from our students and their parents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 bg-white rounded-3xl hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 opacity-5">
                  <Quote className="w-24 h-24 text-[#0f172a]" />
                </div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-4 mb-5">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#f59e0b] shadow-md"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-[#0f172a]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-green-50 to-amber-50 border-2 border-green-200 rounded-3xl px-10 py-8 shadow-lg">
              <p className="text-3xl font-extrabold text-[#0f172a] mb-2">
                ⭐ 4.9/5 Average Rating
              </p>
              <p className="text-gray-700 text-lg font-semibold">Based on 100+ student and parent reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
