import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { BorderButton } from "@/components/shadcnblocks/border-button";
import { Shader7 } from "@/components/shader7";

// Custom hook to get previous value
const usePrevious = value => {
  const [prev, setPrev] = useState(undefined);
  const ref = useRef(value);

  useEffect(() => {
    setPrev(ref.current);
    ref.current = value;
  }, [value]);

  return prev;
};

const Services21 = ({
  className
}) => {
  const careerSteps = [
    {
      id: "{01}",
      title: "Einstieg",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png",
      description:
        "Starte deine Karriere bei REWE – ob als Quereinsteiger, Fachkraft oder in der Ausbildung. Wir bieten dir einen sicheren Einstieg mit umfassender Einarbeitung und einem Buddy-System, das dich von Anfang an unterstützt.",
    },
    {
      id: "{02}",
      title: "Entwicklung",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
      description:
        "Wachse mit uns! Durch gezielte Weiterbildungen, interne Schulungen und Entwicklungsprogramme kannst du deine Fähigkeiten kontinuierlich erweitern und neue Verantwortungen übernehmen.",
    },
    {
      id: "{03}",
      title: "Spezialisierung",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
      description:
        "Finde deine Nische und werde Experte in deinem Bereich. Ob im Markt, in der Logistik, im Einkauf oder in der IT – wir unterstützen dich dabei, deine Stärken zu entwickeln und zu vertiefen.",
    },
    {
      id: "{04}",
      title: "Führung",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img9.png",
      description:
        "Übernimm Verantwortung und führe Teams zum Erfolg. Mit unserem Führungskräfteentwicklungsprogramm und Mentoring unterstützen wir dich auf deinem Weg in eine Führungsposition.",
    },
    {
      id: "{05}",
      title: "Leitung",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img25.jpeg",
      description:
        "Erreiche die Spitze deiner Karriereleiter. Als Marktleiter, Logistikleiter oder in einer anderen Leitungsfunktion prägst du die Zukunft von REWE und entwickelst dich weiter.",
    },
  ];

  const [active, setActive] = useState(0);
  const previousActive = usePrevious(active);

  return (
    <section 
      className={cn("relative py-32 overflow-hidden", className)} 
      id="karriereleiter"
      aria-labelledby="karriereleiter-heading"
    >
      {/* Shader Background */}
      <div className="absolute inset-0 z-0">
        <Shader7 
          className="absolute inset-0 w-full h-full"
          color="#CC071E"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10" />
      </div>

      <div className="container relative z-20">
        <div className="mb-16 text-center">
          <p className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-white">
            Viele Wege. Ein Arbeitgeber.
          </p>
          <h2 
            id="karriereleiter-heading"
            className="text-4xl font-bold tracking-tight mb-4 md:text-5xl text-white"
          >
            Erklimm unsere Karriereleiter
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Mehr als ein Supermarkt – eine Chance für dein Leben.
          </p>
        </div>
        <div className="flex w-full flex-col justify-between lg:flex-row lg:gap-20">
          <div className="top-10 h-fit w-full space-y-7 py-8 lg:sticky lg:max-w-xs">
            <div className="relative h-90 overflow-hidden rounded-lg" role="img" aria-label={`Bild für ${careerSteps[active].title}`}>
              {previousActive !== undefined && (
                <div className="absolute top-0 h-full w-full">
                  <img
                    src={careerSteps[previousActive].image}
                    className="h-full w-full object-cover"
                    alt=""
                    aria-hidden="true" />
                </div>
              )}
              <motion.div
                initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                key={active}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="h-full w-full">
                <img
                  src={careerSteps[active].image}
                  className="h-full w-full object-cover"
                  alt={careerSteps[active].title}
                  aria-hidden="true" />
              </motion.div>
            </div>
            <p className="font-semibold tracking-tight text-white/60 uppercase">
              {careerSteps[active].title}
            </p>
            <p className="text-base text-white/80">
              {careerSteps[active].description}
            </p>
          </div>
          <div className="relative w-full xl:pl-20">
            <ul role="list" aria-label="Karrierestufen">
              {careerSteps.map((step, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActive(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${step.title} - ${step.description}`}
                  aria-current={index === active ? 'true' : 'false'}
                  className={cn(
                    "cursor-pointer border-b border-white/20 py-8 text-5xl font-semibold tracking-tight lg:text-7xl transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-sm"
                  )}>
                  <div className={index === active ? "opacity-100" : "opacity-30"}>
                    <span className="text-white">{step.title}</span>
                    <sup className="align-super text-sm text-white/70 lg:text-3xl">
                      {step.id}
                    </sup>
                  </div>
                </li>
              ))}
            </ul>
            <BorderButton 
              className="group mt-10 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => window.location.href = '#bewerbung'}
              aria-label="Jetzt starten - Zur Bewerbung"
            >
              Jetzt starten{" "}
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:rotate-45" 
                aria-hidden="true"
              />
            </BorderButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services21 };
