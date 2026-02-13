import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, Download } from 'lucide-react';

export const ProgramsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const courses = [
    'Apostolic Doctrine (Oneness)',
    'Systematic Theology & Biblical Doctrine',
    'Old Testament Studies',
    'New Testament Studies',
    'Homiletics (Preaching) & Teaching Methods',
    'Ecclesiastical Formation & Church Governance',
    'Spiritual Discipline, Prayer, and Leadership Character',
    'Pastoral Ministry & Counseling Foundations',
    'Missions, Evangelism, and Community Impact'
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="programs"
      className="relative w-full min-h-screen bg-deep-purple overflow-hidden z-40 flex items-center"
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
              src="/courses_graduation.jpg"
              alt="Graduation ceremony"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="w-full lg:w-[60%] lg:pl-12">
          <h2
            className={`text-2xl lg:text-[2.4vw] font-bold text-white leading-[1.15] mb-2 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[10vw]'
            }`}
          >
            Programs & Courses
          </h2>

          <p
            className={`text-sm lg:text-[1vw] text-white/70 mb-4 lg:mb-6 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Courses built for real ministry outcomes—doctrine, practice, and leadership.
          </p>

          <div className="w-16 lg:w-20 h-0.5 bg-[var(--gold)] mb-4 lg:mb-6" />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 mb-6 lg:mb-8">
            {courses.map((course, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 lg:gap-3 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[var(--gold)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={10} className="lg:w-3 lg:h-3 text-[var(--gold)]" />
                </div>
                <span className="text-xs lg:text-sm text-white/90">
                  {course}
                </span>
              </li>
            ))}
          </ul>

          <button
            className={`flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-[var(--gold)] text-[var(--ink-purple)] rounded-lg font-semibold hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all duration-300 text-sm lg:text-base ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Download size={16} className="lg:w-[18px] lg:h-[18px]" />
            Download Course List
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
