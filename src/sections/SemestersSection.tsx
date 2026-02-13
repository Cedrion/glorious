import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, Snowflake, Sun, Leaf } from 'lucide-react';

export const SemestersSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const semesters = [
    { icon: Snowflake, name: 'Winter Semester', status: '(Current)', active: true },
    { icon: Sun, name: 'Spring Semester', status: '', active: false },
    { icon: Leaf, name: 'Fall Semester', status: '', active: false },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="semesters"
      className="relative w-full min-h-screen bg-parchment overflow-hidden z-50 flex items-center"
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
            <Calendar size={18} className="lg:w-5 lg:h-5 text-[var(--gold)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lavender)]">
              Academic Calendar
            </span>
          </div>

          <h2
            className={`text-2xl lg:text-[2.4vw] font-bold text-[var(--ink-purple)] leading-[1.15] mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[10vw]'
            }`}
          >
            Three Terms Each Year
          </h2>

          <div className="w-16 lg:w-20 h-0.5 bg-[var(--gold)] mb-4 lg:mb-6" />

          <p
            className={`text-sm lg:text-[1.1vw] text-[var(--lavender)] leading-relaxed mb-6 lg:mb-8 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FTA offers three study terms each year. Choose the intake that fits your calling and season.
          </p>

          {/* Semester cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8">
            {semesters.map((semester, index) => (
              <div
                key={index}
                className={`rounded-[14px] p-4 lg:p-5 border transition-all duration-700 ease-out ${
                  semester.active
                    ? 'bg-[var(--gold)]/10 border-[var(--gold)]/40'
                    : 'bg-surface-lavender border-[var(--ink-purple)]/5'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-2 lg:mb-3 ${
                  semester.active ? 'bg-[var(--gold)]/20' : 'bg-[var(--lavender)]/10'
                }`}>
                  <semester.icon size={18} className={`lg:w-5 lg:h-5 ${semester.active ? 'text-[var(--gold)]' : 'text-[var(--lavender)]'}`} />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-[var(--ink-purple)] mb-1">
                  {semester.name}
                </h3>
                {semester.status && (
                  <span className="text-xs text-[var(--gold)] font-medium">
                    {semester.status}
                  </span>
                )}
              </div>
            ))}
          </div>

          <button
            className={`px-5 lg:px-6 py-2.5 lg:py-3 bg-[var(--deep-purple)] text-white rounded-lg font-semibold hover:bg-[var(--deep-purple)]/90 transition-all duration-300 text-sm lg:text-base ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Ask About Current Intake
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
              src="/semesters_study.jpg"
              alt="Bible study group"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemestersSection;
