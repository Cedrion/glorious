import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isDark?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Programs', id: 'programs' },
    { label: 'Admissions', id: 'semesters' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const bgClass = isScrolled
    ? 'bg-[var(--parchment)]/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  const textClass = isScrolled || !isDark
    ? 'text-[var(--ink-purple)]'
    : 'text-white';

  const btnClass = isScrolled || !isDark
    ? 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink-purple)]'
    : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-purple)]';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="w-full px-4 lg:px-12 py-3 lg:py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className={`font-['Cinzel'] text-lg lg:text-xl font-bold ${textClass} hover:text-[var(--gold)] transition-colors`}
          >
            FTA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium ${textClass} hover:text-[var(--gold)] transition-colors`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-4 lg:px-5 py-2 border-2 rounded-lg text-sm font-semibold transition-all duration-300 ${btnClass}`}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${textClass}`}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--deep-purple)] transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xl font-['Cinzel'] text-white hover:text-[var(--gold)] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-4 px-8 py-3 bg-[var(--gold)] text-[var(--ink-purple)] font-semibold rounded-lg"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
