"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationProps {
  isDark?: boolean;
}

type NavLink =
  | { label: string; kind: 'section'; id: string }
  | { label: string; kind: 'route'; href: string };

export const Navigation: React.FC<NavigationProps> = ({ isDark = false }) => {
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
            <div className="relative w-28 h-14 lg:w-40 lg:h-20 flex items-center justify-center overflow-hidden transition-all">
              <img
                src="/nav%20logo.png"
                alt="FTA Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
      </nav >

      {/* Mobile Menu */}
      < div
        className={`fixed inset-0 z-40 bg-[var(--deep-purple)] transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
