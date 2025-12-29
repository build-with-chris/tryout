import { motion } from "framer-motion";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Timeline10 = ({
  className
}) => {
  const [activeCategory, setActiveCategory] = useState('markt');
  const timelinePhases = [
    {
      id: 0,
      title: "Einstieg",
      markt: {
        subheading: "Mitten im Geschehen",
        items: ["Ausbildung", "Verkauf", "Warenverräumung", "Frischetheke"]
      },
      logistik: {
        subheading: "Anpacken & organisieren",
        items: ["Wareneingang", "Lager", "Warenausgang"]
      }
    },
    {
      id: 1,
      title: "Entwicklung",
      markt: {
        subheading: "Verantwortung übernehmen",
        items: ["Teamleitung", "Abteilungsleitung", "Fachbereiche"]
      },
      logistik: {
        subheading: "Koordinieren & steuern",
        items: ["Fachkraft Logistik", "Disposition", "Fuhrpark"]
      }
    },
    {
      id: 2,
      title: "Verantwortung",
      markt: {
        subheading: "Entscheidungen treffen",
        items: ["Marktmanagement", "Bereichsleitung"]
      },
      logistik: {
        subheading: "Führen & weiterdenken",
        items: ["Teamleitung", "Abteilungsleitung", "Leiter Fuhrpark"]
      }
    },
  ];

  return (
    <section className={cn("py-32 relative", className)} id="karriereweg">
      <div className="container flex flex-col items-center">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ob im Markt oder in der Logistik
          </h2>
          <p className="text-lg text-white/80 mb-8">
            bei REWE gibt es nicht den einen Karriereweg.<br />
            Sondern viele Möglichkeiten, die zu deinem Leben passen.
          </p>
          
          {/* Toggle für Markt/Logistik */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm p-1" role="tablist">
              <button
                className={cn(
                  "px-6 py-3 rounded-md font-semibold transition-all text-sm md:text-base flex items-center gap-2",
                  activeCategory === 'markt'
                    ? "bg-primary text-white shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                onClick={() => setActiveCategory('markt')}
                role="tab"
                aria-selected={activeCategory === 'markt'}
              >
                <span className="text-xl">🛒</span>
                Markt
              </button>
              <button
                className={cn(
                  "px-6 py-3 rounded-md font-semibold transition-all text-sm md:text-base flex items-center gap-2",
                  activeCategory === 'logistik'
                    ? "bg-primary text-white shadow-md"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                onClick={() => setActiveCategory('logistik')}
                role="tab"
                aria-selected={activeCategory === 'logistik'}
              >
                <span className="text-xl">🚚</span>
                Logistik
              </button>
            </div>
          </div>
        </div>
        <Card className="relative w-full border-none shadow-none md:py-16 bg-white/10 backdrop-blur-sm rounded-lg">
          <CardContent className="p-0">
            <div className="relative w-full">
              {/* Horizontal Timeline Line */}
              <div className="relative hidden md:block mb-12">
                <Separator className="absolute top-0 left-0 w-full bg-white/20" />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "100%",
                  }}
                  transition={{ ease: "easeOut", duration: 0.8 }}
                  className={cn("absolute top-0 left-0 h-0.5 bg-primary")} />
              </div>

              {/* Horizontal Grid: 3 Etappen nebeneinander */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                {timelinePhases.map((phase, index) => (
                  <div key={phase.id} className="relative">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center md:items-start mb-6">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 md:relative md:top-0 md:left-0 md:translate-x-0 flex size-8 md:size-10 items-center justify-center rounded-full bg-primary z-10">
                          <div className="size-4 md:size-6 rounded-full bg-background" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white text-center md:text-left">
                          {phase.title}
                        </h2>
                      </div>
                    </div>

                    {/* Markt oder Logistik - je nach Auswahl */}
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      {activeCategory === 'markt' ? (
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-white/20">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl md:text-2xl">🛒</span>
                            <h3 className="text-base md:text-lg font-semibold text-white">Markt</h3>
                          </div>
                          <p className="text-xs md:text-sm font-medium text-primary mb-3 md:mb-4">
                            {phase.markt.subheading}
                          </p>
                          <ul className="space-y-1.5 md:space-y-2">
                            {phase.markt.items.map((item, i) => (
                              <li key={i} className="text-xs md:text-sm text-white/90 flex items-center gap-2">
                                <span className="text-primary">→</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-white/20">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl md:text-2xl">🚚</span>
                            <h3 className="text-base md:text-lg font-semibold text-white">Logistik</h3>
                          </div>
                          <p className="text-xs md:text-sm font-medium text-primary mb-3 md:mb-4">
                            {phase.logistik.subheading}
                          </p>
                          <ul className="space-y-1.5 md:space-y-2">
                            {phase.logistik.items.map((item, i) => (
                              <li key={i} className="text-xs md:text-sm text-white/90 flex items-center gap-2">
                                <span className="text-primary">→</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Timeline10 };
