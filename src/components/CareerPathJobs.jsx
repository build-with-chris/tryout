import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { careerPathJobs } from "@/data/careerPathJobs";
import './CareerPathJobs.css';

// CTA-Links Konfiguration - nur interne Pfade, keine Bewerbungen
const ctaLinks = {
  markt: {
    ausbildung: {
      primary: {
        text: "Ausbildungsplätze im Bereich ansehen",
        href: "/karriere/markt/ausbildung"
      },
      secondary: {
        text: "So läuft der nächste Schritt",
        href: "/karriere/so-gehts-weiter"
      }
    },
    professionals: {
      primary: {
        text: "Jobs für Professionals im Bereich ansehen",
        href: "/karriere/markt/professionals"
      },
      secondary: {
        text: "Weiterkommen mit Plan",
        href: "/karriere/so-gehts-weiter"
      }
    }
  },
  logistik: {
    ausbildung: {
      primary: {
        text: "Ausbildungsplätze im Bereich ansehen",
        href: "/karriere/logistik/ausbildung"
      },
      secondary: {
        text: "So läuft der nächste Schritt",
        href: "/karriere/so-gehts-weiter"
      }
    },
    professionals: {
      primary: {
        text: "Jobs für Professionals im Bereich ansehen",
        href: "/karriere/logistik/professionals"
      },
      secondary: {
        text: "Weiterkommen mit Plan",
        href: "/karriere/so-gehts-weiter"
      }
    }
  },
  verwaltung: {
    ausbildung: {
      primary: {
        text: "Ausbildungsplätze im Bereich ansehen",
        href: "/karriere/verwaltung/ausbildung"
      },
      secondary: {
        text: "So läuft der nächste Schritt",
        href: "/karriere/so-gehts-weiter"
      }
    },
    professionals: {
      primary: {
        text: "Jobs für Professionals im Bereich ansehen",
        href: "/karriere/verwaltung/professionals"
      },
      secondary: {
        text: "Weiterkommen mit Plan",
        href: "/karriere/so-gehts-weiter"
      }
    }
  }
};

// Phasen-Konfiguration mit Microcopy
const phases = [
  { 
    id: 'ausbildung', 
    title: 'Ausbildung', 
    microcopy: 'Lernen, wachsen, durchstarten.',
    icon: '1' 
  },
  { 
    id: 'professionals', 
    title: 'Direkteinstieg', 
    microcopy: 'Erfahrung einbringen, weiterkommen.',
    icon: '2' 
  }
];

// Funktion zur Generierung des Job-Suchlinks basierend auf Job-Titel
const getJobSearchLink = (jobTitle) => {
  // Spezielle Mappings für bessere Suchergebnisse (in Reihenfolge der Spezifität)
  const searchTermMap = [
    { pattern: /Kaufmann im Einzelhandel, Feinkost/i, term: 'frischetheke' },
    { pattern: /Frischetheke Metzgerei/i, term: 'frischetheke' },
    { pattern: /Ausbildung im Abiturientenprogramm/i, term: 'abiturientenprogramm' },
    { pattern: /Duales Bachelor Studium BWL.*Handel/i, term: 'duales studium handel' },
    { pattern: /Duales Bachelor.*Logistik/i, term: 'duales studium logistik' },
    { pattern: /Duales Studium Wirtschaftsingenieurwesen/i, term: 'wirtschaftsingenieurwesen' },
    { pattern: /Marktmanager.*Filialleitung/i, term: 'marktmanager' },
    { pattern: /Marktmanager Assistent/i, term: 'marktmanager assistent' },
    { pattern: /Aushilfe.*Minijob/i, term: 'aushilfe' },
    { pattern: /Mitarbeitende in speziellen Abteilungen/i, term: 'getränkemarkt' },
    { pattern: /Ausbildung zum Berufskraftfahrer/i, term: 'berufskraftfahrer' },
    { pattern: /Ausbildung zum Fachlageristen/i, term: 'fachlagerist' },
    { pattern: /Ausbildung zur Fachkraft für Lagerlogistik/i, term: 'fachkraft lagerlogistik' },
    { pattern: /Kaufleute für Groß- und Außenhandelsmanagement/i, term: 'großhandel' },
    { pattern: /Kommissionierer.*Lagermitarbeiter/i, term: 'kommissionierer' },
    { pattern: /Lagerassistenten/i, term: 'lagerassistent' },
    { pattern: /Teamleiter.*Zentrale/i, term: 'teamleiter verwaltung' },
    { pattern: /Teamleiter/i, term: 'teamleiter logistik' },
    { pattern: /Mitarbeiter Wareneingang.*Warenausgang/i, term: 'wareneingang' },
    { pattern: /Berufskraftfahrer/i, term: 'berufskraftfahrer' },
    { pattern: /Werkstudenten.*Kommissionierung/i, term: 'werkstudent logistik' },
    { pattern: /Kaufmann für Büromanagement/i, term: 'büromanagement' },
    { pattern: /Kaufmann für Immobilienmanagement/i, term: 'immobilien' },
    { pattern: /Kaufmann für Marketingkommunikation/i, term: 'marketing' },
    { pattern: /Kaufmann im Einzelhandel/i, term: 'kaufmann einzelhandel' },
    { pattern: /Verkäufer/i, term: 'verkäufer' },
    { pattern: /Sachbearbeiter/i, term: 'sachbearbeiter' },
    { pattern: /Assistenzen/i, term: 'assistenz' },
    { pattern: /Referenten/i, term: 'referenten' }
  ];
  
  // Finde passendes Mapping
  let searchTerm = null;
  for (const mapping of searchTermMap) {
    if (mapping.pattern.test(jobTitle)) {
      searchTerm = mapping.term;
      break;
    }
  }
  
  // Fallback: Nutze den ersten Teil des Titels (ohne Klammern)
  if (!searchTerm) {
    searchTerm = jobTitle
      .replace(/\s*\([^)]*\)/g, '') // Entferne alles in Klammern
      .trim()
      .split(' ')[0]
      .toLowerCase();
  }
  
  // URL-encode den Suchbegriff
  const encodedTerm = encodeURIComponent(searchTerm);
  return `https://karriere.rewe.de/jobs/suche?term=${encodedTerm}`;
};

const CareerPathJobs = ({
  activePath, // 'markt', 'logistik' oder 'verwaltung' - kommt von PathSelector
  className
}) => {
  const [activePhase, setActivePhase] = useState('ausbildung');
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

  // Display all jobs
  const displayedJobs = currentJobs;

  // Dynamische Überschrift basierend auf dem aktiven Bereich
  const getHeading = () => {
    const headings = {
      markt: 'Der Markt wartet auf dich',
      logistik: 'Die Logistik wartet auf dich',
      verwaltung: 'Die Zentrale wartet auf dich',
      frischetheke: 'Die Frischetheke wartet auf dich'
    };
    return headings[activePath] || 'Diese Berufe erwarten dich.';
  };

  return (
    <div className={cn("career-path-jobs", className)}>
      {/* Überschrift über der Timeline */}
      <h2 className="career-path-jobs-heading">{getHeading()}</h2>
      
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
                            <div className="career-path-jobs-item-cta">
                              <a
                                href={getJobSearchLink(job.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="career-path-jobs-item-cta-link"
                              >
                                Jetzt offene Stellen anschauen
                              </a>
                            </div>
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
