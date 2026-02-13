import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen, Users, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const pillars = [
    {
      icon: BookOpen,
      title: 'Oneness Apostolic Theology',
      description: 'Rooted in the foundational truths of the Apostolic faith'
    },
    {
      icon: Users,
      title: 'Biblical Literacy & Hermeneutics',
      description: 'Comprehensive study of Scripture with sound interpretation'
    },
    {
      icon: Flame,
      title: 'Pentecostal Doctrine and Practice',
      description: 'Living out the power and presence of the Holy Spirit'
    }
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className="relative w-full min-h-screen bg-parchment overflow-hidden z-30 flex items-center"
    >
      {/* Pattern overlay */}
      <div className="pattern-overlay" />

      <div className="w-full px-6 lg:px-[6vw] py-16 lg:py-[10vh] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left content */}
        <div className="w-full lg:w-[55%] lg:pr-12 order-2 lg:order-1">
          <h2
            className={`text-2xl lg:text-[2.4vw] font-bold text-[var(--ink-purple)] leading-[1.15] mb-4 lg:mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[10vw]'
            }`}
          >
            Our Mission
          </h2>

          <div className="w-16 lg:w-20 h-0.5 bg-[var(--gold)] mb-4 lg:mb-6" />

          <p
            className={`text-sm lg:text-[1.1vw] text-[var(--lavender)] leading-relaxed mb-6 lg:mb-10 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            To develop grounded, spiritually mature leaders through scriptural teaching, apostolic identity, ministry discipline, and ecclesiastical formation—building servants who can preach, teach, lead, and serve effectively.
          </p>

          {/* Pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`bg-surface-lavender rounded-[14px] p-4 lg:p-5 border border-[var(--ink-purple)]/5 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-2 lg:mb-3">
                  <pillar.icon size={18} className="lg:w-5 lg:h-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-sm lg:text-base font-semibold text-[var(--ink-purple)] mb-1 lg:mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs lg:text-sm text-[var(--lavender)]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image card */}
        <div
          className={`w-full lg:w-[45%] order-1 lg:order-2 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10vw]'
          }`}
        >
          <div className="relative rounded-[18px] overflow-hidden card-shadow aspect-[4/3] lg:aspect-[3/4]">
            <img
              src="/about_worship.jpg"
              alt="Worship gathering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
