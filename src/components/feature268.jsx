import { ArrowRight, Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card";
import { Button } from "@/components/ui/button";

// Fragen + Antworten Konfiguration
const questions = [
  {
    id: 'next-step',
    question: 'Wie läuft der nächste Schritt?',
    answer: 'Du bekommst hier Orientierung. Den finalen Bewerbungsweg erklären wir dir transparent auf der nächsten Seite.'
  },
  {
    id: 'quereinsteiger',
    question: 'Kann ich aus einem anderen Berufsfeld zu euch wechseln?',
    answer: 'Ja. Auch ohne passende Vorerfahrung kannst du bei uns starten – mit Einarbeitung und Support.'
  },
  {
    id: 'arbeitsmodelle',
    question: 'Welche Arbeitsmodelle gibt\'s?',
    answer: 'Von Minijob bis Vollzeit – je nach Rolle. Wir zeigen dir passende Optionen pro Bereich.'
  }
];

// CTA-Links Konfiguration
const ctaLinks = {
  primary: {
    text: 'Kontaktperson finden',
    href: '/karriere/kontakt'
  },
  secondary: {
    text: 'Alle FAQs',
    href: '/karriere/faq'
  }
};

const Feature268 = ({
  className,
  onFAQClick
}) => {
  return (
    <section className={cn("h-full w-screen overflow-hidden py-32", className)}>
      <div
        className="relative container flex h-full flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="w-full space-y-5 lg:w-3/5">
          <h1
            className="mt-3 w-full max-w-2xl text-5xl font-medium font-semibold tracking-tighter lg:text-6xl text-neutral-900">
            Fragen im Kopf?<br />Wir nehmen sie ernst.
          </h1>
          <p className="max-w-xl text-neutral-700">
            Ob Markt, Logistik oder Verwaltung: REWE Süd hilft dir, den nächsten Schritt zu finden.
          </p>
          <div className="mt-10 mb-29 flex gap-2">
            <Button asChild className="rounded-full">
              <Link to={ctaLinks.primary.href}>
                {ctaLinks.primary.text}
              </Link>
            </Button>
            <Button 
              variant="secondary" 
              className="rounded-full"
              onClick={onFAQClick}
            >
              {ctaLinks.secondary.text}
            </Button>
          </div>
          <ul className="space-y-4">
            <li className="mb-3">
              <p className="font-semibold tracking-tight text-neutral-600">
                Häufige Fragen
              </p>
            </li>
            {questions.map((item) => (
              <li key={item.id} className="flex gap-4 lg:items-start">
                <Check className="size-4 mt-1 flex-shrink-0 text-neutral-900" />
                <div>
                  <p className="font-semibold tracking-tight mb-1 text-neutral-900">
                    {item.question}
                  </p>
                  <p className="tracking-tight text-neutral-700">
                    {item.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-500 mt-6">
            <a 
              href="https://karriere.rewe.de/jobs/suche" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover underline"
            >
              Klicke hier, um alle offenen Jobs zu sehen.
            </a>
          </p>
        </div>
        <CardContainer className="w-full" containerClassName="h-full   w-full p-0 m-0 lg:w-2/5">
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

            <div className="flex w-full flex-col items-center justify-center">
              <CardItem translateZ="100">
                <Button variant="ghost" className="my-5 tracking-tight opacity-50">
                  Mehr erfahren <ArrowRight />
                </Button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export { Feature268 };
