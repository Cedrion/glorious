import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CoatOfArms } from '../components/CoatOfArms';
import { Quote } from 'lucide-react';

export const CoatOfArmsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="identity"
      className="relative w-full min-h-screen bg-deep-purple overflow-hidden z-[80] flex items-center justify-center py-16 lg:py-0"
    >
      {/* Pattern overlay */}
      <div className="pattern-overlay" />

      <div className="text-center px-6 lg:px-[6vw]">
        {/* Centered crest */}
        <div
          className={`mb-6 lg:mb-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="w-40 h-24 lg:w-64 lg:h-40 mx-auto flex items-center justify-center overflow-hidden">
            <img
              src="/nav%20logo.png"
              alt="FTA Official Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Headline */}
        <h2
          className={`text-xl lg:text-[2.4vw] font-bold text-white leading-[1.15] mb-3 lg:mb-4 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          Seminary Identity
        </h2>

        {/* Subheadline */}
        <p
          className={`text-sm lg:text-[1.1vw] text-white/80 max-w-2xl mx-auto mb-4 lg:mb-6 px-4 lg:px-0 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          The official seal of FTA Theological Seminary represents our commitment to apostolic excellence, spiritual formation, and global ministry.
        </p>

        {/* Scripture */}
        <div
          className={`flex items-center justify-center gap-2 lg:gap-3 mb-6 lg:mb-8 px-4 lg:px-0 transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <Quote size={16} className="lg:w-5 lg:h-5 text-[var(--gold)] flex-shrink-0" />
          <p className="text-xs lg:text-sm text-[var(--gold)] italic">
            "And without controversy great is the mystery of godliness…" — 1 Timothy 3:16
          </p>
        </div>

        {/* Motto pill */}
        <div
          className={`inline-block transition-all duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <div className="px-4 lg:px-6 py-2 lg:py-3 bg-[var(--gold)]/10 rounded-full border border-[var(--gold)]/30">
            <span className="text-xs lg:text-sm font-semibold text-white tracking-wider">
              Doctrine • Formation • Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoatOfArmsSection;
