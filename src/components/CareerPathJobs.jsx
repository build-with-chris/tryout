import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { careerPathJobs } from "@/data/careerPathJobs";
import './CareerPathJobs.css';

// CTA-Links Konfiguration - nur interne Pfade, keine Bewerbungen
const ctaLinks = {
  markt: {
    einstieg: {
      primary: {
        text: "Einstiegsjobs im Bereich ansehen",
        href: "/karriere/markt/einstieg"
      },
      secondary: {
        text: "So läuft der nächste Schritt",
        href: "/karriere/so-gehts-weiter"
      }
    },
    entwicklung: {
      primary: {
        text: "Entwicklungswege im Bereich ansehen",
        href: "/karriere/markt/entwicklung"
      },
      secondary: {
        text: "Weiterkommen mit Plan",
        href: "/karriere/so-gehts-weiter"
      }
    },
    verantwortung: {
      primary: {
        text: "Führungsrollen im Bereich ansehen",
        href: "/karriere/markt/verantwortung"
      },
      secondary: {
        text: "Verantwortung übernehmen: Was das bei REWE Süd heißt",
        href: "/karriere/so-gehts-weiter"
      }
    }
  },
  logistik: {
    einstieg: {
      primary: {
        text: "Einstiegsjobs im Bereich ansehen",
        href: "/karriere/logistik/einstieg"
      },
      secondary: {
        text: "So läuft der nächste Schritt",
        href: "/karriere/so-gehts-weiter"
      }
    },
    entwicklung: {
      primary: {
        text: "Entwicklungswege im Bereich ansehen",
        href: "/karriere/logistik/entwicklung"
      },
      secondary: {
        text: "Weiterkommen mit Plan",
        href: "/karriere/so-gehts-weiter"
      }
    },
    verantwortung: {
      primary: {
        text: "Führungsrollen im Bereich ansehen",
        href: "/karriere/logistik/verantwortung"
      },
      secondary: {
        text: "Verantwortung übernehmen: Was das bei REWE Süd heißt",
        href: "/karriere/so-gehts-weiter"
      }
    }
  },
  verwaltung: {
    einstieg: {
      primary: {
        text: "Einstiegsjobs im Bereich ansehen",
        href: "/karriere/verwaltung/einstieg"
      },
      secondary: {
        text: "So läuft der nächste Schritt",
        href: "/karriere/so-gehts-weiter"
      }
    },
    entwicklung: {
      primary: {
        text: "Entwicklungswege im Bereich ansehen",
        href: "/karriere/verwaltung/entwicklung"
      },
      secondary: {
        text: "Weiterkommen mit Plan",
        href: "/karriere/so-gehts-weiter"
      }
    },
    verantwortung: {
      primary: {
        text: "Führungsrollen im Bereich ansehen",
        href: "/karriere/verwaltung/verantwortung"
      },
      secondary: {
        text: "Verantwortung übernehmen: Was das bei REWE Süd heißt",
        href: "/karriere/so-gehts-weiter"
      }
    }
  }
};

// Phasen-Konfiguration mit Microcopy
const phases = [
  { 
    id: 'einstieg', 
    title: 'Einstieg', 
    microcopy: 'Reinkommen, anlernen, sicher starten.',
    icon: '1' 
  },
  { 
    id: 'entwicklung', 
    title: 'Entwicklung', 
    microcopy: 'Skills ausbauen, mehr Verantwortung im Team.',
    icon: '2' 
  },
  { 
    id: 'verantwortung', 
    title: 'Verantwortung', 
    microcopy: 'Teams führen, Bereiche gestalten.',
    icon: '3' 
  }
];

const CareerPathJobs = ({
  activePath, // 'markt', 'logistik' oder 'verwaltung' - kommt von PathSelector
  className
}) => {
  const [activePhase, setActivePhase] = useState('einstieg');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Reset expanded job when path or phase changes
  useEffect(() => {
    setExpandedJobId(null);
  }, [activePath, activePhase]);

  // Don't render if no path is selected
  if (!activePath) {
    return null;
  }

  // Get jobs for current path and phase
  const currentJobs = careerPathJobs[activePath]?.[activePhase] || [];

  const handleJobToggle = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  // Find active phase index for neutral indicator (not progress)
  const activePhaseIndex = phases.findIndex(p => p.id === activePhase);

  // Animation variants with reduced motion support
  const containerVariants = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    exit: prefersReducedMotion ? {} : { opacity: 0, y: -20 }
  };

  const accordionVariants = {
    initial: prefersReducedMotion ? {} : { height: 0, opacity: 0 },
    animate: prefersReducedMotion ? {} : { height: 'auto', opacity: 1 },
    exit: prefersReducedMotion ? {} : { height: 0, opacity: 0 }
  };

  const iconVariants = {
    rotate: (isExpanded) => ({
      rotate: prefersReducedMotion ? 0 : isExpanded ? 180 : 0
    })
  };

  // Limit jobs to 4
  const displayedJobs = currentJobs.slice(0, 4);

  return (
    <div className={cn("career-path-jobs", className)}>
      {/* Überschrift über der Timeline */}
      <h2 className="career-path-jobs-heading">Diese Berufe erwarten dich.</h2>
      
      {/* Phasen-Navigation - Neutrale Karriere-Stufen */}
      <div className="career-path-jobs-phases">
        <div className="career-path-jobs-timeline-wrapper">
          {/* Neutrale Timeline Line (kein Fortschritt) */}
          <div className="career-path-jobs-timeline-line">
            <motion.div
              className="career-path-jobs-timeline-indicator"
              initial={false}
              animate={{
                width: prefersReducedMotion 
                  ? '0%' 
                  : `${((activePhaseIndex + 1) / phases.length) * 100}%`
              }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: 'easeInOut' }}
            />
          </div>

          {/* Phase Buttons */}
          <div className="career-path-jobs-phases-inner">
            {phases.map((phase, index) => {
              const isActive = activePhase === phase.id;
              
              return (
                <div key={phase.id} className="career-path-jobs-phase-wrapper">
                  <button
                    className={cn(
                      "career-path-jobs-phase-button",
                      isActive && "career-path-jobs-phase-button--active"
                    )}
                    onClick={() => setActivePhase(phase.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`phase-${phase.id}`}
                  >
                    {/* Phase Marker Circle */}
                    <div className="career-path-jobs-phase-marker">
                      <div className="career-path-jobs-phase-marker-inner">
                        <span className="career-path-jobs-phase-number">{phase.icon}</span>
                      </div>
                    </div>
                    <div className="career-path-jobs-phase-label-wrapper">
                      <span className="career-path-jobs-phase-label">{phase.title}</span>
                      <span className="career-path-jobs-phase-microcopy">{phase.microcopy}</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Job-Liste mit Accordion */}
      <div className="career-path-jobs-list">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activePath}-${activePhase}`}
            {...containerVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="career-path-jobs-list-inner"
          >
            {displayedJobs.length > 0 ? (
              displayedJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className="career-path-jobs-item"
                  >
                    <button
                      className="career-path-jobs-item-button"
                      onClick={() => handleJobToggle(job.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`job-details-${job.id}`}
                    >
                      <div className="career-path-jobs-item-content">
                        <h3 className="career-path-jobs-item-title">
                          {job.title}
                        </h3>
                        <div className="career-path-jobs-item-meta">
                          <span>{job.workModel}</span>
                        </div>
                      </div>
                      <motion.div
                        custom={isExpanded}
                        variants={iconVariants}
                        animate="rotate"
                        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                        className="career-path-jobs-item-icon"
                      >
                        <svg
                          className="career-path-jobs-item-icon-svg"
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
                          {...accordionVariants}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
                          className="career-path-jobs-item-details"
                        >
                          <div className="career-path-jobs-item-details-inner">
                            <p className="career-path-jobs-item-description">
                              {job.shortDescription}
                            </p>
                            <ul className="career-path-jobs-item-bullets">
                              {job.bullets.map((bullet, index) => (
                                <li
                                  key={index}
                                  className="career-path-jobs-item-bullet"
                                >
                                  <span className="career-path-jobs-item-bullet-marker">•</span>
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
              <div className="career-path-jobs-empty">
                <p>Keine Jobs für diese Phase verfügbar.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareerPathJobs;
