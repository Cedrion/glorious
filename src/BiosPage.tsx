"use client";

import React from "react";
import { Navigation } from "@/components/Navigation";

type BioPerson = {
  name: string;
  initials: string;
  image?: string;
  title?: string;
};

const PEOPLE: BioPerson[] = [
  {
    name: "Bishop D.W Brereton",
    initials: "DB",
    image: "/4.png",
    title: "Metropolitan Bishop"
  },
  {
    name: "W. Broomfield",
    initials: "WB",
    image: "/2.png",
    title: "Episcopal Armour Bearer and Deacon"
  },
  {
    name: "V. Whitehead",
    initials: "VW",
    image: "/3.png",
    title: "Episcopal Secretary & Evangelist"
  },
  {
    name: "S. Watt",
    initials: "SW",
    image: "/1.png",
    title: "Episcopal adjutant"
  },
];

export default function BiosPage() {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Navigation />

      <main className="relative pt-48 lg:pt-64 pb-20">
        <section className="relative px-6 lg:px-12">
          <div className="pattern-overlay" />

          <div className="relative mx-auto max-w-6xl">
            <p className="label-uppercase text-[var(--lavender)]">Faculty and Staff</p>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--ink-purple)] leading-tight">
              Leadership <span className="text-gradient-gold">Bios</span>
            </h1>
            <div className="mt-5 h-0.5 bg-[var(--gold)] w-20" />

          </div>
        </section>

        <section className="mt-10 px-6 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {PEOPLE.map((p) => (
                <article
                  key={p.name}
                  className="relative rounded-[28px] bg-transparent overflow-hidden"
                >
                  <div className="relative p-10 sm:p-12">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-surface-lavender flex items-center justify-center overflow-hidden card-shadow"
                        aria-label="Headshot"
                      >
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-[conic-gradient(from_210deg,rgba(201,160,63,0.28),rgba(108,91,123,0.35),rgba(253,248,240,0.6),rgba(201,160,63,0.28))] flex items-center justify-center">
                            <span className="font-['Cinzel'] text-xl sm:text-2xl text-[color:rgba(26,11,46,0.8)]">
                              {p.initials}
                            </span>
                          </div>
                        )}
                      </div>

                      <h2
                        className="mt-8 text-2xl sm:text-3xl font-bold text-[var(--ink-purple)] leading-snug"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {p.name}
                      </h2>
                      {p.title && (
                        <p className="mt-2 text-sm sm:text-base font-medium text-[var(--gold)] uppercase tracking-wider">
                          {p.title}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
