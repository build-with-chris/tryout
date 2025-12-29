import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { careerPathJobs } from "@/data/careerPathJobs";

const Timeline10 = ({
  className
}) => {
  const [activeCategory, setActiveCategory] = useState('markt');
  const [activePhase, setActivePhase] = useState('einstieg');
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Reset expanded job when category or phase changes
  useEffect(() => {
    setExpandedJobId(null);
  }, [activeCategory, activePhase]);

  const phases = [
    { id: 'einstieg', title: 'Einstieg', label: 'Einstieg' },
    { id: 'entwicklung', title: 'Entwicklung', label: 'Entwicklung' },
    { id: 'verantwortung', title: 'Verantwortung', label: 'Verantwortung' }
  ];

  // Get jobs for current category and phase
  const currentJobs = careerPathJobs[activeCategory]?.[activePhase] || [];

  // CTA logic based on active phase
  const getCTA = () => {
    if (activePhase === 'einstieg') {
      return {
        primary: 'Bewerbung in 60 Sekunden',
        subline: 'Ohne Lebenslauf. Einfach starten.',
        href: '#bewerbung?weg=heute'
      };
    } else {
      return {
        primary: 'Weiterkommen mit Plan',
        subline: 'Schritt für Schritt mehr Verantwortung übernehmen.',
        href: '#bewerbung?weg=plan'
      };
    }
  };

  const cta = getCTA();

  const handleJobToggle = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

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

        {/* Phasen-Navigation */}
        <div className="w-full max-w-4xl mb-12">
          <div className="flex justify-center gap-2 md:gap-4 mb-8">
            {phases.map((phase, index) => (
              <React.Fragment key={phase.id}>
                <button
                  className={cn(
                    "px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base",
                    "flex items-center gap-2 relative",
                    activePhase === phase.id
                      ? "bg-white/20 text-white border-2 border-white/40"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border-2 border-transparent"
                  )}
                  onClick={() => setActivePhase(phase.id)}
                  role="tab"
                  aria-selected={activePhase === phase.id}
                  aria-controls={`phase-${phase.id}`}
                >
                  {index > 0 && (
                    <span className="absolute -left-2 md:-left-4 text-white/30 text-lg">→</span>
                  )}
                  <span>{phase.title}</span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Job-Liste mit Accordion */}
        <div className="w-full max-w-4xl mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${activePhase}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentJobs.length > 0 ? (
                currentJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <div
                      key={job.id}
                      className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden transition-all hover:bg-white/15"
                    >
                      <button
                        className="w-full text-left p-4 md:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent"
                        onClick={() => handleJobToggle(job.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`job-details-${job.id}`}
                      >
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 text-xs md:text-sm text-white/70">
                            <span>{job.workModel}</span>
                            {job.entryLevel && (
                              <>
                                <span>•</span>
                                <span>{job.entryLevel}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            id={`job-details-${job.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0 border-t border-white/10">
                              <p className="text-white/90 mb-4 text-sm md:text-base leading-relaxed">
                                {job.shortDescription}
                              </p>
                              <ul className="space-y-2 mb-4">
                                {job.bullets.map((bullet, index) => (
                                  <li
                                    key={index}
                                    className="text-white/80 text-sm md:text-base flex items-start gap-2"
                                  >
                                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center">
                  <p className="text-white/70">Keine Jobs für diese Phase verfügbar.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Kontextabhängige CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-full max-w-2xl text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8">
            <a
              href={cta.href}
              className="btn btn-primary btn-lg mb-3 block md:inline-block"
              style={{ display: 'inline-block', minWidth: '280px' }}
            >
              {cta.primary}
            </a>
            {cta.subline && (
              <p className="text-white/70 text-sm md:text-base mt-2">
                {cta.subline}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Timeline10 };
