import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// REWE CI Farbpalette
const CI = {
  salbei: "#79977c",
  felge: "#b25c8a",
  agave: "#1b919c",
  rosmarin: "#53936c",
  olive: "#8c683b",
  zimt: "#a42757",
  rhabarber: "#cca155",
  lavendel: "#716e8d",
  dijon: "#c0972c",
  fleurDeSel: "#8abbd7",
  apfel: "#74ab5e",
  mango: "#f74820",
  blaubeer: "#166c8e",
  bubblegum: "#f08592",
  pflaume: "#864a6e",
  pfirsich: "#f08559",
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Custom SVG Illustrationen – Farbe via currentColor
const BenefitIcon = ({ name, className }) => {
  const icons = {
    uebernahme: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.15" />
        <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M40 62 L54 76 L82 44" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    aufgaben: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <rect x="20" y="25" width="35" height="35" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
        <rect x="65" y="25" width="35" height="35" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
        <rect x="20" y="70" width="35" height="35" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
        <rect x="65" y="70" width="35" height="35" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    ),
    arbeitszeit: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M60 30 V60 L78 72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    angebote: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <path d="M30 45 H90 V95 H30 Z" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M30 45 L60 20 L90 45" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
        <circle cx="60" cy="70" r="8" fill="currentColor" />
      </svg>
    ),
    azubiprojekte: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <circle cx="40" cy="50" r="12" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="60" cy="42" r="14" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="80" cy="50" r="12" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M20 95 Q20 75 40 75 Q50 75 55 80 Q60 75 65 80 Q70 75 80 75 Q100 75 100 95" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    ),
    worklife: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <path d="M60 95 L30 65 Q20 50 30 38 Q45 25 60 40 Q75 25 90 38 Q100 50 90 65 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    karriere: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <path d="M25 95 L50 70 L70 85 L95 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M80 45 H95 V60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    unbefristet: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <path d="M35 60 Q35 40 55 40 Q70 40 70 60 Q70 80 85 80 Q100 80 100 60 Q100 40 85 40 Q70 40 70 60 Q70 80 55 80 Q35 80 35 60 Z" stroke="currentColor" strokeWidth="4" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    weiterbildung: (
      <svg viewBox="0 0 120 120" fill="none" className={className}>
        <path d="M20 50 L60 30 L100 50 L60 70 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
        <path d="M35 58 V80 Q60 95 85 80 V58" stroke="currentColor" strokeWidth="3" fill="none" />
        <line x1="100" y1="50" x2="100" y2="78" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[name] || null;
};

const azubiBenefits = [
  { icon: "uebernahme", title: "Übernahmegarantie", color: CI.rosmarin },
  { icon: "aufgaben", title: "Vielfältige Aufgaben", color: CI.agave },
  { icon: "arbeitszeit", title: "Flexible Arbeitszeiten", color: CI.dijon },
  { icon: "angebote", title: "Mitarbeitendenangebote", color: CI.felge },
  { icon: "azubiprojekte", title: "Azubiprojekte & Events", color: CI.mango },
  { icon: "worklife", title: "Work-Life-Balance", color: CI.salbei },
  { icon: "karriere", title: "Karrierechancen", color: CI.blaubeer },
];

const professionalBenefits = [
  { icon: "angebote", title: "Mitarbeitendenangebote", color: CI.felge },
  { icon: "arbeitszeit", title: "Flexible Arbeitszeiten", color: CI.dijon },
  { icon: "unbefristet", title: "Unbefristetes Arbeitsverhältnis", color: CI.lavendel },
  { icon: "weiterbildung", title: "Weiterbildungsangebote", color: CI.rhabarber },
  { icon: "worklife", title: "Work-Life-Balance", color: CI.salbei },
];

const BenefitsSpotlight = () => {
  const [tab, setTab] = useState("azubi");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  const benefits = tab === "azubi" ? azubiBenefits : professionalBenefits;
  const activeColor = benefits[selectedIndex]?.color || CI.agave;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    emblaApi?.reInit();
    setSelectedIndex(0);
    emblaApi?.scrollTo(0, true);
  }, [tab, emblaApi]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="h2" style={{ color: '#000000' }}>
            Bei REWE Süd arbeitet&apos;s sich gut. Punkt.
          </h2>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full bg-neutral-100 p-1.5 shadow-inner">
            {[
              { id: "azubi", label: "Azubi" },
              { id: "professional", label: "Professional" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "px-7 py-2.5 rounded-full text-base font-semibold transition-all duration-300",
                  tab === t.id
                    ? "text-white shadow-lg"
                    : "text-neutral-600 hover:text-neutral-900"
                )}
                style={tab === t.id ? { backgroundColor: "#1a1a1a" } : {}}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Coverflow Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {benefits.map((benefit, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={`${tab}-${index}`}
                    className="flex-[0_0_280px] md:flex-[0_0_320px] min-w-0 px-3"
                  >
                    <div
                      className={cn(
                        "relative flex flex-col items-center justify-center rounded-3xl bg-white p-8 transition-all duration-500 border",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[0.85] opacity-40 border-neutral-200"
                      )}
                      style={{
                        aspectRatio: "1 / 1",
                        borderColor: isActive ? hexToRgba(benefit.color, 0.3) : undefined,
                        boxShadow: isActive
                          ? `0 20px 60px -15px ${hexToRgba(benefit.color, 0.35)}, 0 8px 20px -5px ${hexToRgba(benefit.color, 0.15)}`
                          : "0 4px 12px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div
                        className={cn(
                          "w-32 h-32 md:w-40 md:h-40 mb-4 transition-transform duration-500",
                          isActive ? "scale-100" : "scale-90"
                        )}
                        style={{ color: benefit.color }}
                      >
                        <BenefitIcon name={benefit.icon} className="w-full h-full" />
                      </div>
                      <h3
                        className={cn(
                          "text-xl md:text-2xl font-bold text-center tracking-tight leading-tight transition-colors duration-500"
                        )}
                        style={{ color: isActive ? benefit.color : "#9ca3af" }}
                      >
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-neutral-200 bg-white transition-all flex items-center justify-center shadow-sm hover:scale-105"
              style={{
                color: activeColor,
                borderColor: hexToRgba(activeColor, 0.3),
              }}
              aria-label="Vorheriger Benefit"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="text-sm font-medium text-neutral-600 tabular-nums min-w-[50px] text-center">
              {selectedIndex + 1} / {benefits.length}
            </div>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-neutral-200 bg-white transition-all flex items-center justify-center shadow-sm hover:scale-105"
              style={{
                color: activeColor,
                borderColor: hexToRgba(activeColor, 0.3),
              }}
              aria-label="Nächster Benefit"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === selectedIndex ? "w-8" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                )}
                style={i === selectedIndex ? { backgroundColor: benefits[i].color } : {}}
                aria-label={`Zu Benefit ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BenefitsSpotlight };
