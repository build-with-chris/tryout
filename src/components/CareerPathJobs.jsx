import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { careerPathJobs } from "@/data/careerPathJobs";
import './CareerPathJobs.css';

const CareerPathJobs = ({
  activePath, // 'markt' oder 'logistik' - kommt von PathSelector
  className
}) => {
  const [activePhase, setActivePhase] = useState('einstieg');
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Reset expanded job when path or phase changes
  useEffect(() => {
    setExpandedJobId(null);
  }, [activePath, activePhase]);

  // Don't render if no path is selected
  if (!activePath) {
    return null;
  }

  const phases = [
    { id: 'einstieg', title: 'Einstieg', label: 'Einstieg', icon: '1' },
    { id: 'entwicklung', title: 'Entwicklung', label: 'Entwicklung', icon: '2' },
    { id: 'verantwortung', title: 'Verantwortung', label: 'Verantwortung', icon: '3' }
  ];

  // Get jobs for current path and phase
  const currentJobs = careerPathJobs[activePath]?.[activePhase] || [];

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

  // Find active phase index for progress calculation
  const activePhaseIndex = phases.findIndex(p => p.id === activePhase);

  return (
    <div className={cn("career-path-jobs", className)}>
      {/* Phasen-Navigation - Elegante Timeline */}
      <div className="career-path-jobs-phases">
        <div className="career-path-jobs-timeline-wrapper">
          {/* Timeline Line */}
          <div className="career-path-jobs-timeline-line">
            <motion.div
              className="career-path-jobs-timeline-progress"
              initial={false}
              animate={{
                width: `${(activePhaseIndex / (phases.length - 1)) * 100}%`
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>

          {/* Phase Buttons */}
          <div className="career-path-jobs-phases-inner">
            {phases.map((phase, index) => {
              const isActive = activePhase === phase.id;
              const isPast = index < activePhaseIndex;
              
              return (
                <div key={phase.id} className="career-path-jobs-phase-wrapper">
                  <button
                    className={cn(
                      "career-path-jobs-phase-button",
                      isActive && "career-path-jobs-phase-button--active",
                      isPast && "career-path-jobs-phase-button--past"
                    )}
                    onClick={() => setActivePhase(phase.id)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`phase-${phase.id}`}
                  >
                    {/* Phase Marker Circle */}
                    <div className="career-path-jobs-phase-marker">
                      <div className="career-path-jobs-phase-marker-inner">
                        {isPast ? (
                          <svg
                            className="career-path-jobs-phase-check"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <span className="career-path-jobs-phase-number">{phase.icon}</span>
                        )}
                      </div>
                    </div>
                    <span className="career-path-jobs-phase-label">{phase.title}</span>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="career-path-jobs-list-inner"
          >
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => {
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
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
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

      {/* Kontextabhängige CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="career-path-jobs-cta"
      >
        <div className="career-path-jobs-cta-inner">
          <a
            href={cta.href}
            className="btn btn-primary btn-lg career-path-jobs-cta-button"
          >
            {cta.primary}
          </a>
          {cta.subline && (
            <p className="career-path-jobs-cta-subline">
              {cta.subline}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CareerPathJobs;

