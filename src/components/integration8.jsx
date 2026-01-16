"use client";;
import React from "react";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/magicui/marquee";

const Integration8 = ({
  className
}) => {
  const zeile1 = [
    "Verkäufer",
    "Kassierer",
    "Marktleiter",
    "Filialleiter",
    "Abteilungsleiter",
    "Schichtleiter",
    "Aushilfe",
    "Auszubildender",
    "Florist",
    "Bäcker",
    "Metzger",
    "Feinkostverkäufer",
    "Servicemitarbeiter",
    "Reinigungskraft",
    "Warenverräumer",
    "Inventurhelfer",
    "Kundenberater",
  ];

  const zeile2 = [
    "Kommissionierer",
    "Lagermitarbeiter",
    "Lagerleiter",
    "Staplerfahrer",
    "Verlader",
    "Rangierer",
    "Disponent",
    "Tourenplaner",
    "Fahrer",
    "Berufskraftfahrer",
    "Mechatroniker",
    "Elektroniker",
    "Instandhalter",
    "Techniker",
    "Qualitätsprüfer",
  ];

  const zeile3 = [
    "Controller",
    "Buchhalter",
    "Einkäufer",
    "Categorymanager",
    "Personalreferent",
    "Recruiter",
    "Sachbearbeiter",
    "Projektmanager",
    "Produktmanager",
    "Marketingmanager",
    "Vertriebsleiter",
    "Systemadministrator",
    "Softwareentwickler",
    "Datenanalyst",
    "Jurist",
    "Immobilienmanager",
    "Trainer",
    "Auditor",
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container pt-32">
        <h1 className="text-center text-5xl font-medium tracking-tight md:text-7xl text-neutral-900 dark:text-neutral-100">
          Viele Wege führen zu deinem Traum
        </h1>
        <p
          className="mx-auto mt-4 max-w-2xl text-center tracking-tight text-neutral-700 dark:text-neutral-300 md:text-lg">
          Dein Traum ist nicht „der eine" Job? Perfekt. Bei REWE Süd gibt's viele Wege: im Markt, in der Logistik oder in der Verwaltung. Vom ersten Schritt bis zur Verantwortung – du bringst den Antrieb, wir den Rahmen.
        </p>

        <div className="relative mt-12">
          <Marquee pauseOnHover className="[--duration:20s]">
            {zeile1.map((job, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-full bg-muted px-5 h-10">
                <span className="text-lg font-medium whitespace-nowrap text-neutral-900 dark:text-neutral-100 leading-none">{job}</span>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:20s]">
            {zeile2.map((job, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-full bg-muted px-5 h-10">
                <span className="text-lg font-medium whitespace-nowrap text-neutral-900 dark:text-neutral-100 leading-none">{job}</span>
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {zeile3.map((job, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-full bg-muted px-5 h-10">
                <span className="text-lg font-medium whitespace-nowrap text-neutral-900 dark:text-neutral-100 leading-none">{job}</span>
              </div>
            ))}
          </Marquee>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-background"></div>
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};

export { Integration8 };
