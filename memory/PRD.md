# Product Requirements Document (PRD)
## Excellence Academy - Premium Tuition Centre Website

**Date Created:** December 2025  
**Last Updated:** December 2025

---

## Original Problem Statement

Create a premium, modern, mobile-responsive website for a high-quality tuition and coaching institute in Mayuram, Tamil Nadu. The website must look high-end, clean, and professional — similar to a startup landing page — not like a typical local tuition centre website.

**Main Goals:**
- Generate student enquiries
- Promote Free Demo Class bookings
- Highlight limited seats (10 students per batch)
- Show strong academic credibility
- Convert visitors into admissions

---

## Core Requirements

### Target Audience
- Parents of 10th, 11th, 12th students
- Students preparing for board exams
- Students preparing for JEE / NEET

### Key USPs (Must Be Highlighted)
- Only 10 Students Per Batch (Small Batch Focus)
- Free Demo Class Available
- Online & Offline Classes Available
- Personal Attention + High Score Focus

### Design Style
- Premium academic brand look
- Blue + White + subtle gold/yellow accents
- Clean layout with lots of spacing
- Rounded cards, smooth shadows
- Modern typography
- High-quality sections like startup websites
- Mobile-first responsive design
- Smooth scrolling and transitions

---

## What's Been Implemented ✅

### Date: December 2025

#### Frontend Components Created:
1. **Header Component**
   - Sticky navigation with smooth scroll
   - Mobile responsive hamburger menu
   - Logo and branding
   - Quick links to all sections

2. **Hero Section**
   - High-impact headline with keyword optimization
   - Key USPs displayed prominently
   - Dual CTAs: "Book Free Demo Class" + "Chat on WhatsApp"
   - Professional background image with overlay
   - Urgency badge: "Only 10 Students Per Batch - Register Now!"

3. **About Section**
   - Mission statement
   - "Why We're Different" content
   - Feature cards: Concept Clarity, Individual Attention, Result Oriented, Confidence Building
   - Personal tutoring image

4. **Courses Section**
   - 4 course cards with images:
     - 10th Standard Coaching (All Subjects)
     - 11th Standard (Physics, Chemistry, Maths)
     - 12th Standard (Physics, Chemistry, Maths)
     - JEE / NEET Coaching
   - Each card includes benefits, batch size info, and CTAs
   - Hover animations and transitions

5. **Why Choose Us Section**
   - 8 feature cards with icons:
     - Only 10 Students Per Batch
     - Personal Attention
     - Concept Clarity
     - Experienced Faculty
     - Regular Tests & Revision
     - Doubt Clarification
     - Online & Offline Flexibility
     - Exam-Oriented Preparation
   - Bottom highlight: "Limited Seats Available!"

6. **Demo Class Section**
   - Registration form with WhatsApp integration
   - Form fields: Name, Phone, Class selection
   - Benefits showcase
   - Visual highlights of demo class value
   - Blue gradient background with decorative elements

7. **Results Section**
   - Statistics display:
     - 95% Students Improve Scores
     - 90%+ High Scoring Students
     - 100% Concept Clarity Focus
     - 10 Students Per Batch
   - Success story content
   - Achievement image

8. **Testimonials Section**
   - 4 testimonial cards with student/parent reviews
   - 5-star ratings
   - Profile images
   - Trust badge: "⭐ 4.9/5 Average Rating"

9. **WhatsApp CTA Section**
   - Dedicated green section
   - Direct WhatsApp call-to-action
   - Quick response messaging

10. **Contact Section**
    - Contact information cards:
      - Address (Placeholder: Mayuram location)
      - Phone: +91 98765 43210 (Placeholder)
      - WhatsApp integration
      - Working hours
    - Enquiry form with WhatsApp integration
    - Google Maps placeholder

11. **Footer**
    - Complete site navigation
    - Course listings
    - Contact details
    - Social media icons (Facebook, Instagram, YouTube)
    - Copyright information

12. **Sticky WhatsApp Button**
    - Floating button bottom-right
    - Animated tooltip on load
    - Pulse animation
    - Hover expand effect

### Technical Implementation:
- React functional components
- Shadcn UI components (Button, Card, Input, Select, Textarea, Label)
- Lucide React icons (NO emoji icons as per guidelines)
- Tailwind CSS for styling
- Smooth scroll navigation
- Mobile-responsive design
- Professional stock images from Unsplash/Pexels
- Toast notifications using Sonner

### Design Adherence:
✅ Blue + White + Gold color scheme  
✅ No prohibited gradients (avoided purple/pink)  
✅ Clean spacing and layout  
✅ Professional typography  
✅ Smooth transitions and animations  
✅ Mobile-first responsive  
✅ Premium startup-like feel  

### Form Integration:
- All forms redirect to WhatsApp with pre-filled messages
- Demo class form
- Contact enquiry form
- Direct WhatsApp CTAs throughout

---

## Current State

**Status:** ✅ Frontend MVP Complete (Frontend-Only)

**What Works:**
- Complete landing page with all sections
- Smooth scrolling navigation
- Mobile responsive design
- WhatsApp integration for all forms
- Professional design with premium feel
- All CTAs functional and conversion-optimized

**Placeholders to Update:**
- Tuition Centre Name: "Excellence Academy" (can be changed)
- Phone/WhatsApp: +91 98765 43210
- Address: [Your Address], Mayuram, Tamil Nadu
- Email: [email protected]
- Google Maps embed link

---

## Prioritized Backlog

### P0 Features (Must Have - Not Yet Implemented):
- [ ] Update contact details with actual information
- [ ] Add Google Maps embed with real location
- [ ] Customize tuition centre name if different

### P1 Features (Should Have - Future Enhancements):
- [ ] Backend implementation for form data storage
- [ ] Admin dashboard to view enquiries
- [ ] Email notifications for new enquiries
- [ ] Gallery section with real tuition centre photos
- [ ] Faculty profiles section
- [ ] Student results showcase with real data
- [ ] Blog/Resources section for educational content

### P2 Features (Nice to Have):
- [ ] Online admission form with payment gateway
- [ ] Student login portal
- [ ] Online test series
- [ ] Video testimonials
- [ ] Live chat support
- [ ] SEO optimization and meta tags
- [ ] Google Analytics integration
- [ ] WhatsApp Business API integration

---

## Next Tasks

1. **Update Placeholder Content**
   - Replace contact phone numbers
   - Add real address
   - Update email address
   - Add Google Maps embed

2. **Content Enhancement** (Optional)
   - Add faculty photos and profiles
   - Add real student testimonials
   - Add actual results data
   - Upload tuition centre photos

3. **Backend Development** (If needed)
   - Create database models for enquiries
   - Build enquiry management system
   - Email notification setup
   - Admin dashboard for enquiry tracking

---

## User Personas

### Persona 1: Concerned Parent
**Name:** Lakshmi Devi (45 years)  
**Goal:** Find quality coaching with personal attention for her daughter  
**Pain Points:** Crowded coaching centers, lack of individual focus  
**Key Features:** Small batch size, free demo class, parent testimonials

### Persona 2: Ambitious Student
**Name:** Arun Raj (17 years, JEE Aspirant)  
**Goal:** Get expert guidance for competitive exam preparation  
**Pain Points:** Difficulty in clearing doubts, need focused preparation  
**Key Features:** Online/offline flexibility, doubt clarification, exam-oriented prep

### Persona 3: Board Exam Student
**Name:** Priya Sharma (16 years, Class 12th)  
**Goal:** Improve board exam scores significantly  
**Pain Points:** Weak fundamentals, exam anxiety  
**Key Features:** Concept clarity, regular tests, personal attention

---

## Success Metrics (To Be Tracked)

- Number of demo class bookings
- WhatsApp enquiry conversions
- Page scroll depth
- CTA click-through rates
- Mobile vs Desktop traffic
- Section engagement time
- Form submission rate

---

## Technical Stack

**Frontend:**
- React.js
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons
- React Router
- Sonner (Toast notifications)

**Backend:** (Not yet implemented)
- FastAPI (Ready to use)
- MongoDB (Ready to use)

---

## Notes

- Website follows premium design guidelines
- All forms currently integrate with WhatsApp (no backend required yet)
- Mobile-responsive and optimized for performance
- Ready for deployment as-is with placeholder updates
- Can add backend functionality when needed for enquiry management
