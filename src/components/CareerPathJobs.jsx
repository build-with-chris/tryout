import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { careerPathJobs } from "@/data/careerPathJobs";
import { verwaltungJobsDetailed } from "@/data/verwaltungJobsDetailed";
import { Feature253 } from '@/components/feature253';
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
  // Patterns erkennen sowohl gegenderte als auch nicht-gegenderte Titel
  const searchTermMap = [
    { pattern: /Kaufmann\/?-?frau im Einzelhandel, Feinkost/i, term: 'frischetheke' },
    { pattern: /Frischetheke Metzgerei/i, term: 'frischetheke' },
    { pattern: /Ausbildung im Abiturientenprogramm/i, term: 'abiturientenprogramm' },
    { pattern: /Duales Studium.*Handel/i, term: 'Duales Studium Handel' },
    { pattern: /Duales Bachelor Studium BWL.*Handel/i, term: 'duales studium handel' },
    { pattern: /Duales Bachelor.*Logistik/i, term: 'duales studium logistik' },
    { pattern: /Duales Studium Wirtschaftsingenieurwesen/i, term: 'wirtschaftsingenieurwesen' },
    { pattern: /Marktmanager.*Filialleitung/i, term: 'marktmanager' },
    { pattern: /Marktmanager.*Assistent/i, term: 'marktmanager assistent' },
    { pattern: /Aushilfe.*Minijob/i, term: 'aushilfe' },
    { pattern: /Mitarbeitende in speziellen Abteilungen/i, term: 'getränkemarkt' },
    { pattern: /Ausbildung zum Berufskraftfahrer/i, term: 'berufskraftfahrer' },
    { pattern: /Ausbildung zum Fachlagerist/i, term: 'fachlagerist' },
    { pattern: /Ausbildung zur Fachkraft für Lagerlogistik/i, term: 'fachkraft lagerlogistik' },
    { pattern: /Kaufleute für Groß- und Außenhandelsmanagement/i, term: 'großhandel' },
    { pattern: /Kommissionierer.*Lagermitarbeiter/i, term: 'kommissionierer' },
    { pattern: /Lagerassistent/i, term: 'lagerassistent' },
    { pattern: /Teamleiter.*Zentrale/i, term: 'teamleiter verwaltung' },
    { pattern: /Teamleiter/i, term: 'teamleiter logistik' },
    { pattern: /Mitarbeiter.*Wareneingang.*Warenausgang/i, term: 'wareneingang' },
    { pattern: /Berufskraftfahrer/i, term: 'berufskraftfahrer' },
    { pattern: /Werkstudenten.*Kommissionierung/i, term: 'werkstudent logistik' },
    { pattern: /Kaufmann\/?-?frau für Büromanagement/i, term: 'büromanagement' },
    { pattern: /Kaufmann\/?-?frau für Immobilienmanagement|Immobilienkaufmann\/?-?frau/i, term: 'immobilien' },
    { pattern: /Kaufmann\/?-?frau für Marketingkommunikation/i, term: 'marketingkommunikation' },
    { pattern: /Ausbildung zum Kaufmann\/?-?frau für Marketingkommunikation/i, term: 'Ausbildung zum Kaufmann für Marketingkommunikation' },
    { pattern: /Ausbildung zum Kaufmann\/?-?frau für Büromanagement/i, term: 'Ausbildung zum Kaufmann für Büromanagement' },
    { pattern: /Ausbildung zum Immobilienkaufmann\/?-?frau/i, term: 'Ausbildung zum Immobilienkaufmann' },
    { pattern: /Abiturientenprogramm.*Kaufmann\/?-?frau im Groß- und Außenhandel/i, term: 'Abiturientenprogramm Kaufmann im Groß- und Außenhandel' },
    { pattern: /Kaufmann\/?-?frau im Einzelhandel/i, term: 'kaufmann einzelhandel' },
    { pattern: /Kaufmann\/?-?frau im Groß- und Außenhandel/i, term: 'kaufmann groß- und außenhandel' },
    { pattern: /Verkäufer/i, term: 'verkäufer' },
    { pattern: /Sachbearbeiter/i, term: 'sachbearbeiter' },
    { pattern: /Assistenzen/i, term: 'assistenz' },
    { pattern: /Referent/i, term: 'referenten' }
  ];
  
  // Finde passendes Mapping
  let searchTerm = null;
  for (const mapping of searchTermMap) {
    if (mapping.pattern.test(jobTitle)) {
      searchTerm = mapping.term;
      break;
    }
  }
  
  // Fallback: Nutze den ersten Teil des Titels (ohne Klammern und Genderung)
  if (!searchTerm) {
    searchTerm = jobTitle
      .replace(/\s*\([^)]*\)/g, '') // Entferne alles in Klammern
      .replace(/\/-?frau/gi, '') // Entferne "/-frau" oder "/frau"
      .replace(/:in/gi, '') // Entferne ":in"
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

const FRISCHETHEKE_PROFESSIONALS_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=&range=100&sort=distance&shifttypes%5B%5D=F%C3%BChrungsposition&shifttypes%5B%5D=Berufserfahrung&shifttypes%5B%5D=Berufseinstieg&facilities%5B%5D=Frischetheke&lat=0&lng=0&nobounds=&index='

const FRISCHETHEKE_AUSBILDUNG_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=&range=100&sort=distance&shifttypes%5B%5D=Ausbildung&shifttypes%5B%5D=Duales+Studium&shifttypes%5B%5D=Praktikum&shifttypes%5B%5D=Traineeprogramm&facilities%5B%5D=Frischetheke&lat=0&lng=0&nobounds=&index='

const MARKT_AUSBILDUNG_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=&range=25&sort=date&shifttypes%5B%5D=Ausbildung&shifttypes%5B%5D=Praktikum&shifttypes%5B%5D=Traineeprogramm&facilities%5B%5D=Verkauf&lat=0&lng=0&nobounds=&index='

const MARKT_PROFESSIONALS_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=&range=25&sort=date&shifttypes%5B%5D=F%C3%BChrungsposition&shifttypes%5B%5D=Berufserfahrung&shifttypes%5B%5D=Berufseinstieg&facilities%5B%5D=Verkauf&lat=0&lng=0&nobounds=&index='

const LOGISTIK_AUSBILDUNG_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=&range=25&sort=date&shifttypes%5B%5D=Ausbildung&shifttypes%5B%5D=Duales+Studium&shifttypes%5B%5D=Praktikum&shifttypes%5B%5D=Traineeprogramm&facilities%5B%5D=Lager&facilities%5B%5D=Fahren&facilities%5B%5D=Logistikverwaltung&lat=0&lng=0&nobounds=&index='

const LOGISTIK_PROFESSIONALS_URL =
  'https://karriere.rewe.de/jobs/suche?term=&location=&range=25&sort=date&shifttypes%5B%5D=F%C3%BChrungsposition&shifttypes%5B%5D=Berufserfahrung&shifttypes%5B%5D=Berufseinstieg&shifttypes%5B%5D=Aushilfsjob&facilities%5B%5D=Lager&facilities%5B%5D=Fahren&facilities%5B%5D=Logistikverwaltung&lat=0&lng=0&nobounds=&index='

// Globale Jobsuche-Links je Bereich/Phase (für einen stets sichtbaren CTA)
const getAreaSearchLink = (activePath, activePhase) => {
  if (activePath === 'verwaltung' && activePhase === 'ausbildung') {
    return ZENTRALE_AUSBILDUNG_URL
  }

  // Spezieller Sonderfall (wie beim Job-CTA innerhalb der Accordion-Items)
  if (activePath === 'verwaltung' && activePhase === 'professionals') {
    return ZENTRALE_PROFESSIONALS_URL
  }

  if (activePath === 'frischetheke' && activePhase === 'ausbildung') {
    return FRISCHETHEKE_AUSBILDUNG_URL
  }

  if (activePath === 'frischetheke' && activePhase === 'professionals') {
    return FRISCHETHEKE_PROFESSIONALS_URL
  }

  if (activePath === 'markt' && activePhase === 'ausbildung') {
    return MARKT_AUSBILDUNG_URL
  }

  if (activePath === 'markt' && activePhase === 'professionals') {
    return MARKT_PROFESSIONALS_URL
  }

  if (activePath === 'logistik' && activePhase === 'ausbildung') {
    return LOGISTIK_AUSBILDUNG_URL
  }

  if (activePath === 'logistik' && activePhase === 'professionals') {
    return LOGISTIK_PROFESSIONALS_URL
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
  const [expandedPraktika, setExpandedPraktika] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [modalJobId, setModalJobId] = useState(null);

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
    setExpandedPraktika(false);
    setModalJobId(null);
  }, [activePath, activePhase]);

  // Don't render if no path is selected
  if (!activePath) {
    return null;
  }

  // Get jobs for current path and phase
  const currentJobs = careerPathJobs[activePath]?.[activePhase] || [];

  const handleJobToggle = (jobId, event) => {
    // Verhindere Event-Bubbling
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    // Einheitliches Verhalten: Für alle Bereiche öffnet sich ein Modal
    // Stelle sicher, dass die Job-ID korrekt gesetzt wird
    if (jobId) {
      setModalJobId(jobId);
    }
  };

  // Funktion zur Erstellung der Bewerbungs-URL mit Job-Titel als term-Parameter
  const getApplicationUrl = (jobTitle, jobInfo = null) => {
    // Wenn eine spezifische applicationUrl im Job-Objekt vorhanden ist, diese verwenden
    if (jobInfo && jobInfo.applicationUrl) {
      return jobInfo.applicationUrl;
    }

    if (!jobTitle || jobTitle.trim() === '') {
      // Fallback falls kein Titel vorhanden
      return activePath === 'verwaltung' && activePhase === 'ausbildung'
        ? ZENTRALE_AUSBILDUNG_URL
        : activePath === 'verwaltung' && activePhase === 'professionals'
        ? ZENTRALE_PROFESSIONALS_URL
        : getAreaSearchLink(activePath, activePhase);
    }

    // Verwende getJobSearchLink für konsistente Suchbegriffe
    const searchLink = getJobSearchLink(jobTitle);
    // Extrahiere den Suchbegriff aus der URL
    const urlMatch = searchLink.match(/term=([^&]+)/);
    if (urlMatch) {
      return searchLink;
    }

    // Fallback: Entferne Genderung aus dem Titel für die Suche (verwende ursprünglichen Titel)
    // Entferne (m/w/d) und ähnliche Klammern
    let searchTitle = jobTitle
      .replace(/\s*\([^)]*\)/g, '') // Entferne alles in Klammern
      .replace(/\/-?frau/gi, '') // Entferne "/-frau" oder "/frau"
      .replace(/:in/gi, '') // Entferne ":in"
      .replace(/\s+/g, ' ') // Normalisiere Leerzeichen
      .trim();

    // Erstelle neue URL mit bereinigtem Job-Titel als term-Parameter
    const jobTitleParam = encodeURIComponent(searchTitle);
    return `https://karriere.rewe.de/jobs/suche?term=${jobTitleParam}`;
  };

  // Hole detaillierte Job-Informationen für Modal
  const getDetailedJobInfo = (jobId) => {
    if (!jobId) return null;
    
    // Für Verwaltung: zuerst in den detaillierten Daten suchen
    if (activePath === 'verwaltung') {
      const detailedJobs = verwaltungJobsDetailed[activePhase] || [];
      const detailedMatch = detailedJobs.find(job => job.id === jobId);
      if (detailedMatch) return detailedMatch;
    }

    // Fallback bzw. alle anderen Bereiche: Basis-Daten verwenden
    const baseJobs = careerPathJobs[activePath]?.[activePhase] || [];
    const baseMatch = baseJobs.find(job => job.id === jobId);
    return baseMatch || null;
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
    return '';
  };

  return (
    <div className={cn("career-path-jobs", className)}>
      {/* Überschrift über der Timeline */}
      {getHeading() && <h2 className="career-path-jobs-heading">{getHeading()}</h2>}
      
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

      {/* Job-Liste mit Cards, die ein Modal öffnen */}
      <div className="career-path-jobs-list">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activePath}-${activePhase}`}
            {...containerVariants}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            className="career-path-jobs-list-inner"
          >
            {displayedJobs.length > 0 ? (
              displayedJobs.map((job, index) => {
                // Spezieller Fall: Beschreibungstyp für Zentrale Professionals
                if (job.type === 'description') {
                  return (
                    <div
                      key={job.id}
                      className="col-span-2 w-full mb-8 -mx-4 md:-mx-8 lg:-mx-12 xl:-mx-16"
                    >
                      <div className="w-full max-w-[1600px] mx-auto bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-8 lg:p-10">
                        <p className="text-base md:text-lg leading-relaxed text-neutral-700 mb-4 text-center">
                          {job.description}
                        </p>
                        {job.subtitle && (
                          <p className="text-lg md:text-xl font-semibold text-neutral-900 mb-6 text-center">
                            {job.subtitle}
                          </p>
                        )}
                        {job.links && job.links.length > 0 && (
                          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8">
                            {job.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                              >
                                {link.text}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
                
                // Normale Job-Cards
                const currentJobId = job.id;
                return (
                  <div
                    key={currentJobId}
                    className="career-path-jobs-item"
                  >
                    <button
                      className="career-path-jobs-item-button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Verwende die Job-ID direkt aus dem Closure
                        handleJobToggle(currentJobId, e);
                      }}
                      data-job-id={currentJobId}
                    >
                      <div className="career-path-jobs-item-content">
                        <h3 className="career-path-jobs-item-title">
                          {job.title}
                        </h3>
                        <div className="career-path-jobs-item-meta">
                          <span>{job.workModel}</span>
                        </div>
                      </div>
                      <div className="career-path-jobs-item-icon">
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="career-path-jobs-empty">
                <p>Keine Jobs für diese Phase verfügbar.</p>
              </div>
            )}

            {/* Praktika Accordion - nur bei Ausbildung, volle Breite */}
            {activePhase === 'ausbildung' && (
              <div className="career-path-jobs-benefits">
                <div className="career-path-jobs-item career-path-jobs-item-full-width">
                  <button
                    className="career-path-jobs-item-button"
                    onClick={() => setExpandedPraktika(!expandedPraktika)}
                    aria-expanded={expandedPraktika}
                    aria-controls="praktika-details"
                  >
                    <div className="career-path-jobs-item-content">
                      <h3 className="career-path-jobs-item-title">
                        Unsere Praktika:
                      </h3>
                    </div>
                    <motion.div
                      custom={expandedPraktika}
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
                    {expandedPraktika && (
                      <motion.div
                        id="praktika-details"
                        {...accordionVariants}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
                        className="career-path-jobs-item-details"
                      >
                        <div className="career-path-jobs-item-details-inner">
                          <Feature253
                            title="Unsere Praktika:"
                            subtitle="Praktika für Schülerinnen"
                            description="Ein Praktikum bei REWE ist dein perfekter Einblick in die Jobwelt. Auch wenn du noch nicht weißt, wo dein Weg nach dem Schulabschluss hinführt: hier kannst du reinschnuppern."
                            ctaText={
                              (activePath === 'markt' || activePath === 'frischetheke')
                                ? "Bewirb dich einfach im Markt um die Ecke."
                                : null
                            }
                            showMailLink={activePath === 'logistik' || activePath === 'verwaltung'}
                            onCtaClick={() => {
                              console.log('Schreib uns! clicked')
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* CTA Button unter dem Praktika-Accordion (nur bei Ausbildung) */}
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
            
            {/* CTA Button mittig unter allen Job-Elementen (nur bei Professionals, nicht bei description type) */}
            {activePhase === 'professionals' && displayedJobs.length > 0 && 
             !displayedJobs.some(job => job.type === 'description') && (
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

      {/* Modal für alle Bereiche */}
      <AnimatePresence>
        {modalJobId && (() => {
          // Hole die Job-Informationen direkt hier, um sicherzustellen, dass die richtige ID verwendet wird
          const jobInfo = getDetailedJobInfo(modalJobId);
          const jobTitle = displayedJobs.find(j => j.id === modalJobId)?.title || '';
          
          return (
            <JobModal
              key={modalJobId}
              jobId={modalJobId}
              jobInfo={jobInfo}
              jobTitle={jobTitle}
              onClose={() => setModalJobId(null)}
              prefersReducedMotion={prefersReducedMotion}
              getApplicationUrl={getApplicationUrl}
            />
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

// Modal-Komponente für Job-Details
const JobModal = ({ jobId, jobInfo, jobTitle, onClose, prefersReducedMotion, getApplicationUrl }) => {
  const modalVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0 },
    visible: prefersReducedMotion ? {} : { opacity: 1 },
    exit: prefersReducedMotion ? {} : { opacity: 0 }
  };

  const contentVariants = {
    hidden: prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, y: 20 },
    visible: prefersReducedMotion ? {} : { opacity: 1, scale: 1, y: 0 },
    exit: prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, y: 20 }
  };

  const modalContentRef = React.useRef(null);

  useEffect(() => {
    // Beim Öffnen des Modals zum Modal scrollen, damit der Kopfbereich immer sichtbar ist
    if (modalContentRef.current && typeof window !== 'undefined') {
      // Kurze Verzögerung, damit das Modal gerendert ist
      setTimeout(() => {
        const modalRect = modalContentRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY + modalRect.top - 20; // 20px Abstand oben
        
        window.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      }, 100);
    }
  }, [jobId, prefersReducedMotion]);

  if (!jobInfo) return null;

  // Prüfe, ob der Titel "Abiturientenprogramm" oder "Abiprogramm" enthält
  const title = jobInfo.title || jobTitle || '';
  const isAbiprogramm = /Abiturientenprogramm|Abiprogramm/i.test(title);

  return (
    <motion.div
      className="career-path-jobs-modal-overlay"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        ref={modalContentRef}
        className="career-path-jobs-modal-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="career-path-jobs-modal-close"
          onClick={onClose}
          aria-label="Modal schließen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="career-path-jobs-modal-header">
          <h3 className="career-path-jobs-modal-title">{jobInfo.title || jobTitle}</h3>
          <div className="career-path-jobs-modal-meta">
            {jobInfo.location && <span>{jobInfo.location}</span>}
            {jobInfo.contractType && <span>{jobInfo.contractType}</span>}
            {jobInfo.startDate && <span>Start: {jobInfo.startDate}</span>}
          </div>
        </div>

        <div className="career-path-jobs-modal-body">
          {jobInfo.shortDescription && isAbiprogramm && (
            <div className="career-path-jobs-modal-section">
              <h4 className="career-path-jobs-modal-section-title">Abiprogramm</h4>
              <p className="career-path-jobs-item-description">
                {jobInfo.shortDescription}
              </p>
            </div>
          )}

          {jobInfo.shortDescription && !isAbiprogramm && (
            <p className="career-path-jobs-item-description career-path-jobs-modal-intro">
              {jobInfo.shortDescription}
            </p>
          )}

          {jobInfo.tasks && (
            <div className="career-path-jobs-modal-section">
              <h4 className="career-path-jobs-modal-section-title">
                {jobId === 'verwaltung-ausbildung-6' ? 'Deine Aufgaben' : 'Aufgaben'}
              </h4>
              <ul className="career-path-jobs-modal-list">
                {jobInfo.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          )}

          {jobInfo.content && (
            <div className="career-path-jobs-modal-section">
              <h4 className="career-path-jobs-modal-section-title">Das lernst du bei uns</h4>
              <ul className="career-path-jobs-modal-list">
                {jobInfo.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {jobInfo.profile && (
            <div className="career-path-jobs-modal-section">
              <h4 className="career-path-jobs-modal-section-title">
                {jobId === 'verwaltung-ausbildung-6' ? 'Dein Profil' : 'Profil'}
              </h4>
              <ul className="career-path-jobs-modal-list">
                {jobInfo.profile.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {jobInfo.benefits && (
            <div className="career-path-jobs-modal-section">
              <h4 className="career-path-jobs-modal-section-title">Benefits</h4>
              <ul className="career-path-jobs-modal-list">
                {jobInfo.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {jobInfo.plus && (
            <div className="career-path-jobs-modal-section">
              <h4 className="career-path-jobs-modal-section-title">
                {jobId === 'verwaltung-ausbildung-6' ? 'Wir bieten' : 'Darauf kannst du dich freuen'}
              </h4>
              <ul className="career-path-jobs-modal-list">
                {jobInfo.plus.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Fallback für Bereiche ohne detaillierte Daten: Kurzbeschreibung + Bullets aus Basisdaten */}
          {/* Nur anzeigen, wenn shortDescription nicht bereits als Abiprogramm angezeigt wurde */}
          {!jobInfo.tasks && !jobInfo.content && jobInfo.shortDescription && !isAbiprogramm && (
            <div className="career-path-jobs-modal-section">
              <h4 className="career-path-jobs-modal-section-title">Das erwartet dich</h4>
              <p className="career-path-jobs-item-description">
                {jobInfo.shortDescription}
              </p>
              {jobInfo.bullets && jobInfo.bullets.length > 0 && (
                <ul className="career-path-jobs-modal-list">
                  {jobInfo.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="career-path-jobs-modal-footer">
          <a
            href={getApplicationUrl((jobInfo && jobInfo.title) ? jobInfo.title : jobTitle, jobInfo)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg career-path-jobs-modal-cta"
          >
            Jetzt bewerben
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CareerPathJobs;


