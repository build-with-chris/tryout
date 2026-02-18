"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// SVG-Icons für jeden Wert
const getValueIcon = (valueId) => {
  const icons = {
    1: (
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" 
      />
    ),
    2: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
    3: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    ),
    4: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
    ),
    5: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
    ),
    6: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
    ),
  }
  return icons[valueId] || null
}

// Farben für jeden Wert
const getValueColor = (valueId) => {
  const colors = {
    1: "#CC071E", // Sicherheit - Rot
    2: "#0065CB", // Karriere - Blau
    3: "#007D3E", // Zusammenhalt - Grün
    4: "#676767", // Klarheit - Grau
    5: "#8B5CF6", // Verantwortung - Lila
    6: "#FFB800", // Wertschätzung - Gelb
  }
  return colors[valueId] || "#000000"
}

const slides = [
  {
    id: 1,
    shortLabel: "Sicherheit",
    headline: "Sicherer Job. Sicheres Gefühl.",
    description: "Wir schaffen Rahmenbedingungen, auf die du dich verlassen kannst.",
    examples: [
      "Sonderleistungen wie Urlaubs- und Weihnachtsgeld, plus vermögenswirksame Leistungen & betriebliche Altersvorsorge.",
      "Zuschüsse (z.B. Kantine) und vergünstigtes Deutschlandticket / Fahrrad-Leasing."
    ],
    images: [
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8958.jpg",
        position: 2,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8805.jpg",
        position: 4,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9152.jpg",
        position: 7,
      },
    ],
  },
  {
    id: 2,
    shortLabel: "Karriere",
    headline: "Wir begleiten dich auf der Karriereleiter.",
    description: "Weiterkommen ist bei uns kein Zufall. Wir fördern dich individuell — vom ersten Tag an.",
    examples: [
      "Seminarangebot & Weiterbildungsprogramme (plus z.B. E-Learnings, Konferenzen, Hackathons je nach Bereich).",
      "Kickstart-Formate wie REWE Akademie, myCampus und Women's Drive."
    ],
    images: [
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9161.jpg",
        position: 1,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9176.jpg",
        position: 3,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9208.jpg",
        position: 5,
      },
    ],
  },
  {
    id: 3,
    shortLabel: "Zusammenhalt",
    headline: "Umgang auf Augenhöhe",
    description: "REWE steht für null Toleranz gegenüber Diskriminierung, und gleiche Chancen sind unser Anspruch",
    examples: [
      "Wir sprechen offen, ehrlich, respektvoll und wertschätzend - ausdrücklich als Kommunikationsprinzip.",
      "Ein Verhaltenskodex, der diese Art der Kommunikation auf allen Ebenen tragen soll."
    ],
    images: [
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9229.jpg",
        position: 0,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9234.jpg",
        position: 4,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9247.jpg",
        position: 7,
      },
    ],
  },
  {
    id: 4,
    shortLabel: "Klarheit",
    headline: "Halt und Orientierung durch klare Strukturen",
    description: "Regelmäßige Personalgespräche geben Orientierung durch klare Erwartungen und offene Kommunikation",
    examples: [
      "Kommunikation ist unser Schlüsselfaktor und eine klare Leitline im Unternehmen",
      "Informationen, wie Arbeitsmodelle oder deine Benefits werden strukturiert an dich kommuniziert."
    ],
    images: [
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9254.jpg",
        position: 2,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9302.jpg",
        position: 5,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_9400.jpg",
        position: 6,
      },
    ],
  },
  {
    id: 5,
    shortLabel: "Verantwortung",
    headline: "Mitwirken, Verantwortung übernehmen, etwas bewegen.",
    description: "Wir fördern eigenverantwortliches Handeln - und geben Raum, Dinge voranzubringen.",
    examples: [
      "Agiles Arbeitsumfeld: Arbeit in agilen oder cross-funktionalen Teams, eigenverantwortlich und ergebnisorientiert.",
      "Wir schaffen Rahmenbedingungen, die unternehmerisches Denken und eigenverantwortliches Handeln fördern und fordern."
    ],
    images: [
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8135.jpg",
        position: 1,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8185.jpg",
        position: 3,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8222.jpg",
        position: 6,
      },
    ],
  },
  {
    id: 6,
    shortLabel: "Wertschätzung",
    headline: "REWE glaubt an dich. Glaub auch du an dich.",
    description: "Bei REWE steht der Mensch im Mittelpunkt.",
    examples: [
      "Work-Life-Balance-Angebote (z.B. flexible Arbeitszeiten ohne Kernarbeitszeit, Homeoffice-Ausstattung, Sabbatical, ...)",
      "Gesundheitsmanagement (Sport-/Gesundheitsangebote, EGYM Wellpass, betriebsärztliche Leistungen, Erste-Hilfe-Weiterbildungen)."
    ],
    images: [
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8226.jpg",
        position: 0,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8234.jpg",
        position: 4,
      },
      {
        src: "/Logisitik/rewe_logstik_sued_foto-craft_8258.jpg",
        position: 8,
      },
    ],
  },
];

const CaseStudies5 = ({
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState();

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const renderGrid = (images) => {
    return (
      <div
        className={cn("grid h-full w-full grid-cols-3 grid-rows-3 gap-3 p-3", className)}>
        {Array.from({ length: 9 }).map((_, index) => {
          const image = images.find((img) => img.position === index);
          const isImage = Boolean(image);

          return (
            <div
              key={index}
              className={`w-full overflow-hidden rounded-lg ${
                isImage ? "" : "bg-muted"
              }`}>
              {isImage && image?.src && (
                <img
                  src={image.src}
                  alt=""
                  className="aspect-square h-full w-full object-cover md:aspect-video"
                  loading={index === 0 ? "eager" : "lazy"} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="bg-background py-32">
      <div className="relative container">
        <h2 className="h2 text-center mb-xl" style={{ color: '#000000' }}>Bei REWE Süd arbeitet's sich gut. Punkt.</h2>
        <div className="mx-auto w-full overflow-hidden rounded-lg md:border">
          <Carousel setApi={setCarouselApi}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <CarouselContent>
                  {slides.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div
                        className="relative flex items-center justify-center overflow-hidden md:h-[500px]">
                        {renderGrid(testimonial.images)}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>

              <div className="z-2 flex h-full items-center justify-center p-4 md:p-10">
                <div className="flex flex-col gap-y-6 md:gap-y-8 w-full max-w-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-8 w-8 md:h-9 md:w-9 flex-shrink-0"
                        style={{ color: getValueColor(slides[currentIndex].id), transform: 'translateY(-20%)' }}
                      >
                        {getValueIcon(slides[currentIndex].id)}
                      </svg>
                      <h3 className="text-2xl md:text-3xl font-bold leading-none" style={{ color: getValueColor(slides[currentIndex].id) }}>
                        {slides[currentIndex].shortLabel}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.15,
                      }}
                      className="flex flex-col gap-4 min-h-[100px] xl:mr-8">
                      <h4 className="text-xl md:text-2xl font-semibold leading-tight" style={{ color: '#000000' }}>
                        {slides[currentIndex].headline}
                      </h4>
                      <p className="leading-snug tracking-tight sm:text-lg" style={{ color: '#1a1a1a' }}>
                        {slides[currentIndex].description}
                      </p>
                      {slides[currentIndex].examples && slides[currentIndex].examples.length > 0 && (
                        <div className="mt-2">
                          <h5 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#000000' }}>
                            Konkret bedeutet das:
                          </h5>
                          <ul className="space-y-2">
                            {slides[currentIndex].examples.map((example, index) => (
                              <li key={index} className="flex items-start gap-2 sm:text-base" style={{ color: '#1a1a1a' }}>
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: getValueColor(slides[currentIndex].id) }}></span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex h-12 gap-4">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { CaseStudies5 };
