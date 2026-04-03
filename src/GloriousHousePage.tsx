"use client";

import React from 'react';
import { Navigation } from './components/Navigation';
import { 
  Heart, 
  BookOpen, 
  Cpu, 
  Trophy, 
  ShieldCheck, 
  UserCheck, 
  MapPin, 
  Phone,
  ArrowRight,
  Cross
} from 'lucide-react';

const GloriousHousePage: React.FC = () => {
  return (
    <div className="relative bg-[var(--parchment)] min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      <Navigation />

      <main className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
        {/* Pattern overlay */}
        <div className="pattern-overlay" />

        {/* Hero Section */}
        <section className="px-6 lg:px-12 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full animate-in fade-in slide-in-from-left duration-1000">
                <div className="inline-block px-4 py-1.5 mb-6 bg-surface-lavender rounded-full">
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--ink-purple)]">
                    Serving Native & Marginalized Youth
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--ink-purple)] leading-[1.1] mb-8">
                  Welcome to <span className="text-gradient-gold">Glorious House</span>
                </h1>
                <p className="text-lg lg:text-xl text-[var(--lavender)] leading-relaxed mb-10 max-w-2xl">
                  A Christ-centered residential program for Native and marginalized youth ages 18 and above who seek healing, purpose, and spiritual foundation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex items-center justify-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </button>
                  <button className="btn-outline">Contact Us</button>
                </div>
              </div>
              
              <div className="flex-1 w-full animate-in fade-in slide-in-from-right duration-1000">
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden card-shadow">
                  <img 
                    src="/glorious-house/residence.png" 
                    alt="Glorious House Residence" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white text-sm font-medium">
                      "A four-bedroom, 2,500 square foot detached home ready for your approval."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="px-6 lg:px-12 py-24 bg-surface-cream relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="p-10 lg:p-16 bg-white rounded-[40px] shadow-sm border border-[var(--surface-lavender)]">
                <h2 className="text-3xl font-bold text-[var(--ink-purple)] mb-8 flex items-center gap-4">
                  <div className="p-3 bg-surface-lavender rounded-2xl text-[var(--gold)]">
                    <Heart size={32} />
                  </div>
                  Our Mission
                </h2>
                <p className="text-xl text-[var(--lavender)] leading-relaxed italic">
                  "To provide culturally responsive, spiritually grounded, and therapeutically sound Christian group home services for Native and marginalized at-risk youth in Ontario—healing the whole person through Christ-centered care. All youth are welcome here."
                </p>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[var(--ink-purple)] mb-8">Our Vision</h2>
                <div className="space-y-6">
                  {[
                    "Restoring dignity through the Gospel",
                    "Championing spiritual, emotional, and physical well-being",
                    "Guiding toward independence and leadership",
                    "Including every young person regardless of background"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-[var(--gold)] flex-shrink-0" />
                      <p className="text-lg text-[var(--lavender)] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Director Bio Section */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[var(--deep-purple)] rounded-[48px] p-8 lg:p-16 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-[var(--gold)] translate-x-1/2 -skew-x-12" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-white">
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl flex-shrink-0">
                  <img 
                    src="/4.png" 
                    alt="Dell K. Brereton" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[var(--gold)] font-bold uppercase tracking-widest text-sm mb-2">Director of Programming</p>
                  <h2 className="text-4xl font-bold mb-6">Dell K. Brereton</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-3xl">
                    Former Ontario Provincial Police officer with a Bachelor's in Business and a Master of Education from the University of Toronto. Dr. Brereton holds a PhD in Ministerial Studies and serves as Chancellor of FTA Theological Seminary. Since 2003, he has worked with at-risk youth across foster care, custodial care, and public school boards.
                  </p>
                  <div className="inline-flex items-center gap-4 py-3 px-6 bg-white/5 rounded-2xl border border-white/10">
                    <UserCheck className="text-[var(--gold)]" />
                    <span className="text-sm font-medium">Committed to transitioning youth to independent, purpose-driven living.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical & Spiritual Team */}
        <section className="px-6 lg:px-12 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-[var(--ink-purple)] mb-4">Our Clinical & Spiritual Team</h2>
                <p className="text-[var(--lavender)] text-lg">A highly skilled team of treatment counsellors and spiritual mentors specialized in complex needs.</p>
              </div>
              <div className="text-[var(--gold)] font-['Cinzel'] text-xl font-bold tracking-widest hidden md:block">
                HEAL • LEARN • THRIVE
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Neurobehavioral Support", desc: "Specialists in FASD and ASD programming with strengths-based interventions.", icon: <ShieldCheck /> },
                { title: "Trauma Recovery", desc: "Focus on cultural trauma, brain injury recovery, and Indigenous wellness.", icon: <Heart /> },
                { title: "Crisis Intervention", desc: "Expertise in behavioral challenges and mild intellectual delays.", icon: <ShieldCheck /> },
                { title: "Orderly Care", desc: "Our staff understand how to do things nicely and orderly, ensuring a professional and structured environment.", icon: <UserCheck /> },
                { title: "Professional Staff", desc: "Child & Youth Workers, Educational Assistants, and Behavioral Therapists.", icon: <ShieldCheck /> },
                { title: "Pastoral Care", desc: "Licensed Teachers and Pastoral Counsellors centering identity and faith.", icon: <Cross /> }
              ].map((specialty, i) => (
                <div key={i} className="group p-8 bg-white/50 hover:bg-white rounded-[32px] border border-[var(--surface-lavender)] transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className="mb-6 p-4 bg-surface-lavender rounded-2xl text-[var(--gold)] w-fit group-hover:scale-110 transition-transform duration-500">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink-purple)] mb-3">{specialty.title}</h3>
                  <p className="text-[var(--lavender)] leading-relaxed">{specialty.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="px-6 lg:px-12 py-24 bg-[var(--ink-purple)] rounded-[64px] mx-6 lg:mx-12 overflow-hidden relative">
          <div className="pattern-overlay opacity-[0.03]" />
          <div className="max-w-7xl mx-auto relative z-10 text-white">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Program Description</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">Providing comprehensive support for Crown WARDS with DSO designation turning 18.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
              {/* Education */}
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-20 h-20 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-3xl flex items-center justify-center text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink-purple)] transition-all duration-500">
                  <BookOpen size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Educational Programs</h3>
                  <ul className="space-y-4 text-white/70">
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Specialized Math & Literacy for MID and FASD learners</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Indigenous Cultural Education including Land-based learning</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> ASD-specific communication aids and structured routines</li>
                  </ul>
                </div>
              </div>

              {/* Technology */}
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-20 h-20 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-3xl flex items-center justify-center text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink-purple)] transition-all duration-500">
                  <Cpu size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Technology & Skills</h3>
                  <ul className="space-y-4 text-white/70">
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> On-site Tech Lab: App development, Graphic design, and Coding</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Life Skills Training: Financial literacy and Independent living</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> FASD/ASD tailored instruction and sensory regulation support</li>
                  </ul>
                </div>
              </div>

              {/* Sports */}
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-20 h-20 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-3xl flex items-center justify-center text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink-purple)] transition-all duration-500">
                  <Trophy size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sports & Mentorship</h3>
                  <ul className="space-y-4 text-white/70">
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Private Boxing Gym with certified coaching</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Basketball programs and specialized weight training</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Mentorship focused on character and spiritual discipline</li>
                  </ul>
                </div>
              </div>

              {/* Spiritual */}
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-20 h-20 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-3xl flex items-center justify-center text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink-purple)] transition-all duration-500">
                  <Cross size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Spiritual Formation</h3>
                  <ul className="space-y-4 text-white/70">
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Daily Devotionals using visual and concrete teaching methods</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Pastoral Counselling integrating therapy with spiritual guidance</li>
                    <li><span className="text-[var(--gold)] font-bold mr-2">•</span> Voluntary Chapel and integrated Cultural ceremonies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section (GLORIOUS) */}
        <section className="px-6 lg:px-12 py-24 bg-white/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl text-center font-bold text-[var(--ink-purple)] mb-20 font-['Cinzel']">Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { l: "G", v: "Grace", d: "Unmerited favor for all" },
                { l: "L", v: "Love", d: "Agape foundation for every youth" },
                { l: "O", v: "Outreach", d: "Leaving no one behind" },
                { l: "R", v: "Restoration", d: "Healing trauma and wounds" },
                { l: "I", v: "Identity", d: "Knowing who they are in Christ" },
                { l: "O", v: "Obedience", d: "Walking in alignment" },
                { l: "U", v: "Unity", d: "Bridging diverse wholeness" },
                { l: "S", v: "Sanctuary", d: "A safe place to heal and grow" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[32px] border border-[var(--surface-lavender)] shadow-sm hover:shadow-xl transition-all duration-500">
                  <span className="text-[var(--gold)] text-4xl lg:text-5xl font-['Cinzel'] font-bold mb-4">{item.l}</span>
                  <p className="font-bold text-[var(--ink-purple)] text-lg mb-2">{item.v}</p>
                  <p className="text-sm text-[var(--lavender)] line-clamp-2">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Chair Section */}
        <section className="px-6 lg:px-12 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="flex-1 w-full">
                <p className="text-[var(--gold)] font-bold uppercase tracking-widest text-sm mb-2">Chair-Woman of the Board</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink-purple)] mb-8">Meet Dina</h2>
                <p className="text-lg text-[var(--lavender)] leading-relaxed mb-6 italic">
                  "I retired in September 2024 after 30 years of teaching science and senior chemistry. My role is to develop differentiated lessons that honor cultural identity, neurodivergent strengths, and individual uniqueness."
                </p>
                <p className="text-lg text-[var(--lavender)] leading-relaxed mb-10">
                  At Glorious House, every youth belongs. We want to encourage these young people to be decision makers, problem solvers, and ultimately positive, faith-filled contributing members of their communities.
                </p>
                <div className="p-6 bg-surface-lavender rounded-3xl border border-[var(--surface-lavender)]">
                  <p className="text-[var(--ink-purple)] font-bold text-lg mb-2">Mindful of Identity</p>
                  <p className="text-[var(--lavender)] text-sm leading-relaxed">
                    "I make a point of ensuring that contributions from all cultures are highlighted and respected while pointing youth to their identity in Christ."
                  </p>
                </div>
              </div>
              
              <div className="flex-1 w-full lg:max-w-md">
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden card-shadow">
                  <img 
                     src="/glorious-house/board-chair.png" 
                     alt="Dina" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop";
                     }}
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Inclusion (Highlight Section) */}
        <section className="px-6 lg:px-12 py-24 mb-24">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-[var(--ink-purple)] mb-10">"At Glorious House, all means all."</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Anti-discrimination",
                "Accessibility",
                "Cultural safety",
                "Gender inclusivity",
                "Neurodiversity affirmation",
                "Religious freedom"
              ].map((tag, i) => (
                <div key={i} className="px-6 py-3 bg-[var(--surface-lavender)] rounded-full text-[var(--ink-purple)] font-bold tracking-wider text-xs lg:text-sm uppercase shadow-sm">
                  {tag}
                </div>
              ))}
            </div>
            <p className="mt-12 text-xl text-[var(--lavender)] max-w-3xl mx-auto italic">
              "We are committed to honoring Indigenous traditions, respecting all identities, and providing invitation without coercion."
            </p>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section className="px-6 lg:px-12 py-24 bg-white rounded-[64px] mx-6 lg:mx-12 shadow-2xl relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--ink-purple)] mb-12">Contact Dell K. Brereton</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-surface-cream p-10 lg:p-16 rounded-[40px]">
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-white rounded-2xl text-[var(--gold)] shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--ink-purple)] mb-1">Our Location</h4>
                  <p className="text-[var(--lavender)] text-lg">50 Absolute Ave, Mississauga, ON</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-white rounded-2xl text-[var(--gold)] shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--ink-purple)] mb-1">Connect Directly</h4>
                  <p className="text-[var(--lavender)] text-lg">647-540-6297</p>
                </div>
              </div>
            </div>
            <div className="mt-16 text-[var(--lavender)] font-medium">
              Thank you for considering Glorious House in Mississauga.
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default GloriousHousePage;
