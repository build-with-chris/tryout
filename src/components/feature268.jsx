import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HelpCircle, Lightbulb, CircleHelp } from "lucide-react";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";
import { Button } from "@/components/ui/button";
import { Timeline11 } from "@/components/timeline11";

// CTA-Links Konfiguration
const ctaLinks = {
  primary: {
    text: 'Kontaktperson finden',
    href: 'https://karriere.rewe.de/ansprechpartner-kontakt'
  }
};

const Feature268 = ({
  className
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const iconLinks = [
    {
      icon: HelpCircle,
      shortText: "FAQ",
      fullText: "FAQ",
      href: "https://karriere.rewe.de/faq",
      target: "_blank"
    },
    {
      icon: Lightbulb,
      shortText: "Tipps",
      fullText: "Bewerbungstipps",
      href: "https://karriere.rewe.de/bewerbungstipps",
      target: "_blank"
    },
    {
      icon: CircleHelp,
      shortText: "Fragen",
      fullText: "Allgemeine Bewerbungsanfragen",
      href: "mailto:bewerbung@rewe-group.com",
      target: undefined
    }
  ];

  return (
    <section className={cn("h-full w-screen overflow-hidden py-16 bg-white", className)}>
      <div
        className="relative container flex h-full flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="w-full space-y-5 lg:w-3/5">
          <h1
            className="mt-3 w-full max-w-2xl text-4xl font-medium font-semibold tracking-tighter lg:text-5xl text-neutral-900">
            Klarer Weg
          </h1>
          <p className="max-w-xl text-neutral-700">
            Ob Markt, Logistik oder Verwaltung: REWE Region Süd hilft dir, den nächsten Schritt zu finden.
          </p>
          
          {/* Timeline direkt nach dem Text mit minimalem Margin - nur auf md/sm (vertikale Timeline) */}
          <div className="mt-2">
            <div className="hidden md:block">
              <Timeline11 className="py-0" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <h1
            className="mt-3 hidden lg:block text-4xl font-medium font-semibold tracking-tighter lg:text-5xl text-neutral-900 mb-4">
            Top Arbeitgeber
          </h1>
          <h1 className="mt-3 lg:hidden text-4xl font-medium font-semibold tracking-tighter text-neutral-900 mb-4">
            Top Arbeitgeber
          </h1>
          <CardContainer className="w-full" containerClassName="h-full w-full p-0 m-0">
            <CardBody
              className="group/card flex h-full !w-full flex-col items-center justify-center rounded-3xl bg-muted/70 px-5 py-15">
            <CardItem
              translateZ="60"
              className="mb-2 max-w-xs">
              <img
                src="/top-employer-germany-2026.596a9ed2.webp"
                alt="Top Employer & Top Ausbildungsbetrieb"
                className="w-full h-auto object-contain"
              />
            </CardItem>
            <CardItem translateZ="60" className="mt-4 w-full max-w-[1000px]">
              <img
                src="/TOP.jpg"
                height="1000"
                width="1000"
                className="h-82 w-full rounded-3xl object-cover group-hover/card:shadow-xl lg:h-60"
                alt="REWE Süd Karriere" />
            </CardItem>

            {/* CTAs unter dem Bild */}
            <div className="flex w-full flex-col items-center justify-center gap-2 mt-4">
              <CardItem translateZ="100">
                <Button asChild className="rounded-full w-full">
                  <a 
                    href={ctaLinks.primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ctaLinks.primary.text}
                  </a>
                </Button>
              </CardItem>
            </div>

            {/* Icon-Links unter dem Button */}
            <div className="flex flex-row items-center justify-center gap-6 mt-6 w-full">
              {iconLinks.map((link, index) => {
                const IconComponent = link.icon;
                const isHovered = hoveredIndex === index;
                
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.target}
                    rel={link.target ? "noopener noreferrer" : undefined}
                    className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-primary/5 min-w-[100px]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <IconComponent 
                        className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-hover" 
                        strokeWidth={2}
                      />
                      <span className="text-sm font-medium text-primary transition-colors duration-300 group-hover:text-primary-hover">
                        {link.shortText}
                      </span>
                    </div>
                    {isHovered && (
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-neutral-900 text-white text-xs rounded-md whitespace-nowrap z-10 shadow-lg">
                        {link.fullText}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
                      </div>
                    )}
                  </a>
                );
              })}
            </div>
          </CardBody>
        </CardContainer>
        </div>
      </div>
    </section>
  );
};

export { Feature268 };
