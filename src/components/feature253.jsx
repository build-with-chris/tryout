import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { cn } from "@/lib/utils";

import "./feature253.css";

const Feature253 = ({
  className,
  title = "Your Ultimate Solution",
  subtitle = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur",
  ctaText = "Join Today",
  onCtaClick
}) => {

  return (
    <section className={cn("pt-16 pb-8 md:pb-12", className)}>
      <div className="container">
        <div className="feature253-wrapper">
          <div
            className="feature253-container relative flex w-full flex-col justify-between overflow-hidden rounded-4xl border bg-muted p-4 md:flex-row md:p-6">
            <div className="flex h-full feature253-text-container flex-col justify-center gap-2 md:gap-3 flex-1">
              {subtitle && (
                <p 
                  className="text-xs md:text-sm font-medium uppercase tracking-wider"
                  style={{ color: 'var(--color-neutral-600)' }}
                >
                  {subtitle}
                </p>
              )}
              <h1 
                className="text-2xl font-medium tracking-tighter md:text-4xl"
                style={{ color: 'var(--color-neutral-900)' }}
              >
                {title}
              </h1>
              <p 
                className="text-sm md:text-base"
                style={{ color: 'var(--color-neutral-600)' }}
              >
                {description}
              </p>
              <p 
                className="text-sm md:text-base mt-2"
                style={{ color: 'var(--color-neutral-600)' }}
              >
                Für ein Praktikum in Logistik und Zentrale, schreib uns eine{' '}
                <a 
                  href="mailto:karriere@rewe-sued.de"
                  className="feature253-mail-link text-primary hover:underline font-medium"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Mail
                </a>
                .
              </p>
            </div>
            <div className="relative flex items-center justify-end overflow-hidden flex-shrink-0">
              <div className="feature253-lottie">
                <DotLottieReact
                  src="https://lottie.host/4635c143-f91d-4649-8b20-7b8d7937b53f/XfgyWKWrmN.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature253 };
