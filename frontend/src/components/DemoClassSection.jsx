import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { GraduationCap, CheckCircle, Clock, Award } from 'lucide-react';
import { toast } from 'sonner';

const DemoClassSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.class) {
      toast.error('Please fill all fields');
      return;
    }

    // Format message for WhatsApp
    const message = `Hi, I want to book a free demo class for Mayuram Tuition Centre

Name: ${formData.name}
Phone: ${formData.phone}
Class: ${formData.class}`;
    
    // Direct WhatsApp redirect
    window.open(`https://wa.me/918778690834?text=${encodeURIComponent(message)}`, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    // Clear form
    setFormData({ name: '', phone: '', class: '' });
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span className="text-white font-semibold">Try Before You Join</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Book Your Free Demo Class
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-3">
              Experience our teaching methodology before enrolling
            </p>
            <p className="text-lg text-amber-300 font-bold">
              Only 10 Students Per Batch - Limited Seats Available!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
            {/* Form */}
            <Card className="shadow-2xl border-0 rounded-3xl bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl md:text-3xl font-bold text-[#0f172a]">Register for Free Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-[#0f172a] font-semibold mb-2 block text-base">
                      Student Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter student name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-14 rounded-xl border-2 border-gray-200 focus:border-[#0f172a]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#0f172a] font-semibold mb-2 block text-base">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-14 rounded-xl border-2 border-gray-200 focus:border-[#0f172a]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="class" className="text-[#0f172a] font-semibold mb-2 block text-base">
                      Select Class *
                    </Label>
                    <Select 
                      value={formData.class} 
                      onValueChange={(value) => setFormData({ ...formData, class: value })}
                      required
                    >
                      <SelectTrigger className="h-14 rounded-xl border-2 border-gray-200">
                        <SelectValue placeholder="Choose your class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10th Standard">10th Standard</SelectItem>
                        <SelectItem value="11th Standard">11th Standard</SelectItem>
                        <SelectItem value="12th Standard">12th Standard</SelectItem>
                        <SelectItem value="JEE Preparation">JEE Preparation</SelectItem>
                        <SelectItem value="NEET Preparation">NEET Preparation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white h-14 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Free Demo Now
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll contact you via WhatsApp to schedule your demo class
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Experience:</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Our Teaching Methodology</p>
                      <p className="text-gray-300">Understand how we make learning easy and effective</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Personal Attention Approach</p>
                      <p className="text-gray-300">See how we focus on individual student needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Doubt Clearing Sessions</p>
                      <p className="text-gray-300">Experience instant clarification of concepts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold text-lg">Interactive Learning</p>
                      <p className="text-gray-300">Engage in our student-friendly teaching style</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <Clock className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-xl">100% Free</p>
                  <p className="text-gray-300 text-sm">No charges</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                  <Award className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-xl">No Obligation</p>
                  <p className="text-gray-300 text-sm">Try risk-free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoClassSection;
