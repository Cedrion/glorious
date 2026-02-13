import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { AccreditationSection } from './sections/AccreditationSection';
import { AboutSection } from './sections/AboutSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { SemestersSection } from './sections/SemestersSection';
import { AffiliatedSection } from './sections/AffiliatedSection';
import { CharitySection } from './sections/CharitySection';
import { CoatOfArmsSection } from './sections/CoatOfArmsSection';
import { LocationSection } from './sections/LocationSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative">
        <HeroSection />
        <AccreditationSection />
        <AboutSection />
        <ProgramsSection />
        <SemestersSection />
        <AffiliatedSection />
        <CharitySection />
        <CoatOfArmsSection />
        <LocationSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
