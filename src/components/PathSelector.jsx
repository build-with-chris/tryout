import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import './PathSelector.css'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'
import CareerPathJobs from './CareerPathJobs'

// Video-Daten für Markt, Logistik und Verwaltung
const videoData = {
  markt: {
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    imageAlt: "REWE Markt - Kundenberatung und Verkauf",
    videoUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4",
    videoCaption: "Dein Tag im Markt",
    videoSecondaryCaption: "(2:15 Min)",
  },
  logistik: {
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    imageAlt: "REWE Logistik - Warenbewegung und Kommissionierung",
    videoUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4",
    videoCaption: "Dein Tag in der Logistik",
    videoSecondaryCaption: "(2:30 Min)",
  },
  verwaltung: {
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    imageAlt: "REWE Verwaltung - Büro und Organisation",
    videoUrl: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4",
    videoCaption: "Dein Tag in der Verwaltung",
    videoSecondaryCaption: "(2:20 Min)",
  }
}

// Inhalte für Markt, Logistik und Verwaltung - aus dem Arbeitsalltag
const pathContent = {
  markt: {
    headline: "Im Markt: Wo Menschen einkaufen",
    description: "Du bist da, wo es passiert. Kunden beraten, Ware auffüllen, im Team zusammenarbeiten. Jeder Tag ist anders, aber die Struktur gibt dir Sicherheit.",
    aspects: [
      {
        title: "Dein Arbeitsalltag",
        items: [
          "Kundengespräche an der Kasse und im Verkaufsbereich",
          "Ware auffüllen, Qualität prüfen, Regale ordnen",
          "Im Team Abläufe koordinieren und unterstützen"
        ]
      },
      {
        title: "Team & Zusammenarbeit",
        items: [
          "Kolleg:innen springen ein, wenn es voll wird",
          "Erfahrene Mitarbeitende zeigen dir die Abläufe",
          "Gemeinsam schaffen wir die Schichten"
        ]
      },
      {
        title: "Planbarkeit & Sicherheit",
        items: [
          "Feste Schichtpläne, die du frühzeitig kennst",
          "Klare Aufgaben und Zuständigkeiten",
          "Unbefristete Verträge, keine kurzfristigen Projekte"
        ]
      }
    ]
  },
  logistik: {
    headline: "In der Logistik: Wo alles zusammenkommt",
    description: "Du sorgst dafür, dass die Ware ankommt. Kommissionieren, scannen, bewegen. Strukturierte Abläufe, klares Team, verlässliche Schichten.",
    aspects: [
      {
        title: "Dein Arbeitsalltag",
        items: [
          "Kommissionieren und Ware scannen",
          "Paletten bewegen und sicher lagern",
          "Prozesse sauber dokumentieren"
        ]
      },
      {
        title: "Team & Zusammenarbeit",
        items: [
          "Team unterstützt dich vom ersten Tag an",
          "Klare Übergaben zwischen Schichten",
          "Zusammenarbeit auf Augenhöhe"
        ]
      },
      {
        title: "Planbarkeit & Sicherheit",
        items: [
          "Transparente Schichtmodelle von Anfang an",
          "Sicherheitsbriefing und Einarbeitung",
          "Strukturierte Prozesse, die dir Orientierung geben"
        ]
      }
    ]
  },
  verwaltung: {
    headline: "In der Verwaltung: Wo alles läuft",
    description: "Du sorgst dafür, dass im Hintergrund alles funktioniert. Buchhaltung, Personal, Einkauf – strukturierte Abläufe, klares Team, verlässliche Arbeitszeiten.",
    aspects: [
      {
        title: "Dein Arbeitsalltag",
        items: [
          "Buchhaltung & Finanzen verwalten",
          "Personalwesen & Prozesse gestalten",
          "Einkauf & Beschaffung organisieren"
        ]
      },
      {
        title: "Team & Zusammenarbeit",
        items: [
          "Zusammenarbeit mit verschiedenen Abteilungen",
          "Mentoring durch erfahrene Kolleg:innen",
          "Strukturierte Prozesse und klare Kommunikation"
        ]
      },
      {
        title: "Planbarkeit & Sicherheit",
        items: [
          "Feste Arbeitszeiten, die du frühzeitig kennst",
          "Klare Aufgaben und Zuständigkeiten",
          "Unbefristete Verträge, langfristige Perspektive"
        ]
      }
    ]
  }
}

const PathSelector = () => {
  const [activePath, setActivePath] = useState(null) // null = keine Auswahl, 'markt', 'logistik' oder 'verwaltung'
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isMobile = useIsMobile()
  
  const paths = ['markt', 'logistik', 'verwaltung']

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const handlePathSelect = (path) => {
    if (activePath === path) return // Bereits aktiv
    
    setIsTransitioning(true)
    
    // Kurze Verzögerung für Fade-Out
    setTimeout(() => {
      setActivePath(path)
      setIsTransitioning(false)
    }, 150)
  }

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handlePathSelect(path)
    }
  }

  const currentContent = activePath ? pathContent[activePath] : null
  const currentVideoData = activePath ? videoData[activePath] : null
  
  const youtubeId = currentVideoData?.videoUrl ? getYouTubeVideoId(currentVideoData.videoUrl) : null
  const isYouTube = !!youtubeId

  return (
    <section className="path-selector section" id="path-selector" aria-labelledby="path-heading">
      <div className="container">
        <div className="path-selector-header">
          <h2 id="path-heading" className="path-selector-title">
            REWE ruft. Wohin führt dein Weg?
          </h2>
          <p className="path-selector-subtitle">
            Markt, Logistik oder Verwaltung – entdecke, wo du dich wiederfindest.
          </p>
        </div>

        {/* CTA-Buttons - gleichwertig */}
        <div className="path-selector-ctas" role="group" aria-label="Weg auswählen">
          <button
            className={`path-cta ${activePath === 'markt' ? 'path-cta--active' : ''}`}
            onClick={() => handlePathSelect('markt')}
            onKeyDown={(e) => handleKeyDown(e, 'markt')}
            aria-pressed={activePath === 'markt'}
            aria-expanded={activePath === 'markt'}
            aria-controls="path-content"
            id="path-cta-markt"
          >
            <span className="path-cta-label">Zum Markt</span>
          </button>
          
          <button
            className={`path-cta ${activePath === 'logistik' ? 'path-cta--active' : ''}`}
            onClick={() => handlePathSelect('logistik')}
            onKeyDown={(e) => handleKeyDown(e, 'logistik')}
            aria-pressed={activePath === 'logistik'}
            aria-expanded={activePath === 'logistik'}
            aria-controls="path-content"
            id="path-cta-logistik"
          >
            <span className="path-cta-label">Zur Logistik</span>
          </button>
          
          <button
            className={`path-cta ${activePath === 'verwaltung' ? 'path-cta--active' : ''}`}
            onClick={() => handlePathSelect('verwaltung')}
            onKeyDown={(e) => handleKeyDown(e, 'verwaltung')}
            aria-pressed={activePath === 'verwaltung'}
            aria-expanded={activePath === 'verwaltung'}
            aria-controls="path-content"
            id="path-cta-verwaltung"
          >
            <span className="path-cta-label">Zur Verwaltung</span>
          </button>
        </div>

        {/* Content-Bereich - wechselt je nach Auswahl */}
        {activePath && currentVideoData && (
          <div 
            id="path-content"
            className={`path-content ${isTransitioning ? 'path-content--transitioning' : ''}`}
            role="region"
            aria-live="polite"
            aria-labelledby={`path-cta-${activePath}`}
            aria-label={`Inhalte für ${activePath === 'markt' ? 'Markt' : activePath === 'logistik' ? 'Logistik' : 'Verwaltung'}`}
          >
            {/* Großes Video-Image */}
            <div className="path-video-container">
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    className="path-video-wrapper"
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="path-video-image-container"
                      variants={{
                        initial: { filter: "blur(0px)" },
                        hover: { filter: "blur(4px)" },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <motion.img
                        src={currentVideoData.imageSrc}
                        alt={currentVideoData.imageAlt}
                        className="path-video-image"
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.1 },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.div>
                    <div className="path-video-overlay">
                      <motion.div
                        className="path-video-content"
                        variants={{
                          initial: { gap: "0.5rem" },
                          hover: { gap: "0rem" },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <motion.div
                          variants={{
                            initial: { x: 0, scale: 1 },
                            hover: {
                              x: isMobile ? 0 : "75%",
                              scale: 1.2,
                            },
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <Button
                            size="lg"
                            className="path-video-play-button"
                          >
                            <Play className="path-video-play-icon" />
                            <span className="sr-only">{currentVideoData.videoCaption}</span>
                          </Button>
                        </motion.div>
                        <motion.div
                          className="path-video-text"
                          variants={{
                            initial: { opacity: 1 },
                            hover: { opacity: 0, transform: "-translate-y-3" },
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <p className="path-video-caption">
                            {currentVideoData.videoCaption}
                          </p>
                          <p className="path-video-duration">
                            {currentVideoData.videoSecondaryCaption}
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="path-video-dialog">
                  <DialogTitle className="sr-only">{currentVideoData.videoCaption}</DialogTitle>
                  <DialogDescription className="sr-only">
                    {currentVideoData.videoSecondaryCaption} - {currentVideoData.videoCaption}
                  </DialogDescription>
                  <div className="path-video-player">
                    {isYouTube ? (
                      <iframe
                        className="path-video-iframe"
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                        title="Video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video 
                        className="path-video-element" 
                        controls 
                        autoPlay 
                        src={currentVideoData.videoUrl}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="path-content-inner">
              <div className="path-content-header">
                <h3 className="path-content-headline">
                  {currentContent?.headline}
                </h3>
                <p className="path-content-description">
                  {currentContent?.description}
                </p>
              </div>

              <div className="path-aspects">
                {currentContent?.aspects.map((aspect, index) => (
                  <div key={index} className="path-aspect">
                    <h4 className="path-aspect-title">{aspect.title}</h4>
                    <ul className="path-aspect-list" role="list">
                      {aspect.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="path-aspect-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Wechsel-Button */}
              <div className="path-switch">
                <button
                  className="path-switch-button"
                  onClick={() => {
                    const currentIndex = paths.indexOf(activePath)
                    const nextIndex = (currentIndex + 1) % paths.length
                    handlePathSelect(paths[nextIndex])
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      const currentIndex = paths.indexOf(activePath)
                      const nextIndex = (currentIndex + 1) % paths.length
                      handlePathSelect(paths[nextIndex])
                    }
                  }}
                  aria-label={`Zu ${activePath === 'markt' ? 'Logistik' : activePath === 'logistik' ? 'Verwaltung' : 'Markt'} wechseln`}
                >
                  {activePath === 'markt' ? 'Zur Logistik' : activePath === 'logistik' ? 'Zur Verwaltung' : 'Zum Markt'}
                </button>
              </div>
            </div>

            {/* Karrierepfade-Jobs Ergänzung - unter dem Video */}
            <CareerPathJobs activePath={activePath} />
          </div>
        )}
      </div>
    </section>
  )
}

export default PathSelector

