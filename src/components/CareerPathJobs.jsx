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

const ZENTRALE_AUSBILDUNG_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=Eching%2C+Deutschland&range=50&sort=distance&shifttypes%5B%5D=Ausbildung&shifttypes%5B%5D=Duales+Studium&shifttypes%5B%5D=Werkstudent%3Ainnent%C3%A4tigkeit&facilities%5B%5D=Lager&facilities%5B%5D=Fahren&facilities%5B%5D=Logistikverwaltung&facilities%5B%5D=Gebietsmanagement&facilities%5B%5D=Vertriebsleitung&facilities%5B%5D=Weitere+Funktionen+Vertrieb&facilities%5B%5D=Controlling+%26+Finanzen&facilities%5B%5D=Einkauf&facilities%5B%5D=Human+Resources&facilities%5B%5D=Immobilien&facilities%5B%5D=Informationstechnologie&facilities%5B%5D=Marketing+%26+PR&facilities%5B%5D=Recht+%26+Revision&facilities%5B%5D=Strategie&facilities%5B%5D=Weitere+Funktionen&lat=48.2985765&lng=11.6264352&nobounds=&index='

const ZENTRALE_PROFESSIONALS_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=Eching%2C+Deutschland&range=50&sort=distance&facilities%5B%5D=Gebietsmanagement&facilities%5B%5D=Vertriebsleitung&facilities%5B%5D=Weitere+Funktionen+Vertrieb&facilities%5B%5D=Controlling+%26+Finanzen&facilities%5B%5D=Einkauf&facilities%5B%5D=Human+Resources&facilities%5B%5D=Immobilien&facilities%5B%5D=Informationstechnologie&facilities%5B%5D=Marketing+%26+PR&facilities%5B%5D=Recht+%26+Revision&facilities%5B%5D=Strategie&facilities%5B%5D=Weitere+Funktionen&lat=48.2985765&lng=11.6264352&nobounds=&index='

// Globale Jobsuche-Links je Bereich/Phase (für einen stets sichtbaren CTA)
const getAreaSearchLink = (activePath, activePhase) => {
  if (activePath === 'verwaltung' && activePhase === 'ausbildung') {
    return ZENTRALE_AUSBILDUNG_URL
  }

  // Spezieller Sonderfall (wie beim Job-CTA innerhalb der Accordion-Items)
  if (activePath === 'verwaltung' && activePhase === 'professionals') {
    return ZENTRALE_PROFESSIONALS_URL
  }

  const termMap = {
    markt: {
      ausbildung: 'ausbildung einzelhandel',
      professionals: 'verkäufer',
    },
    frischetheke: {
      ausbildung: 'feinkost',
      professionals: 'frischetheke',
    },
    logistik: {
      ausbildung: 'fachkraft lagerlogistik',
      professionals: 'kommissionierer',
    },
    verwaltung: {
      ausbildung: 'büromanagement',
      professionals: 'sachbearbeiter',
    },
  }

  const term = termMap?.[activePath]?.[activePhase] || activePath || ''
  return `https://karriere.rewe.de/jobs/suche?term=${encodeURIComponent(term)}`
}

const CareerPathJobs = ({
  activePath, // 'markt', 'logistik' oder 'verwaltung' - kommt von PathSelector
  className
}) => {
  const [activePhase, setActivePhase] = useState('ausbildung');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [expandedBenefits, setExpandedBenefits] = useState(false);
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
    setExpandedBenefits(false);
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
                              {job.bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={bulletIndex}
                                  className="career-path-jobs-item-bullet"
                                >
                                  <span className="career-path-jobs-item-bullet-marker">•</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="career-path-jobs-item-cta">
                              <a
                                href={
                                  activePath === 'verwaltung' && activePhase === 'ausbildung'
                                    ? ZENTRALE_AUSBILDUNG_URL
                                    : activePath === 'verwaltung' && activePhase === 'professionals'
                                    ? ZENTRALE_PROFESSIONALS_URL
                                    : getJobSearchLink(job.title)
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="career-path-jobs-item-cta-link"
                              >
                                {activePath === 'verwaltung' && activePhase === 'professionals'
                                  ? 'Alle offenen Jobs'
                                  : activePath === 'verwaltung' && activePhase === 'ausbildung'
                                  ? 'Alle Ausbildungsplätze ansehen'
                                  : 'Jetzt offene Stellen anschauen'}
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

            {/* Benefits-Sektion - nur bei Ausbildung, volle Breite */}
            {activePhase === 'ausbildung' && (
              <div className="career-path-jobs-benefits">
                <div className="career-path-jobs-item career-path-jobs-item-full-width">
                  <button
                    className="career-path-jobs-item-button"
                    onClick={() => setExpandedBenefits(!expandedBenefits)}
                    aria-expanded={expandedBenefits}
                    aria-controls="benefits-details"
                  >
                    <div className="career-path-jobs-item-content">
                      <h3 className="career-path-jobs-item-title">
                        Deine Benefits bei REWE
                      </h3>
                    </div>
                    <motion.div
                      custom={expandedBenefits}
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
                    {expandedBenefits && (
                      <motion.div
                        id="benefits-details"
                        {...accordionVariants}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
                        className="career-path-jobs-item-details"
                      >
                        <div className="career-path-jobs-item-details-inner">
                          <div className="career-path-jobs-benefits-grid">
                            <div className="career-path-jobs-benefit-item">
                              <div className="career-path-jobs-benefit-icon">💶</div>
                              <h4 className="career-path-jobs-benefit-title">Tarifliche Sonderzahlungen</h4>
                              <p className="career-path-jobs-benefit-description">
                                Urlaubs- und Weihnachtsgeld im Rahmen von Tarifvertrag bzw. Betriebsvereinbarung – transparent geregelt und verlässlich.
                              </p>
                            </div>
                            <div className="career-path-jobs-benefit-item">
                              <div className="career-path-jobs-benefit-icon">🚲</div>
                              <h4 className="career-path-jobs-benefit-title">Mobilität &amp; Pendeln</h4>
                              <p className="career-path-jobs-benefit-description">
                                Unterstützung rund um den Arbeitsweg, z. B. über Mobilitätsangebote wie JobRad oder Ticket-Lösungen – je nach Einsatzbereich.
                              </p>
                            </div>
                            <div className="career-path-jobs-benefit-item">
                              <div className="career-path-jobs-benefit-icon">🏦</div>
                              <h4 className="career-path-jobs-benefit-title">Vorsorge &amp; finanzielle Extras</h4>
                              <p className="career-path-jobs-benefit-description">
                                Betriebliche Altersvorsorge und vermögenswirksame Leistungen – abhängig von Tarif/Regelung.
                              </p>
                            </div>
                            <div className="career-path-jobs-benefit-item">
                              <div className="career-path-jobs-benefit-icon">🛒</div>
                              <h4 className="career-path-jobs-benefit-title">Mitarbeitendenrabatte</h4>
                              <p className="career-path-jobs-benefit-description">
                                Vorteile beim Einkauf sowie weitere Vergünstigungen bei Partnern – damit sich Arbeit auch im Alltag lohnt.
                              </p>
                            </div>
                            <div className="career-path-jobs-benefit-item">
                              <div className="career-path-jobs-benefit-icon">🩺</div>
                              <h4 className="career-path-jobs-benefit-title">Gesundheit &amp; Wohlbefinden</h4>
                              <p className="career-path-jobs-benefit-description">
                                Angebote wie betriebsärztliche Betreuung und Gesundheitsaktionen (z. B. Check-ups) – je nach Standort ergänzt um weitere Maßnahmen.
                              </p>
                            </div>
                            <div className="career-path-jobs-benefit-item">
                              <div className="career-path-jobs-benefit-icon">🎓</div>
                              <h4 className="career-path-jobs-benefit-title">Entwicklung &amp; Vereinbarkeit</h4>
                              <p className="career-path-jobs-benefit-description">
                                Individuelle Aus- und Weiterbildungen sowie flexible Modelle, wo es der Job zulässt (z. B. Teilzeitoptionen oder längere Auszeiten nach Regelung).
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* CTA Button unter dem Benefits-Accordion (nur bei Ausbildung) */}
                <div className="career-path-jobs-cta">
                  <a
                    className="btn btn-primary btn-lg career-path-jobs-cta-button"
                    href={getAreaSearchLink(activePath, activePhase)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alle Ausbildungsplätze ansehen
                  </a>
                </div>
              </div>
            )}
            
            {/* CTA Button mittig unter allen Job-Elementen (nur bei Professionals) */}
            {activePhase === 'professionals' && displayedJobs.length > 0 && (
              <div className="career-path-jobs-cta career-path-jobs-cta-full-width">
                <a
                  className="btn btn-primary btn-lg career-path-jobs-cta-button"
                  href={getAreaSearchLink(activePath, activePhase)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alle Jobs ansehen
                </a>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareerPathJobs;
