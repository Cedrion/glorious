import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, ChevronRight } from 'lucide-react';

export const AccreditationSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="accreditation"
      className="relative w-full min-h-screen bg-deep-purple overflow-hidden z-20 flex items-center"
    >
      {/* Pattern overlay */}
      <div className="pattern-overlay" />

      <div className="w-full px-6 lg:px-[6vw] py-16 lg:py-[10vh] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left image card */}
        <div
          className={`w-full lg:w-[40%] transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[10vw]'
          }`}
        >
          <div className="relative rounded-[18px] overflow-hidden card-shadow aspect-[4/3] lg:aspect-[3/4]">
            <img
              src="/accreditation_chancellor.jpg"
              alt="Chancellor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="w-full lg:w-[60%] lg:pl-12">
          {/* Accreditation pill */}
          <div
            className={`inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-[var(--gold)]/10 rounded-full border border-[var(--gold)]/30 mb-4 lg:mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Award size={14} className="lg:w-4 lg:h-4 text-[var(--gold)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Accreditation
            </span>
          </div>

          <h2
            className={`text-2xl lg:text-[2.4vw] font-bold text-white leading-[1.15] mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10vw]'
            }`}
          >
            Recognized Ecclesiastical Training with Global Oversight
          </h2>

          <div className="w-16 lg:w-20 h-0.5 bg-[var(--gold)] mb-4 lg:mb-6" />

          <p
            className={`text-sm lg:text-[1.1vw] text-white/90 leading-relaxed mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FTA Theological Seminary is accredited by Glorious Churches of the World, providing accountable theological training aligned with apostolic doctrine and ministry standards.
          </p>

          <div
            className={`bg-white/5 rounded-[14px] p-4 lg:p-5 border border-white/10 mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xs lg:text-sm text-[var(--gold)] font-semibold mb-1">
              Chancellor of Education
            </p>
            <p className="text-base lg:text-lg text-white font-medium">
              Rev. Dr. Bishop Wendell Brereton
            </p>
            <p className="text-xs lg:text-sm text-white/70 mt-2 italic">
              "We are committed to academic seriousness, spiritual formation, and practical ministry preparedness."
            </p>
          </div>

          <button
            className={`flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 border-2 border-[var(--gold)] text-[var(--gold)] rounded-lg font-semibold hover:bg-[var(--gold)] hover:text-[var(--deep-purple)] transition-all duration-300 text-sm lg:text-base ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Meet the Chancellor
            <ChevronRight size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
