import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Church, MapPin, ChevronRight } from 'lucide-react';

export const AffiliatedSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const partners = [
    { name: 'Faith Temple Apostolic Church', location: 'New York' },
    { name: 'Agape Christian Fellowship', location: 'Florida' },
    { name: 'Pentecostal Power of Deliverance', location: 'New York' },
    { name: 'Emmanuel Church of Jesus Christ Apostolic', location: 'Affiliated' },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="affiliated"
      className="relative w-full min-h-screen bg-deep-purple overflow-hidden z-[60] flex items-center"
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
              src="/affiliated_fellowship.jpg"
              alt="Church fellowship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="w-full lg:w-[60%] lg:pl-12">
          <div
            className={`flex items-center gap-2 mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Church size={20} className="text-[var(--gold)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
              Ministry Partnerships
            </span>
          </div>

          <h2
            className={`text-2xl lg:text-[2.4vw] font-bold text-white leading-[1.15] mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10vw]'
            }`}
          >
            Affiliated Churches
          </h2>

          <div className="w-20 h-0.5 bg-[var(--gold)] mb-4 lg:mb-6" />

          <p
            className={`text-base lg:text-[1.1vw] text-white/90 leading-relaxed mb-6 lg:mb-8 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FTA is connected with partner ministries serving the body of Christ across North America.
          </p>

          {/* Partner list */}
          <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white/5 rounded-[10px] border border-white/10 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="lg:w-[18px] lg:h-[18px] text-[var(--gold)]" />
                </div>
                <div>
                  <h4 className="text-sm lg:text-base font-semibold text-white">
                    {partner.name}
                  </h4>
                  <p className="text-xs lg:text-sm text-white/60">
                    {partner.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 border-2 border-[var(--gold)] text-[var(--gold)] rounded-lg font-semibold hover:bg-[var(--gold)] hover:text-[var(--deep-purple)] transition-all duration-300 text-sm lg:text-base ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Learn About Partnership
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AffiliatedSection;
