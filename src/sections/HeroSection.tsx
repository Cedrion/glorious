import React, { useEffect, useRef, useState } from 'react';
import { CoatOfArms } from '../components/CoatOfArms';
import { BookOpen, Mail } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlineText = "Forming Apostolic Leaders for the Church and the Nations";
  const words = headlineText.split(' ');

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen bg-parchment overflow-hidden z-10"
    >
      {/* Pattern overlay */}
      <div className="pattern-overlay" />



      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen pt-20 pb-8 px-6">
        {/* Image */}
        <div
          className={`relative w-full aspect-[4/3] rounded-[18px] overflow-hidden card-shadow mb-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <img
            src="/hero_classroom.jpg"
            alt="Classroom teaching"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--ink-purple)] leading-[1.2] mb-4">
            {headlineText}
          </h1>
          <div className="w-16 h-0.5 bg-[var(--gold)] mb-4" />

          <p className="text-sm text-[var(--lavender)] leading-relaxed mb-6">
            FTA Theological Seminary provides structured, faith-centered training in Oneness Apostolic theology, biblical studies, and ministry leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <button
              onClick={() => scrollToSection('programs')}
              className="btn-primary flex items-center justify-center gap-2 text-sm py-3"
            >
              <BookOpen size={18} />
              View Programs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline flex items-center justify-center gap-2 text-sm py-3"
            >
              <Mail size={18} />
              Request Info
            </button>
          </div>

          <p className="text-xs text-[var(--lavender)] italic mb-4">
            Seminary of the Archdiocese of Glorious Churches of Canada
          </p>

          {/* Semester indicator */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-2 bg-surface-lavender rounded-[10px]">
            <span className="text-xs font-semibold text-[var(--ink-purple)]">Winter (Current)</span>
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
            <span className="text-xs text-[var(--lavender)]">Spring</span>
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
            <span className="text-xs text-[var(--lavender)]">Fall</span>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative w-full h-screen">
        {/* Left side - Image with fade to white */}
        <div className="relative w-[55%] h-full">
          <img
            src="/hero_classroom.jpg"
            alt="Classroom teaching"
            className="w-full h-full object-cover"
          />
          {/* Gradient fade to white on the right edge */}
          <div
            className="absolute top-0 right-0 w-[40%] h-full"
            style={{
              background: 'linear-gradient(to right, transparent 0%, var(--parchment) 100%)'
            }}
          />
        </div>

        {/* Right side - Text content */}
        <div className="w-[45%] h-full flex flex-col justify-center pr-[6vw] pl-8">
          {/* Headline */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <h1 className="text-[2.8vw] font-bold text-[var(--ink-purple)] leading-[1.15]">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${300 + i * 50}ms`
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <div
              className="mt-4 h-0.5 bg-[var(--gold)]"
              style={{
                width: isVisible ? '96px' : '0',
                transition: 'width 0.8s ease-out 800ms'
              }}
            />
          </div>

          {/* Subheadline */}
          <p
            className={`mt-6 text-[1vw] text-[var(--lavender)] leading-relaxed transition-all duration-1000 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            FTA Theological Seminary provides structured, faith-centered training in Oneness Apostolic theology, biblical studies, and ministry leadership—equipping clergy and lay leaders to serve with competence, conviction, and spiritual depth.
          </p>

          {/* CTAs */}
          <div
            className={`mt-8 flex gap-4 transition-all duration-1000 ease-out delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <button
              onClick={() => scrollToSection('programs')}
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <BookOpen size={18} />
              View Programs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-outline flex items-center gap-2 text-sm"
            >
              <Mail size={18} />
              Request Admission Info
            </button>
          </div>

          {/* Micro line */}
          <p
            className={`mt-4 text-xs text-[var(--lavender)] italic transition-all duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            Seminary of the Archdiocese of Glorious Churches of Canada
          </p>

          {/* Semester indicator */}
          <div
            className={`mt-8 inline-flex items-center gap-3 px-4 py-3 bg-surface-lavender rounded-[14px] w-fit transition-all duration-1000 ease-out delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <span className="text-sm font-semibold text-[var(--ink-purple)]">Winter Semester (Current)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            <span className="text-sm text-[var(--lavender)]">Spring</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            <span className="text-sm text-[var(--lavender)]">Fall</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
