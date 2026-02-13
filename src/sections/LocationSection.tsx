import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="location"
      className="relative w-full min-h-screen bg-parchment overflow-hidden z-[90] flex items-center"
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
              src="/location_campus.jpg"
              alt="Seminary campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="w-full lg:w-[60%] lg:pl-12">
          <div
            className={`flex items-center gap-2 mb-3 lg:mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <MapPin size={18} className="lg:w-5 lg:h-5 text-[var(--gold)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lavender)]">
              Our Location
            </span>
          </div>

          <h2
            className={`text-2xl lg:text-[2.4vw] font-bold text-[var(--ink-purple)] leading-[1.15] mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10vw]'
            }`}
          >
            Toronto, Ontario
          </h2>

          <div className="w-16 lg:w-20 h-0.5 bg-[var(--gold)] mb-4 lg:mb-6" />

          <p
            className={`text-sm lg:text-[1.1vw] text-[var(--lavender)] leading-relaxed mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            FTA is based in Toronto, Ontario, with connections across Canada and the world.
          </p>

          <div
            className={`flex items-start gap-2 lg:gap-3 p-3 lg:p-4 bg-surface-lavender rounded-[10px] mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <MapPin size={16} className="lg:w-[18px] lg:h-[18px] text-[var(--gold)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-[var(--ink-purple)]">
                10 Maplewood Ave
              </p>
              <p className="text-xs lg:text-sm text-[var(--lavender)]">
                Toronto, Ontario, Canada, L4Z 0A8
              </p>
            </div>
          </div>

          {/* Map card */}
          <div
            className={`relative rounded-[14px] overflow-hidden card-shadow aspect-video transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.0!2d-79.0!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzAwLjAiTiA3OcKwMDAnMDAuMCJX!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) sepia(10%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FTA Seminary Location"
            />
            <a
              href="https://maps.google.com/?q=10+Maplewood+Ave+Toronto+Ontario"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4 flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-2 bg-[var(--deep-purple)] text-white rounded-lg text-xs lg:text-sm font-semibold hover:bg-[var(--deep-purple)]/90 transition-all"
            >
              <Navigation size={14} className="lg:w-4 lg:h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
