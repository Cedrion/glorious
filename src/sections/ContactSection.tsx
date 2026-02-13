import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, Clock, Send, BookOpen, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const footerAnimation = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className="relative bg-deep-purple z-[100]"
    >
      {/* Pattern overlay */}
      <div className="pattern-overlay" />

      {/* Main content area */}
      <div className="w-full px-6 lg:px-[6vw] py-16 lg:py-[10vh] flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* Left column - Contact info */}
        <div
          className={`w-full lg:w-[45%] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[10vw]'
            }`}
        >
          <h2 className="text-2xl lg:text-[2.4vw] font-bold text-white leading-[1.15] mb-4 lg:mb-6">
            Get in Touch
          </h2>

          <div className="w-16 lg:w-20 h-0.5 bg-[var(--gold)] mb-6 lg:mb-8" />

          <p className="text-sm lg:text-[1.1vw] text-white/80 leading-relaxed mb-6 lg:mb-8">
            Have questions about admissions, programs, or partnership opportunities? We're here to help.
          </p>

          {/* Contact details */}
          <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-[10px] border border-white/10">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="lg:w-[18px] lg:h-[18px] text-[var(--gold)]" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Email</p>
                <p className="text-sm text-white">gloriouschurches@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-[10px] border border-white/10">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="lg:w-[18px] lg:h-[18px] text-[var(--gold)]" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Phone</p>
                <p className="text-sm text-white">647-540-6297</p>
              </div>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-[10px] border border-white/10">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                <Clock size={16} className="lg:w-[18px] lg:h-[18px] text-[var(--gold)]" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider">Office Hours</p>
                <p className="text-sm text-white">Monday–Friday, 9:00 AM – 4:00 PM (EST)</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <button className="flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-[var(--gold)] text-[var(--ink-purple)] rounded-lg font-semibold hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all duration-300 text-sm lg:text-base">
              <BookOpen size={16} className="lg:w-[18px] lg:h-[18px]" />
              Request Admissions Info
            </button>
            <button className="flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 border-2 border-[var(--gold)] text-[var(--gold)] rounded-lg font-semibold hover:bg-[var(--gold)] hover:text-[var(--deep-purple)] transition-all duration-300 text-sm lg:text-base">
              <Calendar size={16} className="lg:w-[18px] lg:h-[18px]" />
              Book a Call
            </button>
          </div>
        </div>

        {/* Right column - Form */}
        <div
          className={`w-full lg:w-[55%] transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10vw]'
            }`}
        >
          <div className="bg-white/5 rounded-[14px] lg:rounded-[18px] p-5 lg:p-8 border border-white/10">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-4 lg:mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
              <div>
                <label className="block text-xs lg:text-sm text-white/70 mb-1.5 lg:mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--gold)] transition-colors text-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs lg:text-sm text-white/70 mb-1.5 lg:mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--gold)] transition-colors text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs lg:text-sm text-white/70 mb-1.5 lg:mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 lg:px-4 py-2.5 lg:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[var(--gold)] transition-colors resize-none text-sm"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-[var(--gold)] text-[var(--ink-purple)] rounded-lg font-semibold hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all duration-300 text-sm lg:text-base"
              >
                <Send size={16} className="lg:w-[18px] lg:h-[18px]" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        ref={footerAnimation.ref as React.RefObject<HTMLElement>}
        className="w-full px-6 lg:px-[6vw] py-6 lg:py-8 border-t border-white/10"
      >
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 transition-all duration-1000 ease-out ${footerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          {/* Logo and verse */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-16 h-10 lg:w-20 lg:h-12 flex items-center justify-center overflow-hidden">
                <img src="/nav%20logo.png" alt="FTA Logo" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Cinzel'] text-lg lg:text-xl font-bold text-white">
                FTA Theological Seminary
              </p>
            </div>
            <p className="text-xs text-white/60">
              "And without controversy great is the mystery of godliness…" — 1 Timothy 3:16
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            <a href="#programs" className="text-xs lg:text-sm text-white/70 hover:text-[var(--gold)] transition-colors">Programs</a>
            <a href="#about" className="text-xs lg:text-sm text-white/70 hover:text-[var(--gold)] transition-colors">About</a>
            <a href="#contact" className="text-xs lg:text-sm text-white/70 hover:text-[var(--gold)] transition-colors">Contact</a>
            <a href="#" className="text-xs lg:text-sm text-white/70 hover:text-[var(--gold)] transition-colors">Privacy</a>
            <a href="#" className="text-xs lg:text-sm text-white/70 hover:text-[var(--gold)] transition-colors">Terms</a>
          </div>

          {/* Accreditation info */}
          <div className="text-center lg:text-right">
            <p className="text-xs text-white/60">
              Accredited by Glorious Churches of the World
            </p>
            <p className="text-xs text-white/60">
              Registered Charity: The Glorious Church Faith Temple (Canada)
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} FTA Theological Seminary. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
