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
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us, call us, or send us a message. We're here to help you succeed!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Excellence Academy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        [Your Address Here]<br />
                        Mayuram, Tamil Nadu<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500 mt-1">Call for enquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <Button 
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                        variant="link" 
                        className="text-green-600 p-0 h-auto mt-1"
                      >
                        Chat Now →
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                      <p className="text-gray-600">Monday - Saturday</p>
                      <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                      <p className="text-sm text-red-600 mt-1">Sunday Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center border-2 border-gray-300">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Google Maps Location</p>
                  <p className="text-sm text-gray-500">[Add your Google Maps embed here]</p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="contact-name" className="text-gray-700 font-medium mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone" className="text-gray-700 font-medium mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-gray-700 font-medium mb-2 block">
                      Email (Optional)
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-gray-700 font-medium mb-2 block">
                      Your Message (Optional)
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us what you want to know..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 text-lg font-semibold"
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
