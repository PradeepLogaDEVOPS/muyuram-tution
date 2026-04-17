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

    const message = `Hi, I want to book a FREE Demo Class
Name: ${formData.name}
Phone: ${formData.phone}
Class: ${formData.class}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    setFormData({ name: '', phone: '', class: '' });
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-6">
              <GraduationCap className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">Try Before You Join</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your Free Demo Class
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              Experience our teaching methodology before enrolling
            </p>
            <p className="text-lg text-yellow-300 font-bold">
              ⚡ Only 10 Students Per Batch - Limited Seats Available!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <Card className="shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Register for Free Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                      Student Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter student name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="class" className="text-gray-700 font-medium mb-2 block">
                      Select Class *
                    </Label>
                    <Select 
                      value={formData.class} 
                      onValueChange={(value) => setFormData({ ...formData, class: value })}
                      required
                    >
                      <SelectTrigger className="h-12">
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 text-lg font-semibold"
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
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">What You'll Experience:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">Our Teaching Methodology</p>
                      <p className="text-blue-100 text-sm">Understand how we make learning easy and effective</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">Personal Attention Approach</p>
                      <p className="text-blue-100 text-sm">See how we focus on individual student needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">Doubt Clearing Sessions</p>
                      <p className="text-blue-100 text-sm">Experience instant clarification of concepts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold">Interactive Learning</p>
                      <p className="text-blue-100 text-sm">Engage in our student-friendly teaching style</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 text-center">
                  <Clock className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">100% Free</p>
                  <p className="text-blue-100 text-sm">No charges</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 text-center">
                  <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">No Obligation</p>
                  <p className="text-blue-100 text-sm">Try risk-free</p>
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
