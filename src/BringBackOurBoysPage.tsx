"use client";

import React from "react";
import { Navigation } from "./components/Navigation";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  Download,
  FileText,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Megaphone,
  Newspaper,
  Phone,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "328",
    label: "Toronto youth aged 12-17 reported missing in 2024",
  },
  {
    value: "230",
    label: "Reported missing youth identified as Black in the supplied release",
  },
  {
    value: "70%",
    label: "Share of youth missing cases represented by Black youth",
  },
  {
    value: "9.5%",
    label: "Approximate Black youth share of Toronto's population",
  },
];

const targetingPatterns = [
  {
    title: "Trust Building",
    text: "Predators establish contact through social media, schools, malls, or peer networks.",
    icon: Users,
  },
  {
    title: "Love Bombing",
    text: "Gifts, favours, money, and validation are used to create dependence.",
    icon: HeartHandshake,
  },
  {
    title: "Debt Bondage",
    text: "Children are told they owe something, then pressured through guilt and obligation.",
    icon: FileText,
  },
  {
    title: "Threats",
    text: "When manipulation fails, threats against the child or their family may follow.",
    icon: ShieldCheck,
  },
  {
    title: "Displacement",
    text: "Boys may be transported to remote communities, away from support networks.",
    icon: MapPin,
  },
];

const demands = [
  "Sustained investigative media coverage of missing Black boys.",
  "Mandatory trafficking awareness training in Toronto high schools by September 2026.",
  "Quarterly public briefings and disaggregated police data.",
  "Provincial funding for community-based prevention programs.",
  "A 24/7 hotline and legal support fund for affected families.",
];

const events = [
  {
    title: "Community Town Hall",
    date: "June 12, 2026",
    time: "7 PM",
    place: "Emmanuel Church of Jesus Christ Apostolic, 10 Maplewood Ave, Toronto",
  },
  {
    title: "High School Assembly Tour Launch",
    date: "June 22, 2026",
    time: "Priority schools",
    place: "Beginning in Rexdale, Etobicoke, and Scarborough",
  },
  {
    title: "Gala Fundraiser Awards",
    date: "July 4, 2026",
    time: "7:30 PM",
    place: "Kingdom 12 community fundraiser and awards evening",
  },
];

const resources = [
  "Interview opportunities with Bishop W. K. Brereton",
  "De-identified family testimonies with consent",
  "Statistical briefing documents",
  "Campaign graphics and video content for broadcast and print",
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const BringBackOurBoysPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--parchment)] text-[var(--ink-purple)]">
      <div className="grain-overlay" />
      <Navigation forceWhiteBg />

      <main className="relative overflow-hidden pt-28 lg:pt-32">
        <div className="pattern-overlay" />

        <section className="relative px-6 pb-20 lg:px-12 lg:pb-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.78fr] lg:gap-16">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] text-[var(--ink-purple)] sm:text-6xl lg:text-8xl">
                Bring Back Our Boys
              </h1>
              <div className="mt-8 h-0.5 w-28 bg-[var(--gold)]" />
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--lavender)] lg:text-xl">
                Kingdom 12 is calling media, schools, law enforcement, elected
                officials, churches, and families into coordinated action for
                young Black boys who are disappearing, being isolated, and being
                exploited across the Greater Toronto Area.
              </p>

              <div className="mt-8 grid gap-4 text-sm font-semibold text-[var(--ink-purple)] sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-[18px] bg-white/55 p-4 shadow-sm ring-1 ring-[var(--surface-lavender)]">
                  <CalendarDays className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--gold)]" />
                  <span>Town Hall · June 12, 2026 · 7 PM</span>
                </div>
                <div className="flex items-start gap-3 rounded-[18px] bg-white/55 p-4 shadow-sm ring-1 ring-[var(--surface-lavender)]">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--gold)]" />
                  <span>10 Maplewood Ave, Toronto</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollToSection("events")}
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  View Events <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection("media")}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  Media Resources
                </button>
              </div>

              <p className="mt-7 max-w-2xl font-['Cinzel'] text-base font-bold uppercase leading-7 tracking-[0.12em] text-[#7b1f2a]">
                Our boys. Our city. Our responsibility.
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-right duration-1000">
              <div className="relative mx-auto max-w-[420px]">
                <div className="absolute -inset-5 rounded-[34px] bg-[var(--deep-purple)]/10 blur-2xl" />
                <img
                  src="/bring-back-our-boys-poster.png"
                  alt="Bring Back Our Boys campaign poster"
                  className="relative aspect-[2/3] max-h-[560px] w-full rounded-[24px] object-cover shadow-2xl ring-2 ring-[var(--gold)]/50"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[var(--deep-purple)] px-6 py-14 text-white lg:px-12">
          <div className="pattern-overlay opacity-[0.03]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="border-l border-[var(--gold)]/40 pl-5 animate-in fade-in slide-in-from-bottom-4 duration-700"
              >
                <p className="font-['Cinzel'] text-4xl font-bold text-[var(--gold)] lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-mt-32 px-6 py-24 lg:px-12" id="crisis">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[18px] bg-[var(--surface-lavender)] text-[var(--gold)]">
                <AlertTriangle size={30} />
              </div>
              <h2 className="text-3xl font-bold leading-tight text-[var(--ink-purple)] lg:text-5xl">
                The Crisis Requires a City-Wide Response
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--lavender)]">
                The campaign release describes a pattern of missing youth cases,
                coercive recruitment, and geographic displacement from Toronto
                into other Ontario communities. Kingdom 12 is asking institutions
                to treat this as urgent prevention work.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {targetingPatterns.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] bg-white/55 p-6 shadow-sm ring-1 ring-[var(--surface-lavender)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                    <Icon className="h-7 w-7 text-[var(--gold)]" />
                    <h3 className="mt-5 text-xl font-bold text-[var(--ink-purple)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--lavender)]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white/45 px-6 py-24 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
            <div>
              <div className="flex items-center gap-4 text-[var(--gold)]">
                <School size={34} />
                <div className="h-px flex-1 bg-[var(--gold)]/45" />
              </div>
              <h2 className="mt-7 text-3xl font-bold leading-tight lg:text-5xl">
                High Schools Are the Frontline
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--lavender)]">
                Boys aged 12-17 are navigating identity, belonging, money,
                status, and digital influence. Awareness in school communities
                can help staff, students, and parents notice changes earlier and
                respond without stigma.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {["Notice changes", "Start the conversation", "Connect support"].map(
                  (step, index) => (
                    <div key={step} className="border-t border-[var(--gold)]/45 pt-5">
                      <span className="font-['Cinzel'] text-3xl font-bold text-[var(--gold)]">
                        0{index + 1}
                      </span>
                      <p className="mt-3 font-semibold text-[var(--ink-purple)]">
                        {step}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="rounded-[32px] bg-[var(--deep-purple)] p-8 text-white shadow-2xl">
              <GraduationCap className="h-10 w-10 text-[var(--gold)]" />
              <p className="mt-6 font-['Cinzel'] text-2xl font-bold leading-9">
                Vulnerability grows in silence. Prevention grows in trusted
                rooms where families can speak early.
              </p>
              <p className="mt-6 text-sm leading-7 text-white/68">
                Kingdom 12 is asking high schools to adopt trafficking awareness
                training for staff, students, and parents by September 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-32 px-6 py-24 lg:px-12" id="demands">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-3xl font-bold lg:text-5xl">
                  Campaign Demands
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--lavender)]">
                  Kingdom 12 is calling for immediate, measurable commitments
                  from civic, school, media, and provincial leaders.
                </p>
              </div>
              <Megaphone className="hidden h-16 w-16 text-[var(--gold)] lg:block" />
            </div>

            <div className="grid gap-px overflow-hidden rounded-[28px] bg-[var(--surface-lavender)] shadow-sm ring-1 ring-[var(--surface-lavender)] md:grid-cols-5">
              {demands.map((demand, index) => (
                <article key={demand} className="bg-[var(--parchment)] p-7">
                  <p className="font-['Cinzel'] text-3xl font-bold text-[var(--gold)]">
                    {index + 1}
                  </p>
                  <p className="mt-5 text-sm font-semibold leading-6 text-[var(--ink-purple)]">
                    {demand}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-32 bg-[var(--deep-purple)] px-6 py-24 text-white lg:px-12" id="events">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold lg:text-5xl">
              Upcoming Events
            </h2>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/50"
                >
                  <CalendarDays className="h-8 w-8 text-[var(--gold)]" />
                  <h3 className="mt-6 text-2xl font-bold">{event.title}</h3>
                  <p className="mt-4 font-semibold text-[var(--gold)]">
                    {event.date} · {event.time}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {event.place}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-32 px-6 py-24 lg:px-12" id="media">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold lg:text-5xl">
                Media Resources and Campaign Creatives
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--lavender)]">
                Interview opportunities, briefing materials, campaign graphics,
                and approved media resources are available for partners covering
                the campaign.
              </p>

              <div className="mt-8 space-y-4">
                {resources.map((resource) => (
                  <div key={resource} className="flex items-start gap-3">
                    <Newspaper className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--gold)]" />
                    <p className="text-[var(--lavender)]">{resource}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[28px] bg-white/60 p-7 ring-1 ring-[var(--surface-lavender)]">
                <p className="font-['Cinzel'] text-2xl font-bold text-[var(--ink-purple)]">
                  Press Contact
                </p>
                <div className="mt-5 space-y-3 text-[var(--lavender)]">
                  <p>Bishop W. K. Brereton</p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[var(--gold)]" />
                    647-540-6297
                  </p>
                  <p>gloriouschurches@gmail.com</p>
                  <p>@Trinibishop · #BringBackOurBoys</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="/bring-back-our-boys-poster.png"
                download
                className="group block rounded-[28px] bg-white/60 p-4 shadow-sm ring-1 ring-[var(--surface-lavender)] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src="/bring-back-our-boys-poster.png"
                  alt="Downloadable Bring Back Our Boys poster"
                  className="aspect-[4/5] w-full rounded-[20px] object-cover"
                />
                <span className="mt-4 flex items-center justify-between font-semibold text-[var(--ink-purple)]">
                  Poster Creative <Download className="h-5 w-5 text-[var(--gold)]" />
                </span>
              </a>
              <a
                href="/bring-back-our-boys-social.png"
                download
                className="group block rounded-[28px] bg-white/60 p-4 shadow-sm ring-1 ring-[var(--surface-lavender)] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src="/bring-back-our-boys-social.png"
                  alt="Downloadable Bring Back Our Boys social graphic"
                  className="aspect-square w-full rounded-[20px] object-cover"
                />
                <span className="mt-4 flex items-center justify-between font-semibold text-[var(--ink-purple)]">
                  Social Graphic <Download className="h-5 w-5 text-[var(--gold)]" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BringBackOurBoysPage;
