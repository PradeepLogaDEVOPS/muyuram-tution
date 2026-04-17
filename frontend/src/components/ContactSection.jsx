import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error('Please fill required fields');
      return;
    }

    const message = `New Enquiry from Website:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Message: ${formData.message || 'No message'}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#faf9f7] to-[#fefdfb]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
              Get in Touch
            </h2>
            <div className="w-24 h-1.5 bg-[#f59e0b] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Visit us, call us, or send us a message. We're here to help you succeed!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-gray-200 shadow-xl bg-white rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-[#0f172a]">Mayuram Tuition Centre</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0f172a] p-4 rounded-2xl shadow-md">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-2 text-lg">Address</h4>
                      <p className="text-gray-600 leading-relaxed">
                        [Your Address Here]<br />
                        Mayuram, Tamil Nadu<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0f172a] p-4 rounded-2xl shadow-md">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-2 text-lg">Phone</h4>
                      <p className="text-gray-600 text-lg">+91 98765 43210</p>
                      <p className="text-sm text-gray-500 mt-1">Call for enquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 p-4 rounded-2xl shadow-md">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-2 text-lg">WhatsApp</h4>
                      <p className="text-gray-600 text-lg">+91 98765 43210</p>
                      <Button 
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                        variant="link" 
                        className="text-green-600 p-0 h-auto mt-1 font-semibold"
                      >
                        Chat Now →
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0f172a] p-4 rounded-2xl shadow-md">
                      <Clock className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-2 text-lg">Working Hours</h4>
                      <p className="text-gray-600">Monday - Saturday</p>
                      <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                      <p className="text-sm text-red-600 mt-1 font-semibold">Sunday Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Placeholder */}
              <div className="bg-gray-100 rounded-3xl h-64 flex items-center justify-center border-2 border-gray-300 shadow-lg">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-bold text-lg">Google Maps Location</p>
                  <p className="text-sm text-gray-500">[Add your Google Maps embed here]</p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <Card className="border-2 border-gray-200 shadow-xl bg-white rounded-3xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-[#0f172a]">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="contact-name" className="text-[#0f172a] font-semibold mb-2 block text-base">
                      Your Name *
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-14 rounded-xl border-2 border-gray-200 focus:border-[#0f172a]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone" className="text-[#0f172a] font-semibold mb-2 block text-base">
                      Phone Number *
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-14 rounded-xl border-2 border-gray-200 focus:border-[#0f172a]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-[#0f172a] font-semibold mb-2 block text-base">
                      Email (Optional)
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 rounded-xl border-2 border-gray-200 focus:border-[#0f172a]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-[#0f172a] font-semibold mb-2 block text-base">
                      Your Message (Optional)
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us what you want to know..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 rounded-xl border-2 border-gray-200 focus:border-[#0f172a]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white h-14 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Enquiry via WhatsApp
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll respond to your enquiry as soon as possible
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
