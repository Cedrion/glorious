"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationProps {
  isDark?: boolean;
  forceWhiteBg?: boolean;
  largerLogo?: boolean;
}

type NavLink =
  | { label: string; kind: 'section'; id: string }
  | { label: string; kind: 'route'; href: string };

export const Navigation: React.FC<NavigationProps> = ({
  isDark = false,
  forceWhiteBg = false,
  largerLogo = false
}) => {
  const router = useRouter();
  const pathname = usePathname();
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
    // If we're not on the home page, navigate there with a hash.
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    { label: 'Programs', kind: 'section', id: 'programs' },
    { label: 'Admissions', kind: 'section', id: 'semesters' },
    { label: 'About', kind: 'section', id: 'about' },
    { label: 'Bios', kind: 'route', href: '/bios' },
    { label: 'Contact', kind: 'section', id: 'contact' },
  ];

  const bgClass = (isScrolled || forceWhiteBg)
    ? 'bg-white shadow-lg'
    : 'bg-transparent';

  const textClass = (isScrolled || forceWhiteBg || !isDark)
    ? 'text-[var(--ink-purple)]'
    : 'text-white';

  const btnClass = (isScrolled || forceWhiteBg || !isDark)
    ? 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink-purple)]'
    : 'border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--deep-purple)]';

  const navPadding = 'py-4 lg:py-6';

  const logoContainerClass = "relative w-40 h-20 lg:w-60 lg:h-30 flex items-center justify-center overflow-hidden transition-all";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${bgClass}`}
      >
        <div className={`relative w-full px-4 lg:px-12 ${navPadding} flex items-center justify-center min-h-[4rem]`}>
          {/* Logo - Absolute Positioned */}
          <div className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2">
            <button
              onClick={() => {
                if (pathname !== '/') {
                  router.push('/');
                  setIsMobileMenuOpen(false);
                  return;
                }
                scrollToSection('hero');
              }}
              className="group transition-all duration-300"
            >
              <div className={logoContainerClass}>
                <img
                  src="/nav%20logo.png"
                  alt="FTA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation - Centered and compact */}
          <div className="hidden md:flex items-center gap-6 lg:gap-12 bg-white/40 backdrop-blur-sm px-8 py-3 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <button
                key={link.kind === 'route' ? link.href : link.id}
                onClick={() => {
                  if (link.kind === 'route') {
                    router.push(link.href);
                    setIsMobileMenuOpen(false);
                    return;
                  }
                  scrollToSection(link.id);
                }}
                className={`text-sm font-bold uppercase tracking-widest ${textClass} hover:text-[var(--gold)] transition-colors`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 border-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${btnClass}`}
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button - Absolute Positioned Right */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${textClass}`}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav >

      {/* Mobile Menu */}
      < div
        className={`fixed inset-0 z-[999] bg-[var(--deep-purple)] transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`
        }
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-16">
          {navLinks.map((link) => (
            <button
              key={link.kind === 'route' ? link.href : link.id}
              onClick={() => {
                if (link.kind === 'route') {
                  router.push(link.href);
                  setIsMobileMenuOpen(false);
                  return;
                }
                scrollToSection(link.id);
              }}
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
      </div >
    </>
  );
};

export default Navigation;
