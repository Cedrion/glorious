import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, FileText } from 'lucide-react';

export const CharitySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="charity"
      className="relative w-full min-h-screen bg-parchment overflow-hidden z-[70] flex items-center"
    >
      {/* Pattern overlay */}
      <div className="pattern-overlay" />

      <div className="w-full px-6 lg:px-[6vw] py-16 lg:py-[10vh] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left content */}
        <div className="w-full lg:w-[55%] lg:pr-12 order-2 lg:order-1">
          <div
            className={`flex items-center gap-2 mb-3 lg:mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Heart size={18} className="lg:w-5 lg:h-5 text-[var(--gold)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lavender)]">
              Accountable & Mission-Driven
            </span>
          </div>

          <h2
            className={`text-2xl lg:text-[2.4vw] font-bold text-[var(--ink-purple)] leading-[1.15] mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[10vw]'
            }`}
          >
            Registered Charity
          </h2>

          <div className="w-16 lg:w-20 h-0.5 bg-[var(--gold)] mb-4 lg:mb-6" />

          <p
            className={`text-sm lg:text-[1.1vw] text-[var(--lavender)] leading-relaxed mb-6 lg:mb-8 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FTA Theological Seminary serves under a registered charitable foundation, accountable to the community and mission-driven in every decision.
          </p>

          {/* Charity info card */}
          <div
            className={`bg-surface-lavender rounded-[14px] p-4 lg:p-6 border border-[var(--ink-purple)]/5 mb-6 lg:mb-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="lg:w-6 lg:h-6 text-[var(--gold)]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lavender)]">
                  Registered Charity
                </p>
                <p className="text-sm lg:text-lg font-semibold text-[var(--ink-purple)]">
                  The Glorious Church Faith Temple (Canada)
                </p>
              </div>
            </div>
            <p className="text-xs lg:text-sm text-[var(--lavender)]">
              BN available upon request
            </p>
          </div>

          <button
            className={`px-5 lg:px-6 py-2.5 lg:py-3 bg-[var(--gold)] text-[var(--ink-purple)] rounded-lg font-semibold hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all duration-300 text-sm lg:text-base ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Support the Mission
          </button>
        </div>

        {/* Right image card */}
        <div
          className={`w-full lg:w-[45%] order-1 lg:order-2 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10vw]'
          }`}
        >
          <div className="relative rounded-[18px] overflow-hidden card-shadow aspect-[4/3] lg:aspect-[3/4]">
            <img
              src="/charity_service.jpg"
              alt="Charity service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitySection;
