import React from "react";
import { cn } from "@/lib/utils";
import "./PraktikaInfo.css";

const PraktikaInfo = ({
  className,
  title = "Your Ultimate Solution",
  subtitle = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur",
  ctaText = "Join Today",
  showMailLink = true,
  onCtaClick
}) => {
  return (
    <section className={cn("pt-16 pb-8 md:pb-12", className)}>
      <div className="container">
        <div className="praktika-info-wrapper">
          <div className="praktika-info-container relative flex w-full flex-col justify-between overflow-hidden rounded-4xl border bg-muted p-4 md:flex-row md:p-6">
            <div className="flex h-full praktika-info-text-container flex-col justify-center gap-2 md:gap-3 flex-1">
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
              {showMailLink && (
                <p 
                  className="text-sm md:text-base mt-2"
                  style={{ color: 'var(--color-neutral-600)' }}
                >
                  Für ein Praktikum in Logistik und Zentrale, schreib uns eine{' '}
                  <a 
                    href="mailto:karriere@rewe-sued.de"
                    className="praktika-info-mail-link text-primary hover:underline font-medium"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Mail
                  </a>
                  .
                </p>
              )}
              {ctaText && (
                <p 
                  className="text-sm md:text-base mt-2 font-medium"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {ctaText}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PraktikaInfo };
