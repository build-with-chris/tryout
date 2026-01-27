import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
            className="mt-3 w-full max-w-2xl text-4xl font-medium font-semibold tracking-tighter lg:text-5xl text-neutral-900">
            Fragen im Kopf?
          </h1>
          <p className="max-w-xl text-neutral-700">
            Ob Markt, Logistik oder Verwaltung: REWE Süd hilft dir, den nächsten Schritt zu finden.
          </p>
          
          {/* Timeline direkt nach dem Text mit minimalem Margin - nur auf md/sm (vertikale Timeline) */}
          <div className="mt-2">
            <div className="hidden md:block">
              <Timeline11 className="py-0" />
            </div>
          </div>
          
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
        <div className="w-full lg:w-2/5">
          <h1
            className="mt-3 hidden lg:block text-4xl font-medium font-semibold tracking-tighter lg:text-5xl text-neutral-900 mb-4">
            Wir nehmen sie ernst.
          </h1>
          <h1 className="mt-3 lg:hidden text-4xl font-medium font-semibold tracking-tighter text-neutral-900 mb-4">
            Wir nehmen sie ernst.
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
                  <Link to={ctaLinks.primary.href}>
                    {ctaLinks.primary.text}
                  </Link>
                </Button>
              </CardItem>
              <CardItem translateZ="100">
                <Button 
                  variant="secondary" 
                  className="rounded-full w-full"
                  onClick={onFAQClick}
                >
                  {ctaLinks.secondary.text}
                </Button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        </div>
      </div>
    </section>
  );
};

export { Feature268 };
